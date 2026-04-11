<?php

namespace App\Http\Controllers;

use App\Models\Agency;
use App\Http\Requests\StoreAgencyRequest;
use App\Http\Requests\UpdateAgencyRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Gamca/Agencies/ViewAgency', [
            'agencies' => Agency::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Gamca/Agencies/CreateAgency');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAgencyRequest $request)
    {
        $validated = $request->validate([
            'agency_id' => 'required|string|max:50|unique:agencies,agency_id',
            'agency_name' => 'required|string|max:120',
            'proprietor_name' => 'nullable|string|max:120',
            'address' => 'nullable|string',
        ]);

        // Add logged-in user name manually
        if ($user = Auth::user()) {
            $validated['user_name'] = $user->name;
        } else {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        Agency::create($validated);

        return redirect()->route('agencies.index')
            ->with('success', 'Agency created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Agency $agency)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Agency $agency)
    {
        return Inertia::render('Gamca/Agencies/EditAgency', [
            "agency" => $agency
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAgencyRequest $request, Agency $agency)
    {
        $validated = $request->validate([
            'agency_id' => 'required|string|max:50|unique:agencies,agency_id,' . $agency->id,
            'agency_name' => 'required|string|max:120',
            'proprietor_name' => 'nullable|string|max:120',
            'address' => 'nullable|string',
        ]);

        $userName = Auth::user() ? Auth::user()->name : $agency->user_name;

        $agency->update(array_merge($validated, [
            'user_name' => $userName
        ]));

        return redirect()->route('agencies.index')
            ->with('success', 'Agency updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Agency $agency)
    {
        $agency->delete();
        return redirect()->route('agencies.index')->with('success', 'Agency deleted.');
    }
}
