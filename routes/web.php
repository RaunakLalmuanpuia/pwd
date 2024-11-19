<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\JobDetailsController;

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

//Dashboard Controller
Route::group(['middleware' => 'auth', 'prefix' => 'applicant'], function () {
    Route::get('bio',[ApplicantController::class,'bio'])->name('applicant.bio');
    Route::post('',[ApplicantController::class,'store_bio'])->name('applicant.bio_store');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function () {

    Route::group(['middleware' => 'auth', 'prefix' => 'job'], function () {
        Route::get('/index', [JobDetailsController::class, 'index'])->name('job.index');
        Route::get('/create', [JobDetailsController::class, 'create'])->name('job.create');
        Route::post('', [JobDetailsController::class, 'store'])->name('job.store');
        Route::get('{model}', [JobDetailsController::class, 'edit'])->name('job.edit');
    });
});

require __DIR__.'/auth.php';


