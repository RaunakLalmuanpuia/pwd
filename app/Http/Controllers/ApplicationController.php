<?php

namespace App\Http\Controllers;

use App\Models\Applicants;
use App\Models\ApplicationDocument;
use App\Models\Applications;
use App\Models\JobDetail;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function index()
    {
        $applicant = Applicants::where('user_id', auth()->id())->first();
//        dd($applicant);

        $applications = Applications::with('jobDetils') // Load related job details
        ->where('applicant_id', $applicant->id)
            ->get();
//        dd($applications);
        return inertia('Applicant/Applications', [
            'applications' => $applications,
        ]);
    }

    public function show(JobDetail $jobDetail)
    {
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->get();
        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        return inertia('Applications/JobApplication', [
            'jobDetail' => $jobDetail,
            'mandatoryDocuments' => $mandatoryDocuments,
            'applicant' => $applicant
        ]);
    }

//    public function apply(Request $request, JobDetail $jobDetail)
//    {
//        $request->validate([
//            'documents.*' => 'file',
//        ]);
//        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();
//        // Save application
//        $application = Applications::create([
//            'applicant_id' => $applicant->id,
//            'job_details_id' => $jobDetail->id,
//            'status' => 'Pending',
//        ]);
//
//        if ($request->hasFile('documents') && is_array($request->file('documents'))) {
//            foreach ($request->file('documents') as $key => $document) {
//                // Check if the document is a valid file before storing
//                if ($document->isValid()) {
//                    $path = $document->store('documents');
//
//                    ApplicationDocument::create([
//                        'application_id' => $application->id,
//                        'document_id' => $key,
//                        'document_path' => $path,
//                    ]);
//                }
//            }
//        }
//        return redirect()->route('dashboard.citizen')->with('success', 'Application submitted successfully.');
//    }
    public function apply(Request $request, JobDetail $jobDetail)
    {
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->pluck('id')->toArray();

        $request->validate([
            'documents.*' => 'file',
        ]);

        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        if (!$applicant) {
            return redirect()->back()->with('error', 'Please Update your Bio and Address.');
//            return redirect()->route('dashboard.citizen')->with('error', 'Applicant not found.');
        }

        // Check if the applicant has already applied for this job
        $existingApplication = Applications::where('applicant_id', $applicant->id)
            ->where('job_details_id', $jobDetail->id)
            ->exists();

        if ($existingApplication) {
//            dd(true);
            return redirect()->back()->with('error', 'You have already applied for this job.');
//            return redirect()->route('dashboard.citizen')->with('error', 'You have already applied for this job.');
        }

        $uploadedDocuments = $request->file('documents') ? array_keys($request->file('documents')) : [];
        $missingDocuments = array_diff($mandatoryDocuments, $uploadedDocuments);

        if (!empty($missingDocuments)) {
            return redirect()->back()->with('error', 'Please upload all mandatory documents before applying.');
        }

        // Save the new application
        $application = Applications::create([
            'applicant_id' => $applicant->id,
            'job_details_id' => $jobDetail->id,
            'status' => 'Pending',
        ]);

        if ($request->hasFile('documents') && is_array($request->file('documents'))) {
            foreach ($request->file('documents') as $key => $document) {
                if ($document->isValid()) {
                    $path = $document->store('documents');

                    ApplicationDocument::create([
                        'application_id' => $application->id,
                        'document_id' => $key,
                        'document_path' => $path,
                    ]);
                }
            }
        }

        return redirect()->route('dashboard.citizen')->with('success', 'Application submitted successfully.');
    }


    // Admin view to list all applications based on job details
    public function adminIndex()
    {
        // Get all job details with their applications
        $jobDetails = JobDetail::with(['applications.applicant.user','documents', 'applications.applicationDocuments.jobDocument'])->get();
//        dd($jobDetails);
        return inertia('Applications/AdminApplication', [
            'jobDetails' => $jobDetails,
        ]);
    }

    // Admin method to approve or reject an application
    public function changeStatus(Request $request, Applications $application)
    {
//        dd($application);
        $request->validate([
            'status' => 'required|in:approved,rejected',
        ]);

        // Update application status
        $application->status = $request->status;


        // If the status is approved, generate a unique application_id
        if ($request->status === 'approved') {
            $application->application_id = $this->generateUniqueApplicationId();
        }

        $application->save();

        return redirect()->route('admin.applications.index')->with('success', 'Application status updated.');
    }
    /**
     * Generate a unique application ID
     *
     * @return string
     */
    private function generateUniqueApplicationId()
    {
        do {
            // Generate a random unique string (you can customize the format)
            $uniqueId = 'APP-' . strtoupper(uniqid());
        } while (Applications::where('application_id', $uniqueId)->exists()); // Ensure it’s unique

        return $uniqueId;
    }
}
