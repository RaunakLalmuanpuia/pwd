<?php

// app/Models/ExamMarks.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExamMarks extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_id',
        'subject_id',
        'marks',
        'remark',
        'passed'
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicants::class, 'applicant_id');
    }


    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }

    public function exam()
    {
        return $this->belongsTo(Exam::class);  // Assuming ExamMarks belong to Exam
    }
}
