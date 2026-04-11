<?php

namespace App\Http\Controllers;

use App\Models\RepeatTest;
use App\Http\Requests\StoreRepeatTestRequest;
use App\Http\Requests\UpdateRepeatTestRequest;
use App\Models\MedicalTest;
use App\Models\PreMedical;
use App\Models\RepeatTestItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RepeatTestController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:repeat-test-list|repeat-test-create|repeat-test-edit|repeat-test-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:repeat-test-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:repeat-test-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:repeat-test-delete', ['only' => ['destroy']]);
        $this->middleware('permission:repeat-test-money-receipt', ['only' => ['repeatMoneyReceipt']]);
        // $this->middleware('permission:repeat-test-summary-report', ['only' => ['summaryReport']]);
        // $this->middleware('permission:repeat-test-summary-details', ['only' => ['summaryDetails']]);
        // $this->middleware('permission:repeat-test-due-check', ['only' => ['duesCheck']]);
        //comments gulo already permission table add ase
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $repeatTests = RepeatTest::with(['items', 'preMedical'])
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('Gamca/RepeatTest/ViewRepeatTest', [
            'repeatTests' => $repeatTests,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $passportNo = $request->query('passport_no');
        $preMedical = null;

        if ($passportNo) {
            $preMedical = PreMedical::where('passport_no', $passportNo)->first();
        }

        $tests = MedicalTest::select('id', 'test_name', 'fee')->get();

        // সবসময় ফর্ম রেন্ডার করবে (পাসপোর্ট না থাকলেও)
        return Inertia::render('Gamca/RepeatTest/CreateRepeatTest', [
            'preMedical' => $preMedical,
            'tests' => $tests,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRepeatTestRequest $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            // 'pre_medical_id' => 'required|integer|exists:pre_medicals,id',
            'pre_medical_id' => 'required|exists:pre_medicals,pre_medical_id',
            'delivery_date' => 'nullable|date',
            'entry_date' => 'nullable|date',
            'is_free' => 'boolean',
            'deduct' => 'nullable|numeric',
            'total' => 'nullable|numeric',
            'net_pay' => 'nullable|numeric',
            'items' => 'nullable|array|min:1',
            'items.*.medical_test_id' => 'required|integer|exists:medical_tests,id',
            'items.*.amount' => 'required|numeric',
        ]);

        // 🔹 Serial number auto generate
        $serialNo = 'RT-' . str_pad(RepeatTest::count() + 1, 6, '0', STR_PAD_LEFT);

        DB::beginTransaction();
        try {
            $repeatTest = RepeatTest::create([
                'pre_medical_id' => $validated['pre_medical_id'],
                'delivery_date' => $validated['delivery_date'] ?? now(),
                'entry_date' => Carbon::now('Asia/Dhaka')->toDateString(),
                'is_free' => $validated['is_free'] ?? false,
                'deduct' => $validated['deduct'] ?? 0,
                'total' => $validated['total'] ?? 0,
                'net_pay' => $validated['net_pay'] ?? 0,
                'serial_no' => $serialNo,
                'user_name' => Auth::user()->name,
            ]);

            foreach ($validated['items'] as $item) {
                RepeatTestItem::create([
                    'repeat_test_id' => $repeatTest->id,
                    'medical_test_id' => $item['medical_test_id'],
                    'amount' => $item['amount'],
                ]);
            }

            DB::commit();
            // ✅ Redirect to print view
            return redirect()->route('repeat-tests.receipt', $repeatTest->id);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }





    /**
     * Display the specified resource.
     */
    public function show(RepeatTest $repeatTest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RepeatTest $repeatTest)
    {
        $repeatTest->load('items.medicalTest', 'preMedical');
        // $repeatTest = RepeatTest::with(['items', 'preMedical']);
        $tests = MedicalTest::all();

        return Inertia::render('Gamca/RepeatTest/EditRepeatTest', [
            'repeatTest' => $repeatTest,
            'tests' => $tests,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRepeatTestRequest $request, RepeatTest $repeatTest)
    {
        $validated = $request->validate([
            'delivery_date' => 'required|date',
            'is_free' => 'boolean',
            'deduct' => 'nullable|numeric|min:0',
            'total' => 'required|numeric|min:0',
            'net_pay' => 'required|numeric|min:0',
            'items' => 'required|array|min:1',
            'items.*.medical_test_id' => 'required|exists:medical_tests,id',
            'items.*.amount' => 'required|numeric|min:0',
        ]);

        DB::transaction(function () use ($repeatTest, $validated) {
            $repeatTest->update([
                'delivery_date' => $validated['delivery_date'],
                'is_free' => $validated['is_free'] ?? false,
                'deduct' => $validated['deduct'] ?? 0,
                'total' => $validated['total'],
                'net_pay' => $validated['net_pay'],
            ]);

            $repeatTest->items()->delete();
            foreach ($validated['items'] as $item) {
                $repeatTest->items()->create($item);
            }
        });

        return redirect()->route('repeat-test.index')->with('success', 'Repeat Test updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RepeatTest $repeatTest)
    {
        try {
            // সব child data delete করো
            $repeatTest->items()->delete();
            $repeatTest->delete();

            return redirect()->back()->with('success', 'Repeat Test deleted successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to delete record: ' . $e->getMessage());
        }
    }

    public function repeatMoneyReceipt($id)
    {
        $data = RepeatTest::with(['items.medicalTest', 'preMedical'])->findOrFail($id);
        return Inertia::render('Gamca/RepeatTest/RepeatMoneyReceipt', [
            'data' => $data
        ]);
    }
}
