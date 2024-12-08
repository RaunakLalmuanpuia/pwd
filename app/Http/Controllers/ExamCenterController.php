<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\Exam;
use App\Models\ExamCenter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ExamCenterController extends Controller
{
    // Exam center Index
    public function index(){
        $examCenters = ExamCenter::all(); // Fetch all available centers

        return Inertia::render('ExamCenter/Index', [
            'examCenters' => $examCenters,
        ]);
    }
    // Exam center Create page
    public function create_exam_center(){
        return Inertia::render('ExamCenter/Create');
    }
    // Store new Exam Center
    public function store_exam_center(Request $request){
//        dd($request);
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'available' => 'required|boolean',
        ]);

         ExamCenter::create([
            'center_name' => $validatedData['name'],
            'location' => $validatedData['location'],
            'capacity' => $validatedData['capacity'],
            'available' => $validatedData['available'],
        ]);

        return redirect()->route('exam_center.index')->with('success', 'Exam centers created successfully.');
    }
    // Edit exam center page
    public function edit_exam_center(ExamCenter $model){
//        dd($model);

        return Inertia::render('ExamCenter/Edit', [
            'examCenters' => $model,
        ]);
    }
    // Update exam center
    public function update_exam_center(Request $request, ExamCenter $model){
        // Validate the incoming request
        // dd($model);
        $validatedData = $request->validate([
            'center_name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'available' => 'required|boolean',
        ]);
        try {
            // Update the exam center with validated data
            $model->update($validatedData);
            // Redirect back with a success message
            return redirect()->route('exam_center.index')->with('success', 'Exam center updated successfully.');
        } catch (\Exception $e) {
            // Handle exceptions
            return redirect()->back()->with('error', 'An error occurred while updating the exam center.');
        }
    }
    // Delete Exam Center
    public function destroy_exam_center(ExamCenter $model)
    {
        //dd($model);
        try {
            // Check if there are any associated applications
            if ($model->applications()->exists()) {
                return redirect()->back()->with('error', 'Cannot delete the exam center because it has associated applications.');
            }
            // Delete the exam center
            $model->delete();
            return redirect()->route('exam_center.index')->with('success', 'Exam center deleted successfully.');
        } catch (\Exception $e) {
            // Handle exceptions
            return redirect()->back()->with('error', 'An error occurred while deleting the exam center.');
        }
    }



    public function create(Exam $exam)
    {
        $applicants = $exam->jobDetail->applications()
            ->where('status', 'approved')
            ->with(['applicant.user', 'examCenter'])
            ->get();

        // Check if there are no applicants
        if ($applicants->isEmpty()) {
            return redirect()->back()->with('success', 'No applicants available yet.');
        }

        $examCenters = ExamCenter::all(); // Fetch all available centers

        return Inertia::render('Exams/AssignExamCenters', [
            'exam' => $exam,
            'applicants' => $applicants,
            'examCenters' => $examCenters,
        ]);

    }
    public function store(Request $request,Exam $exam)
    {
//        dd($request);
        $validated = $request->validate([
            'assignments' => 'required|array',
            'assignments.*.applicant_id' => 'required|integer|exists:applications,applicant_id', // Ensure it's an integer
            'assignments.*.exam_center_id' => 'nullable|exists:exam_centers,id',
        ]);

        foreach ($validated['assignments'] as $assignment) {
            $application = Applications::where('applicant_id', $assignment['applicant_id'])
                ->where('job_details_id', $exam->job_details_id)
                ->firstOrFail();
            $application->exam_center_id = $assignment['exam_center_id'];
            $application->save();
        }
        return redirect()->route('job.edit', $exam->job_details_id)->with('success', 'Exam centers assigned successfully.');
    }
    public function storeCenters(Request $request)
    {
//        dd($request);
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'exam_center_id.id' => 'required|integer|exists:exam_centers,id',
            'application_ids' => 'required|array|min:1',
            'application_ids.*' => 'integer|exists:applications,id',
        ]);

        // Handle validation failures
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Extract validated data
        $examCenterId = $request->input('exam_center_id.id');
        $applicationIds = $request->input('application_ids');

        // Update the exam_center_id for the provided application IDs
        Applications::whereIn('id', $applicationIds)->update(['exam_center_id' => $examCenterId]);

        // Redirect back with a success message
        return redirect()->back()->with([
            'success' => 'Exam center assigned successfully.',
        ]);

    }
}
