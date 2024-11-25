<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\JobDetailsController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ExamMarksController;
use App\Http\Controllers\ExamCenterController;



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

Route::get('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])
    ->name('login');

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

        //Admin Job Application Index
        Route::get('/admin/applications', [ApplicationController::class, 'adminIndex'])->name('admin.applications.index');

        //Admin Job Application Show
        Route::get('/admin/applications/{jobDetails}/show', [ApplicationController::class, 'adminShow'])->name('admin.applications.show');

        // Admin route to change the status of an application (approve or reject)
        Route::put('/admin/applications/{application}', [ApplicationController::class, 'changeStatus'])->name('admin.applications.changeStatus');

//        Route::get('/admit-card/{applicant}', [ApplicationController::class, 'generateAdmitCard'])->name('admit-card');

        Route::get('/admit-card/{jobDetail}', [ApplicationController::class, 'generateAdmitCardByJob'])->name('admit-card-job');



    });

});

//Admin Exam Controller
Route::middleware(['auth'])->group(function () {
    Route::get('/jobs/{jobDetail}/exams/create', [ExamController::class, 'create'])->name('exams.create');
    Route::post('/jobs/{jobDetail}/exams', [ExamController::class, 'store'])->name('exams.store');
    Route::get('/exams/{exam}/edit', [ExamController::class, 'edit'])->name('exams.edit');
    Route::put('/exams/{exam}', [ExamController::class, 'update'])->name('exams.update');
    Route::delete('/exam/{exam}', [ExamController::class, 'destroy'])->name('exam.destroy');

});


Route::middleware(['auth'])->group(function () {
    // Display form to assign marks to applicants
    Route::get('/exams/{exam}/assign-marks', [ExamMarksController::class, 'create'])->name('exams.assignMarks');
    // Store the marks assigned to applicants
    Route::post('/exams/{exam}/assign-marks', [ExamMarksController::class, 'store'])->name('exams.storeMarks');
    // Assign Exam Center
    Route::get('/exams/{exam}/assign-centers', [ExamCenterController::class, 'create'])->name('exams.assignCenters');
    Route::post('/exams/{exam}/assign-centers', [ExamCenterController::class, 'store'])->name('exams.storeCenters');
    //Admin show marks
    Route::get('{model}', [JobDetailsController::class, 'showMarks'])->middleware('role:Admin')->name('job.showMarks');
});



require __DIR__.'/auth.php';


