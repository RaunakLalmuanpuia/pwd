<?php

namespace App\Http\Controllers;

use App\Models\ExamMarks;
use App\Models\Exam;
use App\Models\JobDetail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ExamMarksController extends Controller
{
    // Show Job list for Exam Marks
    public function index(Request $request){
//        $jobDetails = JobDetail::withCount(['applications' => function ($query) {
//            $query->whereIn('status', ['approved', 'eligible']);
//        }])
//            ->with('documents')
//            ->get();
//
//        return inertia('Exams/MarksIndex', [
//            'jobDetails' => $jobDetails,
//        ]);
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


        return Inertia::render('Exams/MarksIndex',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);
    }
    // Show for Exam Marks Page
    public function show(JobDetail $jobDetail){

//        dd($jobDetail);

        return inertia('Exams/MarksShow', [
            'data'=>$jobDetail->load(['documents', 'exams.subjects'])
        ]);
    }

    public function create(Exam $exam)
    {
        $exam->load('subjects');

        $applicants = $exam->jobDetail->applications()->whereIn('status', ['approved', 'eligible'])
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

    // Store Exam Marks

    public function store(Request $request, Exam $exam)
    {
        $validated = $request->validate([
            'marks' => 'required|array',
            'marks.*.applicant_id' => 'required|exists:applicants,id',
            'marks.*.subject_id' => 'required|exists:subjects,id',
            'marks.*.marks' => 'nullable|numeric|min:0',
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

        return redirect()->route('exams.marks.show', $exam->job_details_id)->with('success', 'Marks updated successfully.');
    }

    public function showMarks(JobDetail $model)
    {
        // Load related data for the specific job
        $jobDetail = JobDetail::with([
            'exams.subjects', // Load subjects for the exams related to the job
        ])->findOrFail($model->id);

        // Get the IDs of subjects related to this job's exams
        $subjectIds = $jobDetail->exams->flatMap(function ($exam) {
            return $exam->subjects->pluck('id');
        });

        // Fetch applicants and their marks only for the subjects of this job
        $applicants = $jobDetail->applications()->with([
            'applicant.examMarks' => function ($query) use ($subjectIds) {
                $query->whereIn('subject_id', $subjectIds); // Filter marks by subjects related to the job
            },
            'applicant.examMarks.subject', // Load the related subject for each mark
            'examCenter',
            'applicant.user',
        ])->get();

        // Check if there are no applicants
        if ($applicants->isEmpty()) {
            return redirect()->back()->with('success', 'No applicants available yet.');
        }

        // Render the view with the filtered data
        return Inertia::render('Jobs/Marks', [
            'jobDetail' => $jobDetail,
            'applicants' => $applicants,
        ]);
    }

}
