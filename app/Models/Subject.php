<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'subject_name',
        'exam_date',
        'exam_time',
        'start_time',
        'end_time',
    ];

    public function exam(): BelongsTo
    {
        return $this->belongsTo(Exam::class, 'exam_id');
    }

    public function examMarks(): HasMany
    {
        return $this->hasMany(ExamMarks::class, 'subject_id');
    }

}
