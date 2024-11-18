<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_name',
        'department_id',
        'no_of_post',
        'salary',
        'age_limit',
        'qualification',
        'application_deadline',
        'application_fee',
    ];

    public function department()
    {
        return $this->belongsTo(Departments::class);
    }

    public function applications()
    {
        return $this->hasMany(Applications::class);
    }

//    public function documents()
//    {
//        return $this->hasMany(Documents::class);
//    }
    public function documents(): HasMany
    {
        return $this->hasMany(Documents::class);
    }

}
