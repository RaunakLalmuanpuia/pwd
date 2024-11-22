<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Applications extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_id',
        'job_details_id',
        'status',

    ];

    public function applicant()
    {
        return $this->belongsTo(Applicants::class, 'applicant_id');
    }

    public function jobDetils() :BelongsTo
    {
        return $this->belongsTo(JobDetail::class, 'job_details_id');
    }

    public function applicationDocuments()
    {
        return $this->hasMany(ApplicationDocument::class, 'application_id');
    }


}
