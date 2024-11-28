<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    //
    /**
     * Show the form to create a new exam for a job.
     */

    public function index(){
        $jobDetails = JobDetail::withCount(['applications' => function ($query) {
            $query->where('status', 'approved');
        }])
            ->with('documents')
            ->get();

        return inertia('Exams/Index', [
            'jobDetails' => $jobDetails,
        ]);
    }

    public function create(JobDetail $jobDetail)
    {
        return Inertia::render('Exams/Create', [
            'job' => $jobDetail,
        ]);
    }


    public function show(JobDetail $jobDetail){
//        dd($jobDetail);

        return inertia('Exams/Show', [
            'data'=>$jobDetail->load(['documents', 'exams.subjects'])
        ]);
    }


    /**
     * Store a new exam along with its subjects.
     */
    public function store(Request $request, JobDetail $jobDetail)
    {
        $validated = $request->validate([
            'exam_name' => 'required|string|max:255',
            'exam_date' => 'required|date',
            'subjects' => 'required|array|min:1',
            'subjects.*.name' => 'required|string|max:255',
            'subjects.*.date' => 'required|date',
            'subjects.*.time' => 'required|date_format:H:i',
        ]);

        // Create the exam
        $exam = Exam::create([
            'job_details_id' => $jobDetail->id,
            'exam_name' => $validated['exam_name'],
            'exam_date' => $validated['exam_date'],
        ]);

        // Add the subjects to the exam
        foreach ($validated['subjects'] as $subject) {
            $exam->subjects()->create([
                'subject_name' => $subject['name'],
                'exam_date' => $subject['date'],
                'exam_time' => $subject['time'],
            ]);
        }

        return redirect()->route('exams.show', $jobDetail->id)
            ->with('success', 'Exam and subjects created successfully.');
    }
    /**
     * Show the form to edit an existing exam and its subjects.
     */
    public function edit(Exam $exam)
    {
        $exam->load('subjects');

        return Inertia::render('Exams/Edit', [
            'exam' => $exam,
            'job' => $exam->jobDetail, // Include job details for context
        ]);
    }

    /**
     * Update an existing exam along with its subjects.
     */
    public function update(Request $request, Exam $exam)
    {
//        dd($request);
        $validated = $request->validate([
            'exam_name' => 'required|string|max:255',
            'exam_date' => 'required|date',
            'subjects' => 'required|array|min:1',
            'subjects.*.id' => 'nullable|exists:subjects,id',
            'subjects.*.name' => 'required|string|max:255',
            'subjects.*.date' => 'required|date',
            'subjects.*.time' => 'required',
        ]);

        // Update the exam
        $exam->update([
            'exam_name' => $validated['exam_name'],
            'exam_date' => $validated['exam_date'],
        ]);

        // Update or create subjects
        foreach ($validated['subjects'] as $subjectData) {
            if (isset($subjectData['id'])) {
                // Update existing subject
                $exam->subjects()->where('id', $subjectData['id'])->update([
                    'subject_name' => $subjectData['name'],
                    'exam_date' => $subjectData['date'],
                    'exam_time' => $subjectData['time'],
                ]);
            } else {
                // Create new subject
                $exam->subjects()->create([
                    'subject_name' => $subjectData['name'],
                    'exam_date' => $subjectData['date'],
                    'exam_time' => $subjectData['time'],
                ]);
            }
        }

        return redirect()->route('exams.show', $exam->job_details_id)
            ->with('success', 'Exam and subjects updated successfully.');
    }
    public function destroy(Exam $exam)
    {
        // Ensure the exam exists
        if (!$exam) {
            return redirect()->route('exams.marks.show',$exam->job_details_id)->with('error', 'Exam not found.');
        }
        // Delete associated exam marks first
        foreach ($exam->subjects as $subject) {
            // Delete any exam marks related to this subject
            $subject->examMarks()->delete();
        }
        // Delete associated subjects
        foreach ($exam->subjects as $subject) {
            $subject->delete();
        }

        // Delete the exam
        $exam->delete();
        return redirect()->route('exams.show', $exam->job_details_id)
            ->with('success', 'Exam and its subjects deleted successfully.');
    }
}
