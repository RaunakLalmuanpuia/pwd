<?php

namespace App\Http\Controllers;

use App\Models\ApplicationDocument;
use App\Models\Applications;
use App\Models\JobDetail;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Applications::with('jobDetils') // Load related job details
        ->where('applicant_id', auth()->id())
            ->get();
//        dd($applications);
        return inertia('Applicant/Applications', [
            'applications' => $applications,
        ]);
    }

    public function show(JobDetail $jobDetail)
    {
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->get();
        return inertia('Applications/JobApplication', [
            'jobDetail' => $jobDetail,
            'mandatoryDocuments' => $mandatoryDocuments,
        ]);
    }

    public function apply(Request $request, JobDetail $jobDetail)
    {
        $request->validate([
            'documents.*' => 'required|file',
        ]);
        // Save application
        $application = Applications::create([
            'applicant_id' => auth()->id(),
            'job_details_id' => $jobDetail->id,
            'status' => 'Pending',
        ]);

        if ($request->hasFile('documents') && is_array($request->file('documents'))) {
            foreach ($request->file('documents') as $key => $document) {
                // Check if the document is a valid file before storing
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
        $jobDetails = JobDetail::with('applications.applicant')->get();
//        dd($jobDetails);
        return inertia('Applications/AdminApplication', [
            'jobDetails' => $jobDetails,
        ]);
    }

    // Admin method to approve or reject an application
    public function changeStatus(Request $request, Application $application)
    {
        $request->validate([
            'status' => 'required|in:approved,rejected',
        ]);

        // Update application status
        $application->status = $request->status;
        $application->save();

        return redirect()->route('admin.applications.index')->with('success', 'Application status updated.');
    }

}
