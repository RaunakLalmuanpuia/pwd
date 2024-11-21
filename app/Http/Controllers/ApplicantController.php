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
    public function bio(){

        $existingData = Applicants::where('user_id', Auth::id())->first();
        return inertia("Applicant/Bio",[
            'existingData' => $existingData,
        ]);

    }

//    public function store_bio(Request $request){
////        dd($request);
//
//        // Validate the incoming request data
//        $validatedData = $request->validate([
////            'name' => 'required|string|max:255',
////            'phone' => 'required|string|max:15',
////            'email' => 'required|email|max:255',
//            'parents_name' => 'required|string|max:255',
//            'sex' => 'required|in:Male,Female,Other',
//            'date_of_birth' => 'required|date|before:today',
//            'community.label' => 'required|string|max:255',
//            'community.value' => 'required|string|max:255',
//            'religion.label' => 'required|string|max:255',
//            'religion.value' => 'required|string|max:255',
//            'marital_status' => 'required|in:Single,Married,Divorced,Widowed',
//            'nationality.label' => 'required|string|max:255',
//            'nationality.value' => 'required|string|max:255',
//            'qualification' => 'required|string|max:255',
//            'graduateDegree' => 'nullable|string|max:255',
//            'graduateStream' => 'nullable|string|max:255',
//            'postGraduateDegree' => 'nullable|string|max:255',
//            'postGraduateStream' => 'nullable|string|max:255',
//            'doctorateDegree' => 'nullable|string|max:255',
//            'doctorateStream' => 'nullable|string|max:255',
//            'proficiency_test' => 'required|boolean',
//            'disability' => 'required|boolean',
//            'disability_type' => 'nullable|string|max:255',
//            'community_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//            'passport_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//            'signature_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//        ]);
//
//        // Handle the data and files in a transaction
//        DB::beginTransaction();
//        try {
//            // Process file uploads
//            $filePaths = [];
//            foreach (['community_attachment', 'passport_attachment', 'signature_attachment'] as $fileField) {
//                if ($request->hasFile($fileField)) {
//
//                    $originalExtension = $request->file($fileField)->getClientOriginalExtension();
//                    $randomFileName = uniqid(rand(), true) . '.' . $originalExtension;
//
//                    $filePaths[$fileField] = $request->file($fileField)->storeAs('uploads', $randomFileName, 'public');
//                }
//            }
//
//            // Store data in the database
//            $record = Applicants::create([
//                'user_id' => Auth::user()->id,
////                'name' => Auth::user()->name,
////                'phone' => Auth::user()->phone,
////                'email' => Auth::user()->email,
//                'parents_name' => $validatedData['parents_name'],
//                'sex' => $validatedData['sex'],
//                'date_of_birth' => $validatedData['date_of_birth'],
//                'community' => $validatedData['community']['value'],
//                'religion' => $validatedData['religion']['value'],
//                'marital_status' => $validatedData['marital_status'],
//                'nationality' => $validatedData['nationality']['value'],
//                'qualification' => $validatedData['qualification'],
//                'graduateDegree' => $validatedData['graduateDegree'],
//                'graduateStream' => $validatedData['graduateStream'],
//                'postGraduateDegree' => $validatedData['postGraduateDegree'],
//                'postGraduateStream' => $validatedData['postGraduateStream'],
//                'doctorateDegree' => $validatedData['doctorateDegree'],
//                'doctorateStream' => $validatedData['doctorateStream'],
//                'mizo_proficiency' => $validatedData['proficiency_test'],
//                'disability' => $validatedData['disability'],
//                'disability_type' => $validatedData['disability_type'],
//                'community_attachment' => $filePaths['community_attachment'] ?? null,
//                'passport_photo' => $filePaths['passport_attachment'] ?? null,
//                'signature_photo' => $filePaths['signature_attachment'] ?? null,
//            ]);
//
//            DB::commit();
//
////            return response()->json(['message' => 'Record created successfully!', 'data' => $record], 201);
////            return inertia("Applicant/Bio",[
////                'data'=>$record,
////            ]);
//            return to_route('applicant.bio');
//
//
//        } catch (\Exception $e) {
//            DB::rollBack();
//
//            // Clean up uploaded files in case of an error
//            foreach ($filePaths as $path) {
//                Storage::disk('public')->delete($path);
//            }
//
//            return response()->json(['message' => 'An error occurred while saving the data.', 'error' => $e->getMessage()], 500);
//        }
//    }
//
////    public function update_bio(Request $request, Applicants $applicant){
////        dd($request);
////
////    }
//
//    public function update_bio(Request $request, Applicants $applicant)
//    {
////        dd($request);
//
//        // Validate the incoming request data
//        $validatedData = $request->validate([
//            'parents_name' => 'required|string|max:255',
//            'sex' => 'required|in:Male,Female,Other',
//            'date_of_birth' => 'required|date|before:today',
//            'community.label' => 'required|string|max:255',
//            'community.value' => 'required|string|max:255',
//            'religion.label' => 'required|string|max:255',
//            'religion.value' => 'required|string|max:255',
//            'marital_status' => 'required|in:Single,Married,Divorced,Widowed',
//            'nationality.label' => 'required|string|max:255',
//            'nationality.value' => 'required|string|max:255',
//            'qualification' => 'required|string|max:255',
//            'graduateDegree' => 'nullable|string|max:255',
//            'graduateStream' => 'nullable|string|max:255',
//            'postGraduateDegree' => 'nullable|string|max:255',
//            'postGraduateStream' => 'nullable|string|max:255',
//            'doctorateDegree' => 'nullable|string|max:255',
//            'doctorateStream' => 'nullable|string|max:255',
//            'proficiency_test' => 'required|boolean',
//            'disability' => 'required|boolean',
//            'disability_type' => 'nullable|string|max:255',
//            'community_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//            'passport_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//            'signature_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
//        ]);
//
//        // Find the existing applicant record
////        $applicant = Applicants::findOrFail($id);
//
//        // Handle the data and files in a transaction
//        DB::beginTransaction();
//        try {
//            // Process file uploads
//            $filePaths = [];
//            foreach (['community_attachment', 'passport_attachment', 'signature_attachment'] as $fileField) {
//                if ($request->hasFile($fileField)) {
//
//                    // Delete the old file if exists
//                    if ($applicant->$fileField) {
//                        Storage::disk('public')->delete($applicant->$fileField);
//                    }
//
//                    $originalExtension = $request->file($fileField)->getClientOriginalExtension();
//                    $randomFileName = uniqid(rand(), true) . '.' . $originalExtension;
//
//                    $filePaths[$fileField] = $request->file($fileField)->storeAs('uploads', $randomFileName, 'public');
//                }
//            }
//
//            // Update the record in the database
//            $applicant->update([
//                'parents_name' => $validatedData['parents_name'],
//                'sex' => $validatedData['sex'],
//                'date_of_birth' => $validatedData['date_of_birth'],
//                'community' => $validatedData['community']['value'],
//                'religion' => $validatedData['religion']['value'],
//                'marital_status' => $validatedData['marital_status'],
//                'nationality' => $validatedData['nationality']['value'],
//                'qualification' => $validatedData['qualification'],
//                'graduateDegree' => $validatedData['graduateDegree'],
//                'graduateStream' => $validatedData['graduateStream'],
//                'postGraduateDegree' => $validatedData['postGraduateDegree'],
//                'postGraduateStream' => $validatedData['postGraduateStream'],
//                'doctorateDegree' => $validatedData['doctorateDegree'],
//                'doctorateStream' => $validatedData['doctorateStream'],
//                'mizo_proficiency' => $validatedData['proficiency_test'],
//                'disability' => $validatedData['disability'],
//                'disability_type' => $validatedData['disability_type'],
//                'community_attachment' => $filePaths['community_attachment'] ?? $applicant->community_attachment,
//                'passport_photo' => $filePaths['passport_attachment'] ?? $applicant->passport_photo,
//                'signature_photo' => $filePaths['signature_attachment'] ?? $applicant->signature_photo,
//            ]);
//
//            DB::commit();
//
//            return to_route('applicant.bio')->with('message', 'Applicant updated successfully!');
//
//        } catch (\Exception $e) {
//            DB::rollBack();
//
//            // Clean up uploaded files in case of an error
//            foreach ($filePaths as $path) {
//                Storage::disk('public')->delete($path);
//            }
//
//            return response()->json(['message' => 'An error occurred while updating the data.', 'error' => $e->getMessage()], 500);
//        }
//    }

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
            return to_route('applicant.bio')->with('message', 'Bio saved successfully!');
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
        $this->authorize('update_bio', [$applicant]);

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
            return to_route('applicant.bio')->with('message', 'Bio updated successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->cleanupUploadedFiles($filePaths);

            return response()->json([
                'message' => 'An error occurred while updating the data.',
                'error' => $e->getMessage(),
            ], 500);
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
            'mizo_proficiency' => 'required|boolean',
            'disability' => 'required|boolean',
            'disability_type' => 'nullable|string|max:255',
            'community_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
            'passport_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
            'signature_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
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

        return to_route('applicant.address')->with('message', 'Address saved successfully!');
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
        $this->authorize('update', $address);

        $validatedData = $this->validateAddress($request);

        // Update the address with validated data
        $address->update($validatedData);

        return to_route('applicant.address')->with('message', 'Address updated successfully!');

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
            'permanent_district' => 'required|string|max:255',
            'permanent_state' => 'required|string|max:255',
            'permanent_pin_code' => 'required|string|max:10',
            'communication_house_no' => 'required|string|max:255',
            'communication_street' => 'nullable|string|max:255',
            'communication_locality' => 'required|string|max:255',
            'communication_landmark' => 'nullable|string|max:255',
            'communication_city' => 'required|string|max:255',
            'communication_district' => 'required|string|max:255',
            'communication_state' => 'required|string|max:255',
            'communication_pin_code' => 'required|string|max:10',
            'country' => 'required|string|max:255',
        ]);
    }
}
