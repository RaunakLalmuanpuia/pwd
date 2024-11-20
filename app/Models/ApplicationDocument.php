<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_id',
        'document_id',
        'document_path',
        'is_verified',
    ];

    public function application()
    {
        return $this->belongsTo(Applications::class);
    }

    public function jobDocument()
    {
        return $this->belongsTo(Documents::class);
    }
}
