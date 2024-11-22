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
        $validated = $request->validate([
            'post_name' => 'required|string|max:255',
            'department_id' => 'required|integer',
            'no_of_post' => 'required|integer|min:1|max:255',
            'salary' => 'required|numeric|min:0',
            'age_limit' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'application_deadline' => 'required|date|after:today',
            'application_fee' => 'required|numeric|min:0',
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
    public function edit(Request $request, JobDetail $model)
    {
        return inertia('Jobs/Edit', [
            'data'=>$model->load('documents')
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
            'post_name' => 'required|string|max:255',
            'department_id' => 'required|integer',
            'no_of_post' => 'required|integer|min:1|max:255',
            'salary' => 'required|numeric|min:0',
            'age_limit' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'application_deadline' => 'required|date|after:today',
            'application_fee' => 'required|numeric|min:0',
            'documents' => 'nullable|array',
            'documents.*.id' => 'nullable|integer|exists:documents,id',
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
}
