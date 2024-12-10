<?php

namespace App\Http\Controllers;

use App\Models\Applicants;
use App\Models\ApplicationDocument;
use App\Models\Applications;
use App\Models\ExamCenter;
use App\Models\JobDetail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    // Citizen Application Submission List
    public function index()
    {
        $applicant = Applicants::where('user_id', auth()->id())->first();

        if (!$applicant) {
            // Redirect back or return a view with an appropriate message
            return inertia('Applicant/Applications', [
                'applications' => [],
            ])->with('success', 'No applicant record found.');
        }

        $applications = Applications::with([
            'jobDetail.exams.subjects', // Eager load exams and their subjects
            'examCenter'               // Eager load the assigned exam center
        ])->where('applicant_id', $applicant->id) ->where('status', '!=', 'draft') ->get();

        return inertia('Applicant/Applications', [
            'applications' => $applications,
        ]);
    }
    // Citizen Application Draft List
    public function draft()
    {
        $applicant = Applicants::where('user_id', auth()->id())->first();

        if (!$applicant) {
            // Redirect back or return a view with an appropriate message
            return inertia('Applicant/Applications', [
                'applications' => [],
            ])->with('success', 'No applicant record found.');
        }

        $applications = Applications::with([
            'jobDetail.exams.subjects', // Eager load exams and their subjects
            'examCenter'               // Eager load the assigned exam center
        ])->where('applicant_id', $applicant->id) ->where('status', 'draft')->get();

        return inertia('Applicant/DraftSubmission', [
            'applications' => $applications,
        ]);
    }

    // Citizen View Application
    public function show(JobDetail $jobDetail)
    {
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->get();
        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        return inertia('Applicant/JobApplication', [
            'jobDetail' => $jobDetail,
            'mandatoryDocuments' => $mandatoryDocuments,
            'applicant' => $applicant
        ]);
    }
    public function viewApplication(JobDetail $jobDetail)
    {
//        dd($jobDetail);
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->get();
        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        $application = Applications::where('applicant_id', $applicant->id)
            ->where('job_details_id', $jobDetail->id)
            ->with(['applicationDocuments', 'transaction']) // Load documents associated with the application
            ->first();

        return inertia('Applicant/ViewApplication', [
            'jobDetail' => $jobDetail,
            'mandatoryDocuments' => $mandatoryDocuments,
            'applicant' => $applicant,
            'application' => $application,
        ]);
    }
    public function viewApplicationDraft(JobDetail $jobDetail)
    {

        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->get();
        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        $application = Applications::where('applicant_id', $applicant->id)
            ->where('job_details_id', $jobDetail->id)
            ->where('status', 'draft')
            ->with(['applicationDocuments']) // Load documents associated with the application
            ->first();

        return inertia('Applicant/SubmitApplication', [
            'jobDetail' => $jobDetail,
            'mandatoryDocuments' => $mandatoryDocuments,
            'applicant' => $applicant,
            'application' => $application,
        ]);
    }

    // Citizen Apply for application
    public function apply(Request $request, JobDetail $jobDetail)
    {
//        dd($jobDetail);
        $mandatoryDocuments = $jobDetail->documents()->where('is_mandatory', true)->pluck('id')->toArray();

        $request->validate([
            'documents.*' => 'file',
        ]);

        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        if (!$applicant) {
            return redirect()->back()->with('error', 'Please Update your Bio and Address.');
        }

        // Calculate applicant's age
        $dob = $applicant->date_of_birth; // Ensure `dob` is a field in the `Applicants` table
        if (!$dob) {
            return redirect()->back()->with('error', 'Date of Birth is required to apply for this job.');
        }
        $age = now()->diffInYears(Carbon::parse($dob));

        // Apply age relaxation for certain categories
        $ageRelaxation = 0;
        if (in_array($applicant->community, ['Schedule Tribe', 'Schedule Caste', 'OBC'])) {
            $ageRelaxation = (int) $jobDetail->age_relaxation;
        }

        $upperAgeLimit = $jobDetail->upper_age_limit + $ageRelaxation;

        $lowerAgeLimit = $jobDetail->lower_age_limit;

        if ($age > $upperAgeLimit) {
            return redirect()->back()->with('error', 'You are above the upper age limit for this job.');
        }

        if ($age < $lowerAgeLimit) {
            return redirect()->back()->with('error', 'You are below the lower age limit for this job.');
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
            'status' => 'Draft',
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

        return redirect()->route('dashboard.citizen')->with('success', 'Application Saved to Draft successfully.');
    }
    public function updateMandatoryDocument(Request $request, JobDetail $jobDetail)
    {
//        dd($request);
        $validatedData = $request->validate([
            'document_id' => 'required|exists:documents,id',
            'file' => 'required|file|mimes:pdf,jpeg,png|max:2048',
        ]);

        $document = $jobDetail->documents()->findOrFail($validatedData['document_id']);
        $filePath = $request->file('file')->store('mandatory_documents');

        $document->update(['file_path' => $filePath]);

        return back()->with('success', 'Document updated successfully.');
    }

    public function deleteDraft(Request $request, JobDetail $jobDetail)
    {

        $applicant = Applicants::where('user_id', auth()->id())->with(['user.address'])->first();

        if (!$applicant) {
            return redirect()->route('dashboard.citizen')->with('error', 'Applicant not found.');
        }

        // Retrieve the draft application for the given job
        $application = Applications::where('applicant_id', $applicant->id)
            ->where('job_details_id', $jobDetail->id)
            ->where('status', 'draft')
            ->first();

        if (!$application) {
            return redirect()->route('dashboard.citizen')->with('error', 'No draft application found for this job.');
        }

        // Delete the draft application
        $application->delete();

        return redirect()->route('dashboard.citizen')->with('success', 'Draft application deleted successfully.');
    }

    // Generate Admit card (Applicant)
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

//        dd($jobDetail);
        // Generate the PDF from the view
        $pdf = PDF\Pdf::loadView('admit_card', compact('jobDetail'));

        // Return the generated PDF as a download
        return $pdf->download('admit_card_' . $jobDetail->post_name . '.pdf');
    }
}
