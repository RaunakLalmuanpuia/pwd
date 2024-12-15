<?php

namespace App\Http\Controllers;

use App\Exports\ApplicationExport;
use App\Models\Application;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    //
    public function submitted(){
        return inertia('Reports/SubmittedReport', [
        ]);
    }

    public function writtenExam(){
        return inertia('Reports/WrittenReport', [
        ]);
    }

    public function downloadApplicationReport(Request $request)
    {
        $status = $request->get('status');
//        $district = $request->get('district');
        $job = $request->get('job');
        $gender = $request->get('gender');

        $data = Application::query()
            ->where('status',$status)
            ->when($gender, fn(Builder $builder) => $builder->whereHas('applicant', fn(Builder $sub) => $sub->where('applicants.gender', $gender)))
            ->with(['applicant.user.address'])
            ->get();

        return Excel::download(new ApplicationExport($data), now()->timestamp . '.xlsx');
    }
}
