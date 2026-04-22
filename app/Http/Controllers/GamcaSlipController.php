<?php

namespace App\Http\Controllers;

use App\Models\GamcaSlip;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Http;

class GamcaSlipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gamcaSlips = GamcaSlip::orderBy('id', 'desc')->get();

        return inertia('Gamca/GamcaSlip/ViewGamcaSlip', [
            'auth' => ['user' => auth()->user()],
            'gamcaSlips' => $gamcaSlips,
            'flash' => session()->get('flash'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Gamca/GamcaSlip/CreateGamcaSlip');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // ✅ Validation
        $data = $request->validate([
            'country'                => 'required|string|max:100',
            'city'                   => 'required|string|max:100',
            'travel_country'         => 'required|string|max:100',

            'first_name'             => 'required|string|max:100',
            'last_name'              => 'nullable|string|max:100',
            'dob'                    => 'required|date',
            'nationality'            => 'required|string|max:100',
            'gender'                 => 'required|in:Male,Female,Other',
            'marital_status'         => 'required|string|max:50',

            // 'passport_number'        => 'required|string|max:50',
            'passport_number' => ['required', 'regex:/^[A-Z]{1}[0-9]{8}$/'],
            'passport_issue_date'    => 'required|date',
            'passport_issue_place'   => 'required|string|max:100',
            'passport_expiry_date'   => 'required|date',

            'visa_type'              => 'required|string|max:50',

            'email'                  => 'required|email',
            'phone'                  => 'required|string|max:20',

            'nid'                    => 'required|string|max:50',
            'position_applied'       => 'nullable|string|max:100',

            'passport_image' => [
                'required',
                'file',
                'mimes:jpeg,png,jpg,pdf',
                'max:10240' // 10MB
            ],

            'trx_id'                    => 'required|string|max:50',
        ]);

        // ✅ User (optional)
        if (Auth::check()) {
            $data['user_id'] = Auth::id();
        }

        // ✅ Confirm Passport Check
        if ($request->passport_number !== $request->confirm_passport) {
            return back()->withErrors([
                'passport_number' => 'Passport number does not match!'
            ]);
        }

        // ✅ Upload Folder
        $path = public_path('uploads/passports/');
        if (!File::exists($path)) {
            File::makeDirectory($path, 0755, true);
        }

        // ✅ Image Manager
        $manager = new ImageManager(new Driver());

        // ✅ File Upload
        if ($request->hasFile('passport_image')) {

            $file = $request->file('passport_image');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();

            // Image হলে resize
            if (in_array($file->getClientOriginalExtension(), ['jpg', 'jpeg', 'png'])) {
                $img = $manager->read($file->getRealPath())->resize(600, 400);
                $img->save($path . $filename, 80);
            } else {
                $file->move($path, $filename);
            }

            $data['passport_image'] = $filename;
        }

        // ✅ Payment Default
        $data['amount'] = 1500;
        $data['payment_status'] = 'pending';

        // ✅ Save Data
        $slip = GamcaSlip::create($data);

        // ✅ Redirect to bKash Payment Page
        return redirect()->route('bkash.pay', $slip->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(GamcaSlip $gamcaSlip)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GamcaSlip $gamcaSlip)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GamcaSlip $gamcaSlip)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GamcaSlip $gamcaSlip)
    {
        $gamcaSlip->delete();
        return redirect()->route('gamca-slip.index')->with('success', '✅ Slip Deleted successfully.');
    }

    // 🔹 Step 1: Pay
    public function pay($id)
    {
        $slip = GamcaSlip::findOrFail($id);

        // Step 1: Get Token
        $tokenResponse = Http::withHeaders([
            'username' => env('BKASH_USERNAME'),
            'password' => env('BKASH_PASSWORD'),
        ])->post(env('BKASH_BASE_URL') . '/token/grant', [
            'app_key' => env('BKASH_APP_KEY'),
            'app_secret' => env('BKASH_APP_SECRET'),
        ]);

        $tokenData = $tokenResponse->json();

        if (!isset($tokenData['id_token'])) {
            return back()->with('error', 'bKash token failed');
        }

        $idToken = $tokenData['id_token'];

        // Step 2: Create Payment
        $paymentResponse = Http::withHeaders([
            'Authorization' => $idToken,
            'X-APP-Key' => env('BKASH_APP_KEY'),
        ])->post(env('BKASH_BASE_URL') . '/create', [
            'mode' => '0011',
            'payerReference' => 'user_' . $slip->id,
            'callbackURL' => route('bkash.callback'),
            'amount' => $slip->amount,
            'currency' => 'BDT',
            'intent' => 'sale',
            'merchantInvoiceNumber' => 'INV-' . $slip->id,
        ]);

        $paymentData = $paymentResponse->json();

        if (isset($paymentData['bkashURL'])) {
            // Save payment ID
            $slip->update([
                'payment_id' => $paymentData['paymentID']
            ]);

            return redirect($paymentData['bkashURL']);
        }

        return back()->with('error', 'Payment create failed');
    }

    // 🔹 Step 3: Callback
    public function callback(Request $request)
    {
        if ($request->status == 'success') {

            // Step 4: Execute Payment
            $executeResponse = Http::withHeaders([
                'Authorization' => session('bkash_token'),
                'X-APP-Key' => env('BKASH_APP_KEY'),
            ])->post(env('BKASH_BASE_URL') . '/execute', [
                'paymentID' => $request->paymentID
            ]);

            $executeData = $executeResponse->json();

            if (isset($executeData['trxID'])) {

                $slip = GamcaSlip::where('payment_id', $request->paymentID)->first();

                $slip->update([
                    'trx_id' => $executeData['trxID'],
                    'payment_status' => 'success'
                ]);

                return redirect('/success');
            }
        }

        return redirect('/failed');
    }
}