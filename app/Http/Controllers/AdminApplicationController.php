<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\ExamCenter;
use App\Models\JobDetail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminApplicationController extends Controller
{
    //

    // Admin See applicant Detail
    public function showApplicantDetail(JobDetail $jobDetails, Applications $application)
    {
        // Filter the applications to include only the one matching the given $application->id
        $jobDetails->load([
            'applications' => function ($query) use ($application) {
                $query->where('id', $application->id);
            },
            'applications.applicant.user.address',
            'documents',
            'applications.transaction',
            'applications.applicationDocuments.jobDocument',
        ]);

        // Return the Inertia view with the specific JobDetail
        return inertia('Applicant/ApplicantDetail', [
            'jobDetails' => $jobDetails,
        ]);
    }
    // Admin all jobs page (Submitted)
    public function adminIndexSubmission(Request $request)
    {
        $search = $request->get('search');

        $jobDetails = JobDetail::query()
            ->withCount(['applications' => function ($query) {
                $query->where('status', 'pending');
            }])
            ->when($search, function (Builder $query) use ($search) {
                $query->where('post_name', 'LIKE', "%$search%");
            })
            ->latest()
            ->simplePaginate(10); // Adjust pagination as necessary


        return Inertia::render('Applications/Submission',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);

    }
    // Admin all jobs page (Approved)
    public function adminIndexApproved(Request $request)
    {
        $search = $request->get('search');

        $jobDetails = JobDetail::query()
            ->withCount(['applications' => function ($query) {
                $query->where('status', 'approved');
            }])
            ->when($search, function (Builder $query) use ($search) {
                $query->where('post_name', 'LIKE', "%$search%");
            })
            ->latest()
            ->simplePaginate(10); // Adjust pagination as necessary


        return Inertia::render('Applications/Approved',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);
    }
    // Admin all jobs page (Eligible)
    public function adminIndexEligible(Request $request)
    {
        $search = $request->get('search');

        $jobDetails = JobDetail::query()
            ->withCount(['applications' => function ($query) {
                $query->where('status', 'eligible');
            }])
            ->when($search, function (Builder $query) use ($search) {
                $query->where('post_name', 'LIKE', "%$search%");
            })
            ->latest()
            ->simplePaginate(10); // Adjust pagination as necessary


        return Inertia::render('Applications/Eligible',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);
    }

    // Admin view All submitted application list
    public function adminShowSubmitted(JobDetail $jobDetails)
    {
        $perPage = request('per_page', 10); // Number of items per page, default to 10
        $search = request('search', ''); // Search term from the request
        $jobDetails->load([
            'applications' => function ($query) {
                $query->where('status', 'pending');
            },
            'documents',
            'applications.applicationDocuments.jobDocument',
        ]);
        // Load filtered and paginated applications
        $applications = $jobDetails->applications()
            ->where('status', 'pending')
            ->with(['applicant.user', 'examCenter', 'applicant.exams', 'applicant.examMarks.subject',])
            ->whereHas('applicant.user', function ($query) use ($search) {
                if ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                }
            })
            ->paginate($perPage);

        return inertia('Applications/SubmittedApplication', [
            'jobDetails' => $jobDetails,
            'applications' => $applications,
        ]);
    }
    // Admin view All Approved application list
    public function adminShowApproved(JobDetail $jobDetails)
    {
        $perPage = request('per_page', 10); // Number of items per page, default to 10
        $search = request('search', ''); // Search term from the request
        $jobDetails->load([
            'applications' => function ($query) {
                $query->where('status', 'approved');
            },
            'documents',
            'applications.applicationDocuments.jobDocument',
        ]);
        // Load filtered and paginated applications
        $applications = $jobDetails->applications()
            ->where('status', 'approved')
            ->with(['applicant.user',
                'examCenter',
                'applicant.exams' => function ($query) use ($jobDetails) {
                    $query->where('exams.job_details_id', $jobDetails->id); // Specify table for `job_details_id`
                },
                'applicant.examMarks.subject',])
            ->whereHas('applicant.user', function ($query) use ($search) {
                if ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                }
            })
            ->paginate($perPage);

        $examCenters = ExamCenter::all(); // Fetch all available centers

        // Return the Inertia view with the specific JobDetail
        return inertia('Applications/ApprovedApplications', [
            'jobDetails' => $jobDetails,
            'applications' => $applications,
            'examCenters' => $examCenters,
        ]);
    }
    // Admin view All Eligible application list
    public function adminShowEligible(JobDetail $jobDetails)
    {
        $perPage = request('per_page', 10); // Number of items per page, default to 10
        $search = request('search', ''); // Search term from the request
        $jobDetails->load([
            'applications' => function ($query) {
                $query->where('status', 'eligible');
            },
            'documents',
            'applications.applicationDocuments.jobDocument',
        ]);
        // Load filtered and paginated applications
        $applications = $jobDetails->applications()
            ->where('status', 'eligible')
            ->with(['applicant.user', 'examCenter',
                'applicant.exams' => function ($query) use ($jobDetails) {
                    $query->where('exams.job_details_id', $jobDetails->id); // Specify table for `job_details_id`
                },
                'applicant.examMarks.subject',])
            ->whereHas('applicant.user', function ($query) use ($search) {
                if ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                }
            })
            ->paginate($perPage);
        return inertia('Applications/EligibleApplications', [
            'jobDetails' => $jobDetails,
            'applications' => $applications,
        ]);
    }
    // Admin change status of applicants
    public function bulkChangeStatus(Request $request)
    {
//        dd($request);
        $request->validate([
            'status' => 'required|in:approved,pending,eligible',
            'application_ids' => 'required|array',
            'application_ids.*' => 'exists:applications,id',
        ]);

        $status = $request->status;

        foreach ($request->application_ids as $applicationId) {
            $application = Applications::findOrFail($applicationId);
            $application->status = $status;

//            if ($status === 'approved') {
//                $application->application_id = $this->generateUniqueApplicationId();
//            } elseif ($status === 'pending') {
//                $application->application_id = null;
//            }

            $application->save();
        }

        return redirect()->back()->with('success', 'Application status updated.');

    }

}
