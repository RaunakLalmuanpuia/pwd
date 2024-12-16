<?php

namespace App\Http\Controllers;

use App\Exports\ApplicationExport;
use App\Models\Applications;
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
//        dd($request->get('posts')['value']);
//        dd($request->get('status')['value'][0]);
        $status = $request->get('status')['value'][0];
//        $district = $request->get('district');
        $posts = $request->get('posts')['value'];
        $gender = $request->get('gender');

        $data = Applications::query()
            ->where('status',$status)
            ->when($gender, fn(Builder $builder) => $builder->whereHas('applicant', fn(Builder $sub) => $sub->where('applicants.gender', $gender)))
            ->with(['applicant.user.address'])
            ->get();

//        dd($data);

        return Excel::download(new ApplicationExport($data), now()->timestamp . '.xlsx');
    }
}
