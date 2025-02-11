<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobSettingsController;
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
use App\Http\Controllers\PaytmController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\AdminApplicationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\NoticeController;

use App\Http\Controllers\StatisticController;


use App\Models\JobDetail;

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
        'jobs' => JobDetail::latest()->take(5)->get()
    ]);
})->name('welcome');

Route::get('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])
    ->name('login');

Route::get('register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'create'])
    ->name('register');

Route::put('password', [\App\Http\Controllers\Auth\PasswordController::class, 'update'])->middleware(['auth'])->name('password.update');
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


//BIO and Address Controller
Route::group(['middleware' => 'auth', 'prefix' => 'applicant'], function () {
    Route::get('bio',[ApplicantController::class,'bio'])->name('applicant.bio');
    Route::post('bio/store',[ApplicantController::class,'store_bio'])->name('applicant.bio_store');
    Route::post('bio/{applicant}', [ApplicantController::class, 'update_bio'])->name('applicant.bio_update');

    Route::get('address',[ApplicantController::class,'address'])->name('applicant.address');
    Route::post('address/store',[ApplicantController::class,'store_address'])->name('applicant.address_store');
    Route::post('address/{address}', [ApplicantController::class, 'update_address'])->name('applicant.address_update');

    Route::post('bio_address', [ApplicantController::class, 'storeBioAndAddress'])->name('applicant.bio_address_store');

});


// JobDetail Controller
Route::group(['middleware' => 'auth', 'prefix' => 'job'], function () {
    Route::get('/index', [JobDetailsController::class, 'index'])->middleware('role:Admin')->name('job.index');
    Route::get('/create', [JobDetailsController::class, 'create'])->middleware('role:Admin')->name('job.create');
    Route::post('', [JobDetailsController::class, 'store'])->middleware('role:Admin')->name('job.store');
    Route::get('{model}/edit', [JobDetailsController::class, 'edit'])->middleware('role:Admin')->name('job.edit');
    Route::put('{model}', [JobDetailsController::class, 'update'])->middleware('role:Admin')->name('job.update');
    Route::delete('{model}', [JobDetailsController::class, 'destroy'])->middleware('role:Admin')->name('job.destroy');

});

// Citizen Application Controller
Route::group(['middleware' => 'auth', 'prefix' => 'applicant'], function () {
    // Citizen View application
    Route::get('{jobDetail}/show', [ApplicationController::class, 'show'])->name('application.show');
    // Citizen apply application
    Route::post('{jobDetail}/apply', [ApplicationController::class, 'apply'])->name('application.apply');
    // Citizen update application
    Route::post('{jobDetail}/update', [ApplicationController::class, 'updateMandatoryDocument'])->name('application.update');
    // Citizen Delete Draft
    Route::delete('{jobDetail}', [ApplicationController::class, 'deleteDraft'])->name('application.delete_draft');

    // Citizen Application Draft
    Route::get('/draft', [ApplicationController::class, 'draft'])->name('applications.draft');

    // Citizen Application submission Index
    Route::get('/submission', [ApplicationController::class, 'index'])->name('applications.index');

    // Citizen Application approved Index
    Route::get('/approved', [ApplicationController::class, 'approved'])->name('applications.index_approved');

    // Citizen Application Rejected Index
    Route::get('/rejected', [ApplicationController::class, 'rejected'])->name('applications.index_rejected');

    // Citizen View applications detail Submission
    Route::get('{jobDetail}/detail', [ApplicationController::class, 'viewApplication'])->name('application.viewApplication');
    // Citizen View applications detail Draft
    Route::get('draft/{jobDetail}/detail', [ApplicationController::class, 'viewApplicationDraft'])->name('application.viewApplicationDraft');

    // Citizen View Rejected Application
    Route::get('rejected/{jobDetail}/detail', [ApplicationController::class, 'viewRejectedApplication'])->name('application.viewDeletedApplication');

    // Citizen Re-Submit Application
    Route::post('{jobDetail}', [ApplicationController::class, 'reSubmitApplication'])->name('application.resubmit_application');


    // Admit Card List
   Route::get('admit-card', [ApplicationController::class, 'admitCard'])->name('applications.admitCard');
    //Citizen Download Admit Card
    Route::get('/admit-card/{jobDetail}', [ApplicationController::class, 'generateAdmitCardByJob'])->name('admit-card-job');

    //Citizen Print Application
    Route::get('/my-application/{jobDetail}', [ApplicationController::class, 'printApplication'])->name('my-application');

});
//
//Admin Application Controller
Route::middleware(['auth'])->group(function () {
    //Admin Show Applicant Detaiils
    Route::get('admin/{jobDetails}/applicant/{application}/show', [AdminApplicationController::class, 'showApplicantDetail'])->name('admin.application.show_applicant_detail');
    //Admin Job Application Index - Submission
    Route::get('/admin/applications/submission', [AdminApplicationController::class, 'adminIndexSubmission'])->middleware('role:Admin')->name('admin.applications.index_submission');
    //Admin Job Application Index - Approved
    Route::get('/admin/applications/approved', [AdminApplicationController::class, 'adminIndexApproved'])->middleware('role:Admin')->name('admin.applications.index_approved');
    //Admin Job Application Index - Eligible
    Route::get('/admin/applications/eligible', [AdminApplicationController::class, 'adminIndexEligible'])->middleware('role:Admin')->name('admin.applications.index_eligible');

    //Admin Job Application Index - Rejected
    Route::get('/admin/applications/rejected', [AdminApplicationController::class, 'adminIndexRejected'])->middleware('role:Admin')->name('admin.applications.index_rejected');

    //Admin Job Application Show submission
    Route::get('/admin/applications/{jobDetails}/submission', [AdminApplicationController::class, 'adminShowSubmitted'])->middleware('role:Admin')->name('admin.applications.show_submission');
    //Admin Job Application Show Approved
    Route::get('/admin/applications/{jobDetails}/approved', [AdminApplicationController::class, 'adminShowApproved'])->middleware('role:Admin')->name('admin.applications.show_approved');
    //Admin Job Application Show Eligible
    Route::get('/admin/applications/{jobDetails}/eligible', [AdminApplicationController::class, 'adminShowEligible'])->middleware('role:Admin')->name('admin.applications.show_eligible');

    //Admin Job Application Show Rejected
    Route::get('/admin/applications/{jobDetails}/rejected', [AdminApplicationController::class, 'adminShowRejected'])->middleware('role:Admin')->name('admin.applications.show_rejected');

    Route::put('/admin/applications/bulk-change-status', [AdminApplicationController::class, 'bulkChangeStatus'])
        ->middleware('role:Admin')
        ->name('admin.applications.bulkChangeStatus');

    Route::put('/admin/applications/reject-application', [AdminApplicationController::class, 'rejectApplication'])
        ->middleware('role:Admin')
        ->name('admin.applications.reject_application');


    Route::get('admin/admit_card', [AdminApplicationController::class,'admitCard'])
        ->middleware('role:Admin')
        ->name('admin.applications.admit_card');

    Route::get('admin/download_admit_card', [AdminApplicationController::class,'downloadAdmitCard'])
        ->middleware('role:Admin')
        ->name('admin.applications.download_admit_card');

});

//Admin Exam Controller
Route::middleware(['auth'])->group(function () {
    Route::get('/exams', [ExamController::class, 'index'])->middleware('role:Admin')->name('exams.index');
    Route::get('/jobs/{jobDetail}/show', [ExamController::class, 'show'])->middleware('role:Admin')->name('exams.show');
    Route::get('/jobs/{jobDetail}/exams/create', [ExamController::class, 'create'])->middleware('role:Admin')->name('exams.create');
    Route::post('/jobs/{jobDetail}/exams', [ExamController::class, 'store'])->middleware('role:Admin')->name('exams.store');
    Route::get('/exams/{exam}/edit', [ExamController::class, 'edit'])->middleware('role:Admin')->name('exams.edit');
    Route::put('/exams/{exam}', [ExamController::class, 'update'])->middleware('role:Admin')->name('exams.update');
    Route::delete('/exam/{exam}', [ExamController::class, 'destroy'])->middleware('role:Admin')->name('exam.destroy');

});

// Admin Assign marks and allot exam center
Route::middleware(['auth'])->group(function () {
    Route::get('/exam-marks', [ExamMarksController::class, 'index'])->middleware('role:Admin')->name('exams.marks.index');
    //Show exam marks page
    Route::get('/assign-marks/{jobDetail}/show', [ExamMarksController::class, 'show'])->middleware('role:Admin')->name('exams.marks.show');
    // Display form to assign marks to applicants (Creating new)
    Route::get('/exams/{exam}/assign-marks', [ExamMarksController::class, 'create'])->middleware('role:Admin')->name('exams.assignMarks');


    Route::get('/exams/assign-marks', [ExamMarksController::class, 'assignMarks'])->middleware('role:Admin')->name('exams.marks_assign');

    // Store the marks assigned to applicants (Old)
    Route::post('/exams/{exam}/assign-marks', [ExamMarksController::class, 'store'])->middleware('role:Admin')->name('exams.storeMarks');

    // Store the marks assigned to applicants (New)
    Route::post('/exams/store-marks', [ExamMarksController::class, 'storeExamMarks'])->middleware('role:Admin')->name('exams.storeExamMarks');
    //Admin show marks
    Route::get('/exam/{model}/marks', [ExamMarksController::class, 'showMarks'])->middleware('role:Admin')->name('job.showMarks');
    // Assign Exam Center
    Route::post('/exams/store-centers', [ExamCenterController::class, 'storeCenters'])->name('exams.allotCenters');
});

//Export Data
Route::middleware(['auth'])->group(function () {
    // Download Job Approved/Qualified List
    Route::get('/export-job-qualified/{job_detail_id}', [ExportController::class, 'exportJobDetails'])->name('export.job.details');
    // Download Job Eligible List
    Route::get('/export-job-eligible/{job_detail_id}', [ExportController::class, 'exportEligibleJobDetails'])->name('export.job.eligible.details');
    // Download Job Submitted List
    Route::get('/export-job-submitted/{job_detail_id}', [ExportController::class, 'exportSubmittedJobDetails'])->name('export.job.submitted.details');

    // Download Job Rejected List
    Route::get('/export-job-rejected/{job_detail_id}', [ExportController::class, 'exportRejectedJobDetails'])->name('export.job.rejected.details');
});


// Job Settings
Route::middleware(['auth'])->group(function () {
    Route::get('/settings', [JobSettingsController::class, 'index'])->middleware('role:Admin')->name('settings.index');
    Route::get('/settings/{jobDetail}', [JobSettingsController::class, 'settings'])->middleware('role:Admin')->name('settings.show');
    Route::post('/settings/store/{jobDetail}', [JobSettingsController::class, 'jobSettings'])->middleware('role:Admin')->name('settings.save');
});

// Exam Center
Route::middleware(['auth'])->group(function () {
    Route::get('/examCenter', [ExamCenterController::class, 'index'])->middleware('role:Admin')->name('exam_center.index');
    Route::get('/examCenter/create', [ExamCenterController::class, 'create_exam_center'])->middleware('role:Admin')->name('exam_center.create');
    Route::post('/examCenter/store', [ExamCenterController::class, 'store_exam_center'])->middleware('role:Admin')->name('exam_center.store');
    Route::get('/examCenter/{model}', [ExamCenterController::class, 'edit_exam_center'])->middleware('role:Admin')->name('exam_center.edit');
    Route::put('{model}', [ExamCenterController::class, 'update_exam_center'])->middleware('role:Admin')->name('exam_center.update');
    Route::delete('{model}', [ExamCenterController::class, 'destroy_exam_center'])->middleware('role:Admin')->name('exam_center.destroy');
});



// PAYTM
Route::group(['prefix' => 'paytm'], function () {
    Route::post('initiate', [PaytmController::class, 'initiate'])->name('initiate_payment');
    Route::post('response', [PaytmController::class, 'handlePaymentResponse']);
    Route::get('success/{orderId}', [PaytmController::class, 'success'])->name('payment-success');

});

//PAYMENTS
Route::group(['prefix' => 'transaction',], function () {
    Route::get('list', [TransactionController::class, 'index'])->name('transaction.index');
    Route::get('{order_id}/detail', [TransactionController::class, 'detail'])->name('transaction.detail');
    Route::get('{order_id}', [TransactionController::class, 'checkStatus'])->name('transaction.checkStatus');
    Route::get('{order_id}/sync', [TransactionController::class, 'syncTransaction'])->name('transaction.sync');
});


//User Controller
Route::group(['prefix' => 'user'], function () {
    Route::get('index', [UserController::class, 'index'])->name('user.index');
    Route::get('create', [UserController::class, 'create'])->name('user.create');
    Route::get('{model}', [UserController::class, 'edit'])->name('user.edit');
    Route::post('', [UserController::class, 'store'])->name('user.store');
    Route::put('{model}', [UserController::class, 'update'])->name('user.update');
    Route::delete('{model}', [UserController::class, 'destroy'])->name('user.destroy');
});


//Report Controller
Route::group(['prefix' => 'report'], function () {
    Route::get('application', [ReportController::class, 'submitted'])->name('report.submitted');
    Route::post('application/download', [ReportController::class, 'downloadApplicationReport'])->name('report.application.download');
    Route::get('written', [ReportController::class, 'writtenExam'])->name('report.writtenExam');
    Route::post('written/download', [ReportController::class, 'generateExamReport'])->name('report.written.download');
    Route::get('exam_center', [ReportController::class, 'examCenter'])->name('report.exam_center');
    Route::post('exam_center/download', [ReportController::class, 'generateExamCenterReport'])->name('report.exam_center.download');
});

// Notice Controller
Route::group(['middleware' => 'auth', 'prefix' => 'notice'], function () {
    Route::get('/index', [NoticeController::class, 'index'])->middleware('role:Admin')->name('notice.index');
    Route::get('/create', [NoticeController::class, 'create'])->middleware('role:Admin')->name('notice.create');
    Route::get('published', [NoticeController::class, 'published']);
    Route::post('', [NoticeController::class, 'store'])->middleware('role:Admin')->name('notice.store');
    Route::put('{notice}/publish', [NoticeController::class, 'publish'])->middleware('role:Admin');
    Route::put('{notice}/unpublish', [NoticeController::class, 'unpublish'])->middleware('role:Admin');
    Route::get('{model}', [NoticeController::class, 'edit'])->middleware('role:Admin')->name('notice.edit');
    Route::put('{model}', [NoticeController::class, 'update'])->middleware('role:Admin')->name('notice.update');
    Route::delete('{model}', [NoticeController::class, 'destroy'])->middleware('role:Admin')->name('notice.destroy');
});

//Statistics
Route::group(['prefix' => 'statistic'], function () {
    Route::get('district-wise', [StatisticController::class, 'districtWise'])->name('statistics.districtWise');
    Route::get('job-wise', [StatisticController::class, 'jobWise'])->name('statistics.jobWise');
    Route::get('district-job', [StatisticController::class, 'districtJobWise'])->name('statistics.districtJobWise');
});


// Privacy Page
Route::get('page/privacy', function () {
    return Inertia::render('Privacy',[
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('privacy');

// T&C Page
Route::get('page/terms', function () {
    return Inertia::render('Terms', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('terms');
// About us Page
Route::get('page/about', function () {
    return Inertia::render('About', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('about');

// About us Page
Route::get('page/maps', function () {
    return Inertia::render('Maps', [
    ]);
})->name('maps');

require __DIR__.'/auth.php';


