<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobDetail extends Model
{
    use HasFactory;

    public function department()
    {
        return $this->belongsTo(Departments::class);
    }

    public function applications()
    {
        return $this->hasMany(Applications::class);
    }

    public function documents()
    {
        return $this->hasMany(Documents::class);
    }

}
