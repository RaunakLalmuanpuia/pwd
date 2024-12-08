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

Route::get('register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'create'])
    ->name('register');

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

        // Citizen update application
        Route::post('{jobDetail}/update', [ApplicationController::class, 'updateMandatoryDocument'])->name('application.update');

        // Citizen Submit application
        Route::post('{jobDetail}/submit', [ApplicationController::class, 'SubmitApplication'])->name('application.submit');

        // Citizen Application Index
        Route::get('/applications/submission', [ApplicationController::class, 'index'])->name('applications.index');


        // Citizen Application Draft
        Route::get('/applications/draft', [ApplicationController::class, 'draft'])->name('applications.draft');

        // Citizen View applications detail Submission
        Route::get('{jobDetail}/detail', [ApplicationController::class, 'viewApplication'])->name('application.viewApplication');

        // Citizen View applications detail Draft
        Route::get('draft/{jobDetail}/detail', [ApplicationController::class, 'viewApplicationDraft'])->name('application.viewApplicationDraft');


        //Citizen Download Admit Card
        Route::get('/admit-card/{jobDetail}', [ApplicationController::class, 'generateAdmitCardByJob'])->name('admit-card-job');

        //Admin Show Applicant Detaiils
        Route::get('admin/{jobDetails}/applicant/{application}/show', [ApplicationController::class, 'showApplicantDetail'])->name('admin.application.show_applicant_detail');
        //Admin Job Application Index - Submission
        Route::get('/admin/applications/submission', [ApplicationController::class, 'adminIndexSubmission'])->middleware('role:Admin')->name('admin.applications.index_submission');

        //Admin Job Application Index - Approved
        Route::get('/admin/applications/approved', [ApplicationController::class, 'adminIndexApproved'])->middleware('role:Admin')->name('admin.applications.index_approved');

        //Admin Job Application Index - Approved
        Route::get('/admin/applications/eligible', [ApplicationController::class, 'adminIndexEligible'])->middleware('role:Admin')->name('admin.applications.index_eligible');


        //Admin Job Application Show submission
        Route::get('/admin/applications/{jobDetails}/submission', [ApplicationController::class, 'adminShowSubmitted'])->middleware('role:Admin')->name('admin.applications.show_submission');

        //Admin Job Application Show Approved
        Route::get('/admin/applications/{jobDetails}/approved', [ApplicationController::class, 'adminShowApproved'])->middleware('role:Admin')->name('admin.applications.show_approved');

        //Admin Job Application Show Eligible
        Route::get('/admin/applications/{jobDetails}/eligible', [ApplicationController::class, 'adminShowEligible'])->middleware('role:Admin')->name('admin.applications.show_eligible');

        // Admin route to change the status of an application (approve or reject)
        Route::put('/admin/applications/{application}', [ApplicationController::class, 'changeStatus'])->middleware('role:Admin')->name('admin.applications.changeStatus');


    });

});

Route::put('/admin/applications/bulk-change-status', [ApplicationController::class, 'bulkChangeStatus'])
    ->middleware('role:Admin')
    ->name('admin.applications.bulkChangeStatus');

//Admin Exam Controller
Route::middleware(['auth'])->group(function () {
    Route::get('/jobs', [ExamController::class, 'index'])->middleware('role:Admin')->name('exams.index');
    Route::get('/jobs/{jobDetail}/show', [ExamController::class, 'show'])->middleware('role:Admin')->name('exams.show');
    Route::get('/jobs/{jobDetail}/exams/create', [ExamController::class, 'create'])->middleware('role:Admin')->name('exams.create');
    Route::post('/jobs/{jobDetail}/exams', [ExamController::class, 'store'])->middleware('role:Admin')->name('exams.store');
    Route::get('/exams/{exam}/edit', [ExamController::class, 'edit'])->middleware('role:Admin')->name('exams.edit');
    Route::put('/exams/{exam}', [ExamController::class, 'update'])->middleware('role:Admin')->name('exams.update');
    Route::delete('/exam/{exam}', [ExamController::class, 'destroy'])->middleware('role:Admin')->name('exam.destroy');

});


Route::middleware(['auth'])->group(function () {
    Route::get('/assign-marks', [ExamMarksController::class, 'index'])->middleware('role:Admin')->name('exams.marks.index');
    //Show exam marks page
    Route::get('/assign-marks/{jobDetail}/show', [ExamMarksController::class, 'show'])->middleware('role:Admin')->name('exams.marks.show');
    // Display form to assign marks to applicants
    Route::get('/exams/{exam}/assign-marks', [ExamMarksController::class, 'create'])->middleware('role:Admin')->name('exams.assignMarks');
    // Store the marks assigned to applicants
    Route::post('/exams/{exam}/assign-marks', [ExamMarksController::class, 'store'])->middleware('role:Admin')->name('exams.storeMarks');
    // Assign Exam Center
    Route::get('/exams/{exam}/assign-centers', [ExamCenterController::class, 'create'])->middleware('role:Admin')->name('exams.assignCenters');

    Route::post('/exams/{exam}/assign-centers', [ExamCenterController::class, 'store'])->middleware('role:Admin')->name('exams.storeCenters');


    Route::post('/exams/store-centers', [ExamCenterController::class, 'storeCenters'])->name('exams.allotCenters');


    //Admin show marks
    Route::get('/exam/{model}/marks', [JobDetailsController::class, 'showMarks'])->middleware('role:Admin')->name('job.showMarks');

    // Download Job Approved/Qualified List
    Route::get('/export-job-qualified/{job_detail_id}', [JobDetailsController::class, 'exportJobDetails'])->name('export.job.details');
    // Download Job Eligible List
    Route::get('/export-job-eligible/{job_detail_id}', [JobDetailsController::class, 'exportEligibleJobDetails'])->name('export.job.eligible.details');
    // Download Job Submitted List
    Route::get('/export-job-submitted/{job_detail_id}', [JobDetailsController::class, 'exportSubmittedJobDetails'])->name('export.job.submitted.details');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/examCenter', [ExamCenterController::class, 'index'])->middleware('role:Admin')->name('exam_center.index');
    Route::get('/examCenter/create', [ExamCenterController::class, 'create_exam_center'])->middleware('role:Admin')->name('exam_center.create');
    Route::post('/examCenter/store', [ExamCenterController::class, 'store_exam_center'])->middleware('role:Admin')->name('exam_center.store');
    Route::get('{model}', [ExamCenterController::class, 'edit_exam_center'])->middleware('role:Admin')->name('exam_center.edit');
    Route::put('{model}', [ExamCenterController::class, 'update_exam_center'])->middleware('role:Admin')->name('exam_center.update');
    Route::delete('{model}', [ExamCenterController::class, 'destroy_exam_center'])->middleware('role:Admin')->name('exam_center.destroy');
});

require __DIR__.'/auth.php';


