<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Applications;
use App\Models\ExamMarks;
use App\Models\Exam;
use App\Models\JobDetail;
use App\Utils\ApplicationStatus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class ExamMarksController extends Controller
{
    // Show Job list for Exam Marks
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

    // Old
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
    // New
    public function assignMarks(Request $request){

        $applicant_id = $request->get('search');

        $model = Applications::query()
            ->where('status', 'approved')
            ->where('application_id', $applicant_id)->with('jobDetail', 'applicant.user.address')->first();
//        dd($model);
        $subjects = collect();

        if($model){

            // Extract the subjects related to the job detail's exams
            // Extract the subjects related to the job detail's exams
            $subjects = $model->jobDetail->exams
                ->flatMap(fn($exam) => $exam->subjects->map(function ($subject) use ($exam, $model) {
                    // Include existing marks if available
                    $existingMarks = ExamMarks::where('applicant_id', $model->applicant_id)
                        ->where('subject_id', $subject->id)
                        ->first();

                    return [
                        'exam_name' => $exam->exam_name, // Include exam name
                        'subject_id' => $subject->id,
                        'subject_name' => $subject->subject_name,
                        'full_mark' => $subject->full_mark,
                        'existing_marks' => $existingMarks?->marks,
                        'remark' => $existingMarks?->remark,
                        'passed' => (bool)($existingMarks?->passed)
                    ];
                }))
                ->groupBy('exam_name'); // Group subjects by 'exam_name'


        }

        return Inertia::render('ExamMark/Result', [
            'applicants' => $model,
            'subjects' => $subjects,
        ]);
    }
    // Store Exam Marks
    public function store(Request $request, Exam $exam)
    {
//        dd($request);
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

    public function storeExamMarks(Request $request)
    {
//        dd($request);
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'application_id' => 'required|exists:applications,id',
            'subjects' => 'required|array',
            'subjects.*.*.subject_name' => 'required|string',
            'subjects.*.*.existing_marks' => 'nullable|numeric|min:0',
            'subjects.*.*.remark' => 'nullable|string',
            'subjects.*.*.passed' => 'required|boolean', // Change to required
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $applicationId = $request->input('application_id');
        $subjects = $request->input('subjects');

        // Retrieve the associated application
        $application = Applications::find($applicationId);

        if (!$application) {
            return response()->json(['error' => 'Application not found'], 404);
        }


        // Store or update marks for each subject
        foreach ($subjects as $examName => $examSubjects) {
            foreach ($examSubjects as $subject) {
                // Ensure the required keys exist before accessing them

                ExamMarks::updateOrCreate(
                    [
                        'applicant_id' => $application->applicant_id,
                        'subject_id' => $subject['subject_id'],
                    ],
                    [
                        'marks' => $subject['existing_marks'] ?? null,
                        'remark' => $subject['remark'] ?? null,
                        'passed' => $subject['passed'],
                    ]
                );
            }
        }
        return redirect()->back()->with('success', 'Marks updated successfully.');
//        return response()->json(['message' => 'Exam marks stored successfully']);
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
