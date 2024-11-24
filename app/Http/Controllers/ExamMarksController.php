<?php

namespace App\Http\Controllers;

use App\Models\ExamMarks;
use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ExamMarksController extends Controller
{
    //
    public function create(Exam $exam)
    {
        $exam->load('subjects');

        $applicants = $exam->jobDetail->applications()->where('status', 'approved')
            ->get()
            ->map(function ($application) {
                return $application->applicant->load('user');
            });

        // Check if there are no applicants and redirect back with a message
        if ($applicants->isEmpty()) {
            return redirect()->back()->with('success', 'No applicants found for this exam.');
        }

        // Get existing marks for the applicants and subjects
        $examMarks = ExamMarks::whereIn('applicant_id', $applicants->pluck('id'))
            ->whereIn('subject_id', $exam->subjects->pluck('id'))
            ->get()
            ->groupBy('applicant_id');

        return Inertia::render('Exams/AssignMark', [
            'exam' => $exam,
            'applicants' => $applicants,
            'subjects' => $exam->subjects,
            'examMarks' => $examMarks,
        ]);
    }

    public function store(Request $request, Exam $exam)
    {
        $validated = $request->validate([
            'marks' => 'required|array',
            'marks.*.applicant_id' => 'required|exists:applicants,id',
            'marks.*.subject_id' => 'required|exists:subjects,id',
            'marks.*.marks' => 'nullable|numeric|min:0|max:100',
        ]);

        // Loop through the marks data and update or create them
        foreach ($validated['marks'] as $markData) {
            ExamMarks::updateOrCreate(
                [
                    'applicant_id' => $markData['applicant_id'],
                    'subject_id' => $markData['subject_id'],
                ],
                ['marks' => $markData['marks']] // This will update the marks if they exist, or create a new record
            );
        }

        return redirect()->route('job.edit', $exam->job_details_id)->with('success', 'Marks updated successfully.');
    }

}
