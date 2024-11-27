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
        // Citizen View application
        Route::get('{jobDetail}/show', [ApplicationController::class, 'show'])->name('application.show');
        // Citizen apply application
        Route::post('{jobDetail}/apply', [ApplicationController::class, 'apply'])->name('application.apply');
        // Citizen Application Index
        Route::get('/applications', [ApplicationController::class, 'index'])->name('applications.index');
        //Citizen Download Admit Card
        Route::get('/admit-card/{jobDetail}', [ApplicationController::class, 'generateAdmitCardByJob'])->name('admit-card-job');

//        //Admin Job Application Index
//        Route::get('/admin/applications', [ApplicationController::class, 'adminIndex'])->middleware('role:Admin')->name('admin.applications.index');

        Route::get('admin/{jobDetails}/applicant/{application}/show', [ApplicationController::class, 'showApplicantDetail'])->name('admin.application.show_applicant_detail');
        //Admin Job Application Index - Submission
        Route::get('/admin/applications/submission', [ApplicationController::class, 'adminIndexSubmission'])->middleware('role:Admin')->name('admin.applications.index_submission');

        //Admin Job Application Index - Approved
        Route::get('/admin/applications/approved', [ApplicationController::class, 'adminIndexApproved'])->middleware('role:Admin')->name('admin.applications.index_approved');

        //Admin Job Application Index - Approved
        Route::get('/admin/applications/eligible', [ApplicationController::class, 'adminIndexEligible'])->middleware('role:Admin')->name('admin.applications.index_eligible');

//        //Admin Job Application Show
//        Route::get('/admin/applications/{jobDetails}/show', [ApplicationController::class, 'adminShow'])->middleware('role:Admin')->name('admin.applications.show');

        //Admin Job Application Show submission
        Route::get('/admin/applications/{jobDetails}/submission', [ApplicationController::class, 'adminShowSubmitted'])->middleware('role:Admin')->name('admin.applications.show_submission');

        //Admin Job Application Show Approved
        Route::get('/admin/applications/{jobDetails}/approved', [ApplicationController::class, 'adminShowApproved'])->middleware('role:Admin')->name('admin.applications.show_approved');

        //Admin Job Application Show Eligible
        Route::get('/admin/applications/{jobDetails}/eligible', [ApplicationController::class, 'adminShowEligible'])->middleware('role:Admin')->name('admin.applications.show_eligible');


        // Admin route to change the status of an application (approve or reject)
        Route::put('/admin/applications/{application}', [ApplicationController::class, 'changeStatus'])->middleware('role:Admin')->name('admin.applications.changeStatus');

        Route::put('/admin/applications/bulk-change-status', [ApplicationController::class, 'bulkChangeStatus'])
            ->middleware('role:Admin')
            ->name('admin.applications.bulkChangeStatus');

    });

});

Route::put('/admin/applications/bulk-change-status', [ApplicationController::class, 'bulkChangeStatus'])
    ->middleware('role:Admin')
    ->name('admin.applications.bulkChangeStatus');

//Admin Exam Controller
Route::middleware(['auth'])->group(function () {
    Route::get('/jobs/{jobDetail}/exams/create', [ExamController::class, 'create'])->middleware('role:Admin')->name('exams.create');
    Route::post('/jobs/{jobDetail}/exams', [ExamController::class, 'store'])->middleware('role:Admin')->name('exams.store');
    Route::get('/exams/{exam}/edit', [ExamController::class, 'edit'])->middleware('role:Admin')->name('exams.edit');
    Route::put('/exams/{exam}', [ExamController::class, 'update'])->middleware('role:Admin')->name('exams.update');
    Route::delete('/exam/{exam}', [ExamController::class, 'destroy'])->middleware('role:Admin')->name('exam.destroy');

});


Route::middleware(['auth'])->group(function () {
    // Display form to assign marks to applicants
    Route::get('/exams/{exam}/assign-marks', [ExamMarksController::class, 'create'])->middleware('role:Admin')->name('exams.assignMarks');
    // Store the marks assigned to applicants
    Route::post('/exams/{exam}/assign-marks', [ExamMarksController::class, 'store'])->middleware('role:Admin')->name('exams.storeMarks');
    // Assign Exam Center
    Route::get('/exams/{exam}/assign-centers', [ExamCenterController::class, 'create'])->middleware('role:Admin')->name('exams.assignCenters');
    Route::post('/exams/{exam}/assign-centers', [ExamCenterController::class, 'store'])->middleware('role:Admin')->name('exams.storeCenters');
    //Admin show marks
    Route::get('/exam/{model}/marks', [JobDetailsController::class, 'showMarks'])->middleware('role:Admin')->name('job.showMarks');
});



require __DIR__.'/auth.php';


