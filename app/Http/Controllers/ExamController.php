<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\JobDetail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    //
    /**
     * Show the form to create a new exam for a job.
     */
    // Job List for Marks.
    public function index(Request $request){

        $search = $request->get('search');

        $jobDetails = JobDetail::query()
            ->withCount(['applications' => function ($query) {
                $query->whereIn('status', ['approved','eligible']);
            }])
            ->when($search, function (Builder $query) use ($search) {
                $query->where('post_name', 'LIKE', "%$search%");
            })
            ->latest()
            ->simplePaginate(10); // Adjust pagination as necessary


        return Inertia::render('Exams/Index',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);
    }
    // Create Exam
    public function create(JobDetail $jobDetail)
    {
        return Inertia::render('Exams/Create', [
            'job' => $jobDetail,
        ]);
    }

    // View Exam
    public function show(JobDetail $jobDetail){
        return inertia('Exams/Show', [
            'data'=>$jobDetail->load(['documents', 'exams.subjects'])
        ]);
    }


    /**
     * Store a new exam along with its subjects.
     */
    //Create Exam and Subjects
    public function store(Request $request, JobDetail $jobDetail)
    {
//        dd($request);
        $validated = $request->validate([
            'exam_name' => 'required|string|max:255',
            'exam_date' => 'nullable',
            'start_at' => 'required',
            'description' =>  'nullable',
            'end_at'=> 'required',
            'pass_mark' => 'required',
            'full_mark'=> 'required',
            'active' => 'required',
            'subjects' => 'required|array|min:1',
            'subjects.*.subject_name' => 'required|string|max:255',
            'subjects.*.exam_date' => 'required|date',
            'subjects.*.start_time' => 'required|date_format:H:i',
            'subjects.*.end_time' => 'required|date_format:H:i',
        ]);

        // Create the exam
        $exam = Exam::create([
            'job_details_id' => $jobDetail->id,
            'exam_name' => $validated['exam_name'],
            'description' => $validated['description'],
            'start_at' => $validated['start_at'],
            'end_at' => $validated['end_at'],
            'pass_mark' => $validated['pass_mark'],
            'full_mark' => $validated['full_mark'],
            'active' => $validated['active'],
        ]);

        // Add the subjects to the exam
        foreach ($validated['subjects'] as $subject) {
            $exam->subjects()->create([
                'subject_name' => $subject['subject_name'],
                'exam_date' => $subject['exam_date'],
                'start_time' => $subject['start_time'],
                'end_time' => $subject['end_time'],
            ]);
        }

        return redirect()->route('exams.show', $jobDetail->id)
            ->with('success', 'Exam and subjects created successfully.');
    }
    /**
     * Show the form to edit an existing exam and its subjects.
     */

    // Open edit exam page
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
    // Update Exam and subjects
    public function update(Request $request, Exam $exam)
    {
//        dd($request->subjects);
        $validated = $request->validate([
            'exam_name' => 'required|string|max:255',
            'exam_date' => 'nullable',
            'start_at' => 'required',
            'description' =>  'nullable',
            'end_at'=> 'required',
            'pass_mark' => 'required',
            'full_mark'=> 'required',
            'active' => 'required',
            'subjects' => 'required|array|min:1',
            'subjects.*.id' => 'nullable',
            'subjects.*.subject_name' => 'required|string|max:255',
            'subjects.*.exam_date' => 'required|date',
            'subjects.*.start_time' => 'required',
            'subjects.*.end_time' => 'required',
        ]);

        // Update the exam
        $exam->update([
            'exam_name' => $validated['exam_name'],
            'exam_date' => $validated['exam_date'],
            'description' => $validated['description'],
            'start_at' => $validated['start_at'],
            'end_at' => $validated['end_at'],
            'pass_mark' => $validated['pass_mark'],
            'full_mark' => $validated['full_mark'],
            'active' => $validated['active'],
        ]);
        // Get the IDs of the subjects in the request
        $subjectIds = collect($request->subjects)
            ->filter(fn($subject) => isset($subject['id']))
            ->pluck('id')
            ->toArray();
        // Delete subjects that are not in the request
        $exam->subjects()->whereNotIn('id', $subjectIds)->delete();

        // Update or create subjects
        foreach ($validated['subjects'] as $subjectData) {

            if (isset($subjectData['id'])) {
                // Update existing subject

                $exam->subjects()->where('id', $subjectData['id'])->update([
                    'subject_name' => $subjectData['subject_name'],
                    'exam_date' => $subjectData['exam_date'],
                    'start_time' => $subjectData['start_time'],
                    'end_time' => $subjectData['end_time'],
                ]);
            } else {
                // Create new subject
                $exam->subjects()->create([
                    'subject_name' => $subjectData['subject_name'],
                    'exam_date' => $subjectData['exam_date'],
                    'start_time' => $subjectData['start_time'],
                    'end_time' => $subjectData['end_time'],
                ]);
            }
        }

        return redirect()->route('exams.show', $exam->job_details_id)
            ->with('success', 'Exam and subjects updated successfully.');
    }
    //Delete Exam
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
