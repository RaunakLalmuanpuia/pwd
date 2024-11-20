<?php

namespace App\Http\Controllers;

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

    public function store_bio(Request $request){
//        dd($request);

        // Validate the incoming request data
        $validatedData = $request->validate([
//            'name' => 'required|string|max:255',
//            'phone' => 'required|string|max:15',
//            'email' => 'required|email|max:255',
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
            'proficiency_test' => 'required|boolean',
            'disability' => 'required|boolean',
            'disability_type' => 'nullable|string|max:255',
            'community_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
            'passport_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
            'signature_attachment' => 'nullable|file|mimes:png,jpg,jpeg,pdf|max:2048',
        ]);

        // Handle the data and files in a transaction
        DB::beginTransaction();
        try {
            // Process file uploads
            $filePaths = [];
            foreach (['community_attachment', 'passport_attachment', 'signature_attachment'] as $fileField) {
                if ($request->hasFile($fileField)) {

                    $originalExtension = $request->file($fileField)->getClientOriginalExtension();
                    $randomFileName = uniqid(rand(), true) . '.' . $originalExtension;

                    $filePaths[$fileField] = $request->file($fileField)->storeAs('uploads', $randomFileName, 'public');
                }
            }

            // Store data in the database
            $record = Applicants::create([
                'user_id' => Auth::user()->id,
//                'name' => Auth::user()->name,
//                'phone' => Auth::user()->phone,
//                'email' => Auth::user()->email,
                'parents_name' => $validatedData['parents_name'],
                'sex' => $validatedData['sex'],
                'date_of_birth' => $validatedData['date_of_birth'],
                'community' => $validatedData['community']['value'],
                'religion' => $validatedData['religion']['value'],
                'marital_status' => $validatedData['marital_status'],
                'nationality' => $validatedData['nationality']['value'],
                'qualification' => $validatedData['qualification'],
                'graduateDegree' => $validatedData['graduateDegree'],
                'graduateStream' => $validatedData['graduateStream'],
                'postGraduateDegree' => $validatedData['postGraduateDegree'],
                'postGraduateStream' => $validatedData['postGraduateStream'],
                'doctorateDegree' => $validatedData['doctorateDegree'],
                'doctorateStream' => $validatedData['doctorateStream'],
                'mizo_proficiency' => $validatedData['proficiency_test'],
                'disability' => $validatedData['disability'],
                'disability_type' => $validatedData['disability_type'],
                'community_attachment' => $filePaths['community_attachment'] ?? null,
                'passport_photo' => $filePaths['passport_attachment'] ?? null,
                'signature_photo' => $filePaths['signature_attachment'] ?? null,
            ]);

            DB::commit();

//            return response()->json(['message' => 'Record created successfully!', 'data' => $record], 201);
            return inertia("Applicant/Bio",[
                'data'=>$record,
            ]);

        } catch (\Exception $e) {
            DB::rollBack();

            // Clean up uploaded files in case of an error
            foreach ($filePaths as $path) {
                Storage::disk('public')->delete($path);
            }

            return response()->json(['message' => 'An error occurred while saving the data.', 'error' => $e->getMessage()], 500);
        }
    }
}
