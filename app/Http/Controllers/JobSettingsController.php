<?php

namespace App\Http\Controllers;

use App\Models\JobDetail;
use App\Models\Setting;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class JobSettingsController extends Controller
{
    //
    public function index(Request $request){

        $search = $request->get('search');

        $jobDetails = JobDetail::query()
            ->withCount(['applications' => function ($query) {
                $query->where('status','!=', 'draft');
            }])
            ->when($search, function (Builder $query) use ($search) {
                $query->where('post_name', 'LIKE', "%$search%");
            })
            ->latest()
            ->simplePaginate(10); // Adjust pagination as necessary


        return Inertia::render('JobSettings/Index',[
            'jobDetails' => $jobDetails,
            'search' => $search,
        ]);
    }

    public function settings(JobDetail $jobDetail){

        $jobSetting = $jobDetail->settings()->first();
        return inertia('JobSettings/Settings', [
            'data'=>$jobDetail,
            'jobSetting'=>$jobSetting,
        ]);
    }

    public function jobSettings(Request $request, JobDetail $jobDetail)
    {
        $validated = $request->validate([
            'from_admit_card' => 'required|date',
            'to_admit_card' => 'required|date|after_or_equal:from_admit_card',
        ]);

        // Use `updateOrCreate` to handle both store and update in one step
        $jobDetail->settings()->updateOrCreate(
            ['job_details_id' => $jobDetail->id], // Matching condition
            $validated // Data to insert or update
        );

        return redirect()->back()->with('success', 'Job settings saved successfully.');
    }

}
