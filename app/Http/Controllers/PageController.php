<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    //
    public function privacy()
    {
        return inertia('Privacy');
    }

    public function term(Request $request)
    {
        return inertia('Page/Term');
    }
}
