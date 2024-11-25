<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departments extends Model
{
    use HasFactory;
    public function jobDetails()
    {
        return $this->hasMany(JobDetail::class);
    }
}
