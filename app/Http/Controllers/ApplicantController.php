<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    //
    public function bio(){
        return inertia("Applicant/Bio");
    }

    public function store_bio(Request $request){
        dd($request);
    }
}
