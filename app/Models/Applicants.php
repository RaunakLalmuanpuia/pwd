<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Applicants extends Model
{
    use HasFactory;

    // Fillable fields for mass assignment
    protected $fillable = [
        'user_id',
        'name',
        'phone',
        'email',
        'parents_name',
        'sex',
        'date_of_birth',
        'community',
        'religion',
        'marital_status',
        'nationality',
        'qualification',
        'graduateDegree',
        'graduateStream',
        'postGraduateDegree',
        'postGraduateStream',
        'doctorateDegree',
        'doctorateStream',
        'mizo_proficiency',
        'disability',
        'disability_type',
        'experience',
        'current_department',
        'community_attachment',
        'disability_attachment',
        'passport_photo',
        'signature_photo',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function examMarks()
    {
        return $this->hasMany(ExamMarks::class, 'applicant_id'); // Assuming 'applicant_id' is the foreign key in the ExamMarks table
    }

    public function applications()
    {
        return $this->hasMany(Applications::class, 'applicant_id');
    }


    public function examCenter()
    {
        return $this->belongsTo(ExamCenter::class);
    }

//    public function exams()
//    {
//        return $this->hasManyThrough(
//            Exam::class,
//            Applications::class,
//            'applicant_id',      // Foreign key on Applications table
//            'job_details_id',    // Foreign key on Exams table
//            'id',                // Local key on Applicants table
//            'job_details_id'     // Local key on Applications table
//        );
//    }
    public function exams()
    {
        return $this->hasManyThrough(
            Exam::class,
            Applications::class,
            'applicant_id',      // Foreign key on Applications table
            'job_details_id',    // Foreign key on Exams table
            'id',                // Local key on Applicants table
            'job_details_id'     // Local key on Applications table
        )->where('exams.job_details_id', '=', request()->route('jobDetails')->id); // Explicitly specify the table
    }

}
