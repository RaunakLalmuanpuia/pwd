<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicants extends Model
{
    use HasFactory;

    // Fillable fields for mass assignment
    protected $fillable = [
        'user_id',
        'name',
        'phone',
        'email',
        'parents_name',
        'sex',
        'date_of_birth',
        'community',
        'religion',
        'marital_status',
        'nationality',
        'qualification',
        'graduateDegree',
        'graduateStream',
        'postGraduateDegree',
        'postGraduateStream',
        'doctorateDegree',
        'doctorateStream',
        'mizo_proficiency',
        'disability',
        'disability_type',
        'community_attachment',
        'passport_photo',
        'signature_photo',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
