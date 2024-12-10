<?php

namespace App\Http\Controllers;


use App\Exports\EligibleSheetExport;
use App\Exports\JobDetailsExport;
use App\Exports\SubmittedSheetExport;
use App\Models\Applications;
use App\Models\Documents;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class JobDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $jobs = JobDetail::query()->when($search,fn($q)=>$q->where('post_name','LIKE',"$search%"))->simplepaginate(2);
        return Inertia::render('Jobs/Index',[
            'jobs' => $jobs,
            'search' => $search,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Jobs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        dd($request);
        $validated = $request->validate([
            'code' => 'required',
            'post_name' => 'required|string|max:255',
            'department_id' => 'required|integer',
            'no_of_post' => 'required|integer|min:1|max:255',
            'category'=> 'required|string|max:255',
            'salary' => 'required|numeric|min:0',
            'upper_age_limit' => 'required|string|max:255',
            'lower_age_limit' => 'required|string|max:255',
            'age_relaxation' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'application_deadline' => 'required|date|after:today',
            'application_fee_other' => 'required|numeric|min:0',
            'application_fee_general' => 'required|numeric|min:0',
            'documents' => 'nullable|array',
            'documents.*.name' => 'required|string|max:255',
            'documents.*.description' => 'nullable|string|max:255',
            'documents.*.is_mandatory' => 'required|boolean',
        ]);


        $jobDetails = JobDetail::create($validated);

        foreach ($validated['documents'] as $document) {
            Documents::create([
                'job_detail_id' => $jobDetails->id,
                'document_name' => $document['name'],
                'document_description'=> $document['description'],
                'is_mandatory' => $document['is_mandatory'],
            ]);
        }

        return redirect()->route('job.index')->with('success', 'Job created successfully.');
    }

    /**
     * Display the specified resource.
     */

    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobDetail $model)
    {
        return inertia('Jobs/Edit', [
            'data'=>$model->load(['documents', 'exams.subjects'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobDetail $model)
    {
        $jobDetails = $model;

        // Validate the incoming data
        $validated = $request->validate([
            'code' => 'required',
            'post_name' => 'required|string|max:255',
            'department_id' => 'required|integer',
            'no_of_post' => 'required|integer|min:1|max:255',
            'category'=> 'required|string|max:255',
            'salary' => 'required|numeric|min:0',
            'upper_age_limit' => 'required|string|max:255',
            'lower_age_limit' => 'required|string|max:255',
            'age_relaxation' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'application_deadline' => 'required|date|after:today',
            'application_fee_other' => 'required|numeric|min:0',
            'application_fee_general' => 'required|numeric|min:0',
            'documents' => 'nullable|array',
            'documents.*.name' => 'required|string|max:255',
            'documents.*.description' => 'nullable|string|max:255',
            'documents.*.is_mandatory' => 'required|boolean',
        ]);

        // Update job details
        $jobDetails->update($validated);

        // Get current document IDs from the request
        $currentDocumentIds = collect($validated['documents'])->pluck('id')->filter();

        // Delete removed documents
        Documents::where('job_detail_id', $jobDetails->id)
            ->whereNotIn('id', $currentDocumentIds)
            ->delete();

        // Process documents
        foreach ($validated['documents'] as $document) {
            if (isset($document['id'])) {
                // Update existing document
                Documents::where('id', $document['id'])->update([
                    'document_name' => $document['name'],
                    'document_description' => $document['description'],
                    'is_mandatory' => $document['is_mandatory'],
                ]);
            } else {
                // Create new document
                Documents::create([
                    'job_detail_id' => $jobDetails->id,
                    'document_name' => $document['name'],
                    'document_description' => $document['description'],
                    'is_mandatory' => $document['is_mandatory'],
                ]);
            }
        }

        return redirect()->route('job.index')->with('success', 'Job updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobDetail $model)
    {
        $jobDetails = $model;
        // Delete associated documents
        Documents::where('job_detail_id', $jobDetails->id)->delete();

        // Delete the job itself
        $jobDetails->delete();

        return redirect()->route('job.index')->with('success', 'Job deleted successfully.');
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

    // Download Approved Excel
    public function exportJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'approved')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new JobDetailsExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }
    public function exportEligibleJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'eligible')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new EligibleSheetExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }
    public function exportSubmittedJobDetails($job_detail_id)
    {
        // Fetch the job detail and related data based on the ID
        $jobDetails = JobDetail::with(['applications' => function($query) {
            // Filter applications to get only those with 'approved' status
            $query->where('status', 'pending')
                ->with('applicant.user');  // Also eager load related user data for applicants
        }])->where('id', $job_detail_id)->first();

        if (!$jobDetails) {
            return response()->json(['error' => 'Job detail not found'], 404);
        }

        $export = new SubmittedSheetExport($jobDetails);
        return Excel::download($export, now()->timestamp . '.xlsx');
    }

}
