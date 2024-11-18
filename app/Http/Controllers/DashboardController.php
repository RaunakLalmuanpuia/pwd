<?php

namespace App\Http\Controllers;

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
        return inertia('Dashboard/Applicant');
    }

    public function aspio(Request $request)
    {
        return inertia('Dashboard/Aspio');
    }

    public function spio(Request $request)
    {
        return inertia('Dashboard/Spio');
    }

    public function daa(Request $request)
    {
        return inertia('Dashboard/Daa');
    }
    public function cic(Request $request)
    {
        return inertia('Dashboard/Cic');
    }

}
