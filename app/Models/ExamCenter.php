<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamCenter extends Model
{
    use HasFactory;

    protected $fillable = [
        'center_name',
        'location',
        'capacity',
    ];

    public function applications()
    {
        return $this->hasMany(Applications::class, 'exam_center_id');
    }
}
