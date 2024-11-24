<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_details_id',
        'exam_name',
        'exam_date',
    ];

    public function jobDetail(): BelongsTo
    {
        return $this->belongsTo(JobDetail::class, 'job_details_id');
    }

    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function applicantExams(): HasMany
    {
        return $this->hasMany(ApplicantExam::class);
    }
}
