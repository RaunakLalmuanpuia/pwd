<?php

namespace App\Http\Controllers;

use App\Models\Applicants;
use App\Models\ApplicationDocument;
use App\Models\Applications;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    public function index()
    {
        $applicant = Applicants::where('user_id', auth()->id())->first();

        $applications = Applications::with([
            'jobDetail.exams.subjects', // Eager load exams and their subjects
            'examCenter'               // Eager load the assigned exam center
        ])->where('applicant_id', $applicant->id)->get();

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

    public function apply(Request $request, JobDetail $jobDetail)
    {
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->pluck('id')->toArray();

        $request->validate([
            'documents.*' => 'file',
        ]);

        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        if (!$applicant) {
            return redirect()->back()->with('error', 'Please Update your Bio and Address.');
        }

        // Check if the applicant has already applied for this job
        $existingApplication = Applications::where('applicant_id', $applicant->id)
            ->where('job_details_id', $jobDetail->id)
            ->exists();

        if ($existingApplication) {
            return redirect()->back()->with('error', 'You have already applied for this job.');
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
        $jobDetails = JobDetail::with('documents')->get();
        return inertia('Applications/Jobs', [
            'jobDetails' => $jobDetails,
        ]);
    }

    public function adminShow(JobDetail $jobDetails)
    {
        // Load the necessary relationships for the passed JobDetail instance
        $jobDetails->load(['applications.applicant.user', 'documents', 'applications.applicationDocuments.jobDocument']);
        // Return the Inertia view with the specific JobDetail
        return inertia('Applications/AdminApplication', [
            'jobDetails' => $jobDetails,
        ]);
    }

    // Admin method to approve or reject an application
    public function changeStatus(Request $request, Applications $application)
    {
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

        return redirect()->back()->with('success', 'Application status updated.');
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

    public function generateAdmitCardByJob(JobDetail $jobDetail)
    {
        $userId = Auth::id(); // Get the authenticated user ID

        // Retrieve job details and filter applications for the authenticated user
        $jobDetail = JobDetail::with([
            'applications' => function ($query) use ($userId) {
                $query->whereHas('applicant.user', function ($q) use ($userId) {
                    $q->where('id', $userId);
                });
            },
            'applications.applicant.user',
            'applications.examCenter',
            'exams.subjects',
        ])->findOrFail($jobDetail->id);

        // Check if the user has an application for this job
        if ($jobDetail->applications->isEmpty()) {
            return redirect()->back()->with('error', 'You do not have an application for this job.');
        }

        // Generate the PDF from the view
        $pdf = PDF\Pdf::loadView('admit_card', compact('jobDetail'));

        // Return the generated PDF as a download
        return $pdf->download('admit_card_' . $jobDetail->post_name . '.pdf');
    }
}
