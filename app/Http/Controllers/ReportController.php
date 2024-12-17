<?php

namespace App\Http\Controllers;

use App\Exports\ApplicationExport;
use App\Models\Applications;

use App\Models\Departments;
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


    public function writtenExam(){
        return inertia('Reports/WrittenReport', [
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
}
