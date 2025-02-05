<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;

    protected $casts = [
        'published_at' => 'datetime:Y-m-d h:i:s',
    ];
    protected $fillable = ['title','published', 'published_at', 'content','attachment'];

}
