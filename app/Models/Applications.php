<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Applications extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_id',
        'job_details_id',
        'status',
        'submitted_at',
        'rejection_note',
        'roll_no',
        'exam_center_id',
        'mizo_proficiency'
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicants::class, 'applicant_id');
    }

    public function marks()
    {
        return $this->hasMany(ExamMarks::class);
    }

    public function examCenter()
    {
        return $this->belongsTo(ExamCenter::class, 'exam_center_id');
    }

    public function jobDetail() :BelongsTo
    {
        return $this->belongsTo(JobDetail::class, 'job_details_id');
    }

    public function applicationDocuments()
    {
        return $this->hasMany(ApplicationDocument::class, 'application_id');
    }

    public function transaction(): MorphOne
    {
        return $this->morphOne(Transaction::class, 'reference');
    }


}
