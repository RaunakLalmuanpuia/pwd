<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\Exam;
use App\Models\ExamCenter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamCenterController extends Controller
{
    //
    public function create(Exam $exam)
    {
        $applicants = $exam->jobDetail->applications()
            ->where('status', 'approved')
            ->with(['applicant.user', 'examCenter'])
            ->get();


//        dd($applicants);
        $examCenters = ExamCenter::all(); // Fetch all available centers

        return Inertia::render('Exams/AssignExamCenters', [
            'exam' => $exam,
            'applicants' => $applicants,
            'examCenters' => $examCenters,
        ]);

    }


    public function store(Request $request,Exam $exam)
    {

        $validated = $request->validate([
            'assignments' => 'required|array',
            'assignments.*.applicant_id' => 'required|exists:applications,applicant_id',
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
}
