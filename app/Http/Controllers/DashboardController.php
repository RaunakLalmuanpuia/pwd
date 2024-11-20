<?php

namespace App\Http\Controllers;

use App\Models\JobDetail;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index(Request $request)
    {
        $user = auth()->user();

        if ($user->hasRole('Admin')) {
            return to_route('dashboard.admin');
        }

        if ($user->hasRole('Applicant')) {
            return to_route('dashboard.citizen');
        }

        return inertia('Dashboard', [
            'user' => $user,
        ]);
    }
    public function admin(Request $request)
    {
        return inertia('Dashboard/Admin');
    }
    public function citizen(Request $request)
    {
        $jobDetail = JobDetail::select(['id','post_name', 'no_of_post', 'application_deadline'])->get();
        return inertia('Dashboard/Citizen',[
            'jobDetail' => $jobDetail,
        ]);
    }

}
