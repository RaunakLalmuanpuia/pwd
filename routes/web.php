<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\JobDetailsController;
use App\Http\Controllers\ApplicationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Dashboard Controller
Route::group(['middleware' => 'auth', 'prefix' => 'dashboard'], function () {
    Route::get('',[DashboardController::class,'index'])->name('dashboard');
    Route::get('admin',[DashboardController::class,'admin'])->name('dashboard.admin');
    Route::get('citizen',[DashboardController::class,'citizen'])->name('dashboard.citizen');
});


// Profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


//BIO Controller
Route::group(['middleware' => 'auth', 'prefix' => 'applicant/bio'], function () {
    Route::get('bio',[ApplicantController::class,'bio'])->name('applicant.bio');
    Route::post('',[ApplicantController::class,'store_bio'])->name('applicant.bio_store');
    Route::post('{applicant}', [ApplicantController::class, 'update_bio'])->name('applicant.bio_update');

});

//Address
Route::group(['middleware' => 'auth', 'prefix' => 'applicant/address'], function () {
    Route::get('address',[ApplicantController::class,'address'])->name('applicant.address');
    Route::post('',[ApplicantController::class,'store_address'])->name('applicant.address_store');
    Route::post('{address}', [ApplicantController::class, 'update_address'])->name('applicant.address_update');
});


Route::middleware('auth')->group(function () {

    // JobDetail Controller
    Route::group(['middleware' => 'auth', 'prefix' => 'job'], function () {
        Route::get('/index', [JobDetailsController::class, 'index'])->middleware('role:Admin')->name('job.index');
        Route::get('/create', [JobDetailsController::class, 'create'])->middleware('role:Admin')->name('job.create');
        Route::post('', [JobDetailsController::class, 'store'])->middleware('role:Admin')->name('job.store');
        Route::get('{model}', [JobDetailsController::class, 'edit'])->middleware('role:Admin')->name('job.edit');
        Route::put('{model}', [JobDetailsController::class, 'update'])->middleware('role:Admin')->name('job.update');
        Route::delete('{model}', [JobDetailsController::class, 'destroy'])->middleware('role:Admin')->name('job.destroy');
    });


    // Application Controller
    Route::group(['middleware' => 'auth', 'prefix' => 'application'], function () {

        // Citizen View and apply application
        Route::get('{jobDetail}/show', [ApplicationController::class, 'show'])->name('application.show');
        Route::post('{jobDetail}/apply', [ApplicationController::class, 'apply'])->name('application.apply');

        // Citizen Application Index
        Route::get('/applications', [ApplicationController::class, 'index'])->name('applications.index');
        //Admin Application Index
        Route::get('/admin/applications', [ApplicationController::class, 'adminIndex'])->name('admin.applications.index');

        // Admin route to change the status of an application (approve or reject)
        Route::put('/admin/applications/{application}', [ApplicationController::class, 'changeStatus'])->name('admin.applications.changeStatus');

    });

});

require __DIR__.'/auth.php';


