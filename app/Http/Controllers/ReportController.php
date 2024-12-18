<?php

namespace App\Http\Controllers;

use App\Exports\ApplicationExport;
use App\Exports\ExamCenterExport;
use App\Exports\ExamReportExport;
use App\Models\Applicants;
use App\Models\Applications;

use App\Models\Departments;
use App\Models\Exam;
use App\Models\ExamCenter;
use App\Models\JobDetail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    //
    public function submitted(Request $request){

        $selectedDepartment = $request->input('department');

        $jobs = [];


        if ($selectedDepartment) {
            $jobs = JobDetail::query()
                ->where('department_id', $selectedDepartment)
                ->select('id', 'post_name', 'department_id')
                ->with('department:id,name')
                ->get()
                ->map(function ($job) {
                    return [
                        'value' => $job->id, // Set as value for q-select
                        'label' => $job->post_name, // Set as label for q-select
                    ];
                });
        }

        return inertia('Reports/SubmittedReport', [
            'departments' => Departments::query()->get(['name as label','id as value']),
            'jobs' => $jobs,
        ]);
    }


    public function writtenExam(Request $request)
    {
        $selectedDepartment = $request->input('department');
        $selectedJob = $request->input('job_id');

        $jobs = [];
        $exams = [];

        // Fetch jobs for the selected department
        if ($selectedDepartment) {
            $jobs = JobDetail::query()
                ->where('department_id', $selectedDepartment)
                ->select('id', 'post_name', 'department_id')
                ->get()
                ->map(fn($job) => [
                    'value' => $job->id,
                    'label' => $job->post_name,
                ]);
        }

        // Fetch exams for the selected job
        if ($selectedJob) {
            $exams = Exam::query()
                ->where('job_details_id', $selectedJob)
                ->get()
                ->map(fn($exam) => [
                    'value' => $exam->id,
                    'label' => $exam->exam_name,
                ]);
        }

        return inertia('Reports/WrittenReport', [
            'departments' => Departments::query()->get(['name as label', 'id as value']),
            'jobs' => $jobs,
            'exams' => $exams,
        ]);
    }


    public function downloadApplicationReport(Request $request)
    {

        $statusValues = $request->get('status')['value']; // This will be an array

        $posts = $request->get('posts')['value'];
        $gender = $request->get('gender');

        $data = Applications::query()
            ->when($statusValues, function (Builder $query) use ($statusValues) {
                $query->whereIn('status', $statusValues); // Handle multiple statuses
            })
            ->when($posts, function (Builder $query) use ($posts) {
                $query->where('job_details_id', $posts); // Filter by job_detail_id
            })
            ->when($gender, function (Builder $query) use ($gender) {
                $query->whereHas('applicant', function (Builder $sub) use ($gender) {
                    $sub->where('applicants.gender', $gender);
                });
            })
            ->with(['applicant.user.address']) // Load relationships
            ->get();

        return Excel::download(new ApplicationExport($data), now()->timestamp . '.xlsx');
    }



    public function generateExamReport(Request $request)
    {
//        dd($request);
        // Retrieve the job details ID (posts) from the request
        $posts = $request->get('posts')['value'];

        // Retrieve the exam ID from the request
        $examId = $request->get('exam')['value'];

        // Retrieve exams related to the specific job details and exam ID
        $exams = Exam::with([
            'subjects.examMarks.applicant.user' // Load subjects -> examMarks -> applicant
        ])
            ->where('job_details_id', $posts) // Filter exams for the selected job details
            ->where('id', $examId) // Filter by the selected exam ID
            ->get();



        // Debug to verify data structure
        if ($exams->isEmpty()) {
            return redirect()->back()->with('error', 'No data found for the selected criteria.');
        }

        // Return the Excel download
        return Excel::download(new ExamReportExport($exams), 'exam_report.xlsx');
    }

    public function examCenter(Request $request){

        $selectedDepartment = $request->input('department');

        $jobs = [];


        if ($selectedDepartment) {
            $jobs = JobDetail::query()
                ->where('department_id', $selectedDepartment)
                ->select('id', 'post_name', 'department_id')
                ->with('department:id,name')
                ->get()
                ->map(function ($job) {
                    return [
                        'value' => $job->id, // Set as value for q-select
                        'label' => $job->post_name, // Set as label for q-select
                    ];
                });
        }

        return inertia('Reports/ExamCenterReport', [
            'departments' => Departments::query()->get(['name as label','id as value']),
            'exam_center' => ExamCenter::query()->get(['center_name as label', 'id as value']),
            'jobs' => $jobs,
        ]);
    }

    public function generateExamCenterReport(Request $request){


        // Retrieve the posts and exam center from the request
        $posts = $request->get('posts')['value'];
        $exam_center = $request->get('exam_center')['value'];

        // Retrieve the department, if provided
        $department = $request->get('department')['value'];

        $center = ExamCenter::where('id', $exam_center)->first();

        $job_details = JobDetail::where('id', $posts)->first();


        // Query applicants with the necessary filters and relationships
        $applicants = Applicants::query()
            ->with([
                'applications' => function ($query) use ($posts) {
                    // First filter by job_detail_id (or job_id if it's named differently in applications table)
                    $query->where('job_details_id', $posts);
                },
                'applications.jobDetail.department',
                'applications.examCenter',
            ])
            ->when($department, function ($q, $departmentId) {
                $q->whereHas('applications.jobDetail.department', function ($q) use ($departmentId) {
                    $q->where('id', $departmentId);
                });
            })
            ->when($exam_center, function ($q, $examCenter) {
                $q->whereHas('applications.examCenter', function ($q) use ($examCenter) {
                    $q->where('id', $examCenter);
                });
            })
            ->whereHas('applications', function ($query) {
                // Filter applications where applicant_id matches the applicant's id
                $query->whereColumn('applicant_id', 'applicants.id');
            })
            ->get();


        // Return the Excel file as a download
        return Excel::download(new ExamCenterExport($applicants,  $center, $job_details), 'exam_center_report.xlsx');
    }
}
