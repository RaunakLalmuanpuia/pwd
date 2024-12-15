<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departments extends Model
{
    use HasFactory;

    public function jobDetail()
    {
        return $this->hasMany(JobDetail::class, 'department_id');
    }


}
