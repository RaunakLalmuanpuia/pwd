<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationDocument extends Model
{
    use HasFactory;

    public function application()
    {
        return $this->belongsTo(Applications::class);
    }

    public function jobDocument()
    {
        return $this->belongsTo(Documents::class);
    }
}
