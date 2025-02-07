<?php

namespace App\Http\Controllers;

use App\Exports\EligibleSheetExport;
use App\Exports\JobDetailsExport;
use App\Exports\RejectedSheetExport;
use App\Exports\SubmittedSheetExport;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{

    // Download Approved Excel
    public function exportJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'approved')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new JobDetailsExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }
    public function exportEligibleJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'eligible')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new EligibleSheetExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }
    public function exportSubmittedJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'pending')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new SubmittedSheetExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }

    public function exportRejectedJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'rejected')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new RejectedSheetExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }
}
