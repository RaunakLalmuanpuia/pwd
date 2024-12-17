<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Documents extends Model
{
    use HasFactory;
    protected $fillable = [
        'job_detail_id',     // Foreign key for job_details table
        'document_name',      // Name of the document
        'document_description', // Description of the document
        'is_mandatory',       // Boolean for mandatory status
    ];

//    public function jobPosting()
//    {
//        return $this->belongsTo(JobDetail::class, 'job_details_id');
//    }

    public function jobPosting(): BelongsTo
    {
        return $this->belongsTo(JobDetail::class, 'job_detail_id');
    }

//    public function documentAttachments(): HasMany
//    {
//        return $this->hasMany(ApplicationDocument::class, 'document_id');
//    }
    public function documentAttachments(): HasOne
    {
        return $this->hasOne(ApplicationDocument::class, 'document_id', 'id'); // Explicitly define keys
    }
}
