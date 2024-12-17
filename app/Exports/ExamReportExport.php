<?php

namespace App\Exports;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
class ExamReportExport implements FromView
{

    protected $exams;

    public function __construct($exams)
    {
        $this->exams = $exams;
    }

    public function view(): View
    {
        return view('reports.exam_report', [
            'exams' => $this->exams
        ]);
    }
}
