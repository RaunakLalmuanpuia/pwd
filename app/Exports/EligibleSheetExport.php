<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class EligibleSheetExport implements FromView, WithEvents
{
    private $jobDetail;

    public function __construct($jobDetail)
    {
        $this->jobDetail = $jobDetail; // A single JobDetail model instance
    }

    public function view(): View
    {
        return view('reports.job_eligible_sheet', [
            'jobDetail' => $this->jobDetail,
            'applications' => $this->jobDetail->applications, // Pass related applications
        ]);
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Set column auto-width for specific columns
                foreach (range('B', 'G') as $columnID) {
                    $sheet->getColumnDimension($columnID)->setAutoSize(true);
                }

                $currentRow = 7; // Starting row for data
                foreach ($this->jobDetail->applications as $index => $application) {
                    // Passport Image
                    if (filled($application->applicant->passport_photo)) {
                        $this->addImageToSheet(
                            $sheet,
                            'storage/' . $application->applicant->passport_photo,
                            'D' . ($index * 5 + $currentRow),
                            100, // Height
                            15, // Offset X
                            10  // Offset Y
                        );
                    }

                    // Signature Image
                    if (filled($application->applicant->signature_photo)) {
                        $this->addImageToSheet(
                            $sheet,
                            'storage/' . $application->applicant->signature_photo,
                            'E' . ($index * 5 + $currentRow),
                            100, // Height
                            15, // Offset X
                            10  // Offset Y
                        );
                    }

                    // Adjust row heights for better visibility
                    for ($i = 0; $i < 5; $i++) {
                        $sheet->getRowDimension($currentRow + $i)->setRowHeight(18);
                    }
                }

                // Set custom width for column A
                $sheet->getColumnDimension('A')->setWidth(12);
            },
        ];
    }

    /**
     * Helper method to add an image to the sheet.
     *
     * @param \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet $sheet
     * @param string $imagePath
     * @param string $cellCoordinates
     * @param int $height
     * @param int $offsetX
     * @param int $offsetY
     * @return void
     */
    private function addImageToSheet($sheet, $imagePath, $cellCoordinates, $height, $offsetX, $offsetY)
    {
        if (file_exists(public_path($imagePath))) {
            $drawing = new Drawing();
            $drawing->setName('Image');
            $drawing->setDescription('Image');
            $drawing->setPath(public_path($imagePath));
            $drawing->setHeight($height);
            $drawing->setOffsetX($offsetX);
            $drawing->setOffsetY($offsetY);
            $drawing->setCoordinates($cellCoordinates);
            $drawing->setWorksheet($sheet);
        }
    }

}
