<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = JobDetail::all();
        return Inertia::render('Jobs/Index',[
            'jobs' => $jobs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Jobs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
//        dd($request);

        $validated = $request->validate([
            'post_name' => 'required|string|max:255',
//            'department_id' => 'required|exists:departments,id',
            'department_id' => 'required',
            'no_of_post' => 'required|string|max:255',
            'salary' => 'required|string|max:255',
            'age_limit' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'application_deadline' => 'required|date',
            'application_fee' => 'required|string|max:255',
            'documents' => 'array',
            'documents.*.name' => 'required|string|max:255',
            'documents.*.description' => 'string|max:255',
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
    public function edit(Request $request, JobDetail $model)
    {
        //
//        dd($model);
//        dd($model->load('documents'));
        return inertia('Jobs/Edit', [
            'data'=>$model->load('documents')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
