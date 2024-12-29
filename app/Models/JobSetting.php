<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_details_id',
        'from_admit_card',
        'to_admit_card',

    ];

    public function jobDetails(): BelongsTo
    {
        return $this->belongsTo(JobDetail::class);
    }

}
