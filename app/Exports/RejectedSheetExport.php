<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class RejectedSheetExport implements FromView, WithEvents
{
    private $jobDetail;

    public function __construct($jobDetail)
    {
        $this->jobDetail = $jobDetail; // A single JobDetail model instance
    }

    public function view(): View
    {
        return view('reports.job_rejected_sheet', [
            'jobDetail' => $this->jobDetail,
            'applications' => $this->jobDetail->applications, // Pass related applications
        ]);
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                foreach (range('B', 'G') as $columnID) {
                    $sheet->getColumnDimension($columnID)->setAutoSize(true);
                }

                $currentRow = 7;
                foreach ($this->jobDetail->applications as $index => $application) {
                    for ($i = 0; $i < 5; $i++) {
                        $sheet->getRowDimension($currentRow)->setRowHeight(18);
                        $currentRow++;
                    }

                    // Add Passport Image
                    if (filled($application->applicant->passport_photo)) {
                        $drawing = new Drawing();
                        $drawing->setName('Passport Image');
                        $drawing->setDescription('Passport Image');
                        $drawing->setPath('storage/' . $application->applicant->passport_photo); // Path to passport image
                        $drawing->setHeight(100);
                        $drawing->setOffsetX(15);
                        $drawing->setOffsetY(10);
                        $drawing->setCoordinates('D' . ($index * 5 + 7)); // Adjust row
                        $drawing->setWorksheet($sheet);
                    }

                    // Add Signature Image
                    if (filled($application->applicant->signature_photo)) {
                        $drawing = new Drawing();
                        $drawing->setName('Signature Image');
                        $drawing->setDescription('Signature Image');
                        $drawing->setPath('storage/' . $application->applicant->signature_photo); // Path to signature image
                        $drawing->setHeight(100); // Adjust height as required
                        $drawing->setOffsetX(15);
                        $drawing->setOffsetY(10);
                        $drawing->setCoordinates('E' . ($index * 5 + 7)); // Adjust row
                        $drawing->setWorksheet($sheet);
                    }
                }

                $sheet->getColumnDimension('A')->setWidth(12);
            },
        ];
    }

}
