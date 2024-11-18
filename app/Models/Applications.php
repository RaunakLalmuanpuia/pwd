<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applications extends Model
{
    use HasFactory;

    public function applicant()
    {
        return $this->belongsTo(Applicants::class, 'applicant_id');
    }

    public function jobDetils()
    {
        return $this->belongsTo(JobDetail::class);
    }

    public function applicationDocuments()
    {
        return $this->hasMany(ApplicationDocument::class);
    }


}
