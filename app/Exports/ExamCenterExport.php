<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class ExamCenterExport implements FromView, WithEvents
{
    private $applicants;
    private $exam_center;
    private $job_details;

    public function __construct($applicants, $exam_center, $job_details)
    {
        $this->applicants = $applicants;
        $this->exam_center = $exam_center;
        $this->job_details = $job_details;
    }

    public function view(): View
    {

        return view('reports.exam_center_report', [
            'applicants' => $this->applicants,
            'exam_center' => $this->exam_center,
            'job_details' => $this->job_details,

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
                foreach ($this->applicants as $index => $applicants) {
                    // Passport Image
                    if (filled($applicants->passport_photo)) {
                        $this->addImageToSheet(
                            $sheet,
                            'storage/' . $applicants->passport_photo,
                            'D' . ($index * 5 + $currentRow),
                            100, // Height
                            15, // Offset X
                            10  // Offset Y
                        );
                    }

                    // Signature Image
                    if (filled($applicants->signature_photo)) {
                        $this->addImageToSheet(
                            $sheet,
                            'storage/' . $applicants->signature_photo,
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
