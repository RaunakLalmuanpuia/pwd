<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Applicants;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
class ApplicantController extends Controller
{
    //
//    public function bio(){
//
//        $existingData = Applicants::where('user_id', Auth::id())->first();
//        return inertia("Applicant/Bio",[
//            'existingData' => $existingData,
//        ]);
//
//    }

    public function bio()
    {
        $existingBio = Applicants::where('user_id', Auth::id())->first();
        $existingAddress = Address::where('user_id', Auth::id())->first();

        return inertia("Applicant/BioAddress", [
            'existingBio' => $existingBio,
            'existingAddress' => $existingAddress,
        ]);
    }

    /**
     * Store applicant bio information.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function store_bio(Request $request)
    {
//        dd($request);
        $validatedData = $this->validateBio($request);

        DB::beginTransaction();
        try {

            $existingApplicant = Applicants::where('user_id', Auth::id())->first();

            if ($existingApplicant) {
                return redirect()->back()->with('success', 'Bio Saved Successfully.');
            }

            // Handle file uploads
            $filePaths = $this->handleFileUploads($request, ['community_attachment', 'passport_attachment', 'signature_attachment']);

            // Create applicant record
            $applicant = Applicants::create(array_merge($validatedData, [
                'user_id' => Auth::id(),
                'community' => $validatedData['community']['value'],
                'religion' => $validatedData['religion']['value'],
                'nationality' => $validatedData['nationality']['value'],
                'community_attachment' => $filePaths['community_attachment'] ?? null,
                'passport_photo' => $filePaths['passport_attachment'] ?? null,
                'signature_photo' => $filePaths['signature_attachment'] ?? null,
            ]));

            DB::commit();

            return to_route('applicant.bio')->with('success', 'Bio saved successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->cleanupUploadedFiles($filePaths);

            return response()->json([
                'message' => 'An error occurred while saving the data.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update applicant bio information.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Applicants  $applicant
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function update_bio(Request $request, Applicants $applicant)
    {
//        $this->authorize('update_bio', [$applicant]);
//        dd($request);
        $validatedData = $this->validateBio($request);

        DB::beginTransaction();
        try {
            // Handle file uploads
            $filePaths = $this->handleFileUploads($request, ['community_attachment', 'passport_attachment', 'signature_attachment'], $applicant);

            // Update applicant record
            $applicant->update(array_merge($validatedData, [
                'community' => $validatedData['community']['value'],
                'religion' => $validatedData['religion']['value'],
                'nationality' => $validatedData['nationality']['value'],
                'community_attachment' => $filePaths['community_attachment'] ?? $applicant->community_attachment,
                'passport_photo' => $filePaths['passport_attachment'] ?? $applicant->passport_photo,
                'signature_photo' => $filePaths['signature_attachment'] ?? $applicant->signature_photo,
            ]));

            DB::commit();
            return to_route('applicant.bio')->with('success', 'Bio updated successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->cleanupUploadedFiles($filePaths);

            return to_route('applicant.bio')->with('error', $e->getMessage());

        }
    }

    /**
     * Validate applicant bio data.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    private function validateBio(Request $request)
    {
        return $request->validate([
            'parents_name' => 'required|string|max:255',
            'sex' => 'required|in:Male,Female,Other',
            'date_of_birth' => 'required|date|before:today',
            'community.label' => 'required|string|max:255',
            'community.value' => 'required|string|max:255',
            'religion.label' => 'required|string|max:255',
            'religion.value' => 'required|string|max:255',
            'marital_status' => 'required|in:Single,Married,Divorced,Widowed',
            'nationality.label' => 'required|string|max:255',
            'nationality.value' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'graduateDegree' => 'nullable|string|max:255',
            'graduateStream' => 'nullable|string|max:255',
            'postGraduateDegree' => 'nullable|string|max:255',
            'postGraduateStream' => 'nullable|string|max:255',
            'doctorateDegree' => 'nullable|string|max:255',
            'doctorateStream' => 'nullable|string|max:255',
            'mizo_proficiency' => 'boolean',
            'disability' => 'required|boolean',
            'disability_type' => 'nullable|string|max:255',
            'community_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
            'passport_attachment' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'signature_attachment' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);
    }

    /**
     * Handle file uploads.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $fileFields
     * @param  \App\Models\Applicants|null  $applicant
     * @return array
     */
    private function handleFileUploads(Request $request, array $fileFields, $applicant = null)
    {
        $filePaths = [];
        foreach ($fileFields as $fileField) {
            if ($request->hasFile($fileField)) {
                if ($applicant && $applicant->$fileField) {
                    Storage::disk('public')->delete($applicant->$fileField);
                }

                $filePaths[$fileField] = $request->file($fileField)->storeAs(
                    'uploads',
                    uniqid(rand(), true) . '.' . $request->file($fileField)->getClientOriginalExtension(),
                    'public'
                );
            }
        }
        return $filePaths;
    }

    /**
     * Clean up uploaded files.
     *
     * @param  array  $filePaths
     * @return void
     */
    private function cleanupUploadedFiles(array $filePaths)
    {
        foreach ($filePaths as $path) {
            Storage::disk('public')->delete($path);
        }
    }


    public function address()
    {

        $existingData = Address::where('user_id', Auth::id())->first();

        return inertia("Applicant/Address",[
            'existingData' => $existingData,
        ]);

    }
    /**
     * Store a new address.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store_address(Request $request){
        $validatedData = $this->validateAddress($request);

        // Add the authenticated user ID to the validated data
        $validatedData['user_id'] = Auth::id();

        // Create the address
        Address::create($validatedData);

        return to_route('applicant.address')->with('success', 'Address saved successfully!');
    }
    /**
     * Update an existing address.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\JsonResponse
     */

    public function update_address(Request $request, Address $address){
//        dd($request);
        // Ensure the authenticated user owns the address
//        $this->authorize('update', $address);

        $validatedData = $this->validateAddress($request);

        // Update the address with validated data
        $address->update($validatedData);

        return to_route('applicant.address')->with('success', 'Address updated successfully!');

    }
    /**
     * Validate address data.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    private function validateAddress(Request $request)
    {
        return $request->validate([
            'permanent_house_no' => 'required|string|max:255',
            'permanent_street' => 'nullable|string|max:255',
            'permanent_locality' => 'required|string|max:255',
            'permanent_landmark' => 'nullable|string|max:255',
            'permanent_city' => 'required|string|max:255',
            'permanent_district' => 'required',
            'permanent_state' => 'required',
            'permanent_pin_code' => 'required|numeric|digits:6',
            'communication_house_no' => 'required|string|max:255',
            'communication_street' => 'nullable|string|max:255',
            'communication_locality' => 'required|string|max:255',
            'communication_landmark' => 'nullable|string|max:255',
            'communication_city' => 'required|string|max:255',
            'communication_district' => 'required',
            'communication_state' => 'required',
            'communication_pin_code' => 'required|numeric|digits:6',
            'country' => 'required|string|max:255',
        ]);
    }

    public function storeBioAndAddress(Request $request)
    {
//        dd($request);
        $validatedBio = $this->validateBio($request);
        $validatedAddress = $this->validateAddress($request);

        DB::beginTransaction();
        try {
            // Handle bio (create or update)
            $existingApplicant = Applicants::where('user_id', Auth::id())->first();
            $filePaths = $this->handleFileUploads($request, ['community_attachment', 'passport_attachment', 'signature_attachment']);

            if ($existingApplicant) {
                // Update existing applicant
                $existingApplicant->update(array_merge($validatedBio, [
                    'community' => $validatedBio['community']['value'],
                    'religion' => $validatedBio['religion']['value'],
                    'nationality' => $validatedBio['nationality']['value'],
                    'community_attachment' => $filePaths['community_attachment'] ?? $existingApplicant->community_attachment,
                    'passport_photo' => $filePaths['passport_attachment'] ?? $existingApplicant->passport_photo,
                    'signature_photo' => $filePaths['signature_attachment'] ?? $existingApplicant->signature_photo,
                ]));
            } else {
                // Create new applicant
                Applicants::create(array_merge($validatedBio, [
                    'user_id' => Auth::id(),
                    'community' => $validatedBio['community']['value'],
                    'religion' => $validatedBio['religion']['value'],
                    'nationality' => $validatedBio['nationality']['value'],
                    'community_attachment' => $filePaths['community_attachment'] ?? null,
                    'passport_photo' => $filePaths['passport_attachment'] ?? null,
                    'signature_photo' => $filePaths['signature_attachment'] ?? null,
                ]));
            }

            // Handle address (create or update)
            $existingAddress = Address::where('user_id', Auth::id())->first();
            if ($existingAddress) {
                $existingAddress->update(array_merge($validatedAddress, [
                    'permanent_district' => $validatedAddress['permanent_district']['value'],
                    'permanent_state' => $validatedAddress['permanent_state']['value'],
                    'communication_district' => $validatedAddress['communication_district']['value'],
                    'communication_state' => $validatedAddress['communication_state']['value'],

                ]));
//                $existingAddress->update($validatedAddress);
            } else {
                Address::create(array_merge($validatedAddress, [
                    'user_id' => Auth::id(),
                    'permanent_district' => $validatedAddress['permanent_district']['value'],
                    'permanent_state' => $validatedAddress['permanent_state']['value'],
                    'communication_district' => $validatedAddress['communication_district']['value'],
                    'communication_state' => $validatedAddress['communication_state']['value'],
                ]));
            }

            DB::commit();

//            return redirect()->route('applicant.bio')->with('success', 'Bio and Address saved successfully!');

            return to_route('applicant.bio')->with('success', 'Bio and Address saved successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->cleanupUploadedFiles($filePaths ?? []);
            return to_route('applicant.bio')->with('error', $e->getMessage());
        }
    }


}
