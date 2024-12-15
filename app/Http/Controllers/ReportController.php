<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
