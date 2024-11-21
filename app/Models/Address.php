<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{


    use HasFactory;

    protected $fillable = [
        'user_id',
        'permanent_house_no',
        'permanent_street',
        'permanent_locality',
        'permanent_landmark' ,
        'permanent_city' ,
        'permanent_district' ,
        'permanent_state' ,
        'permanent_pin_code',
        'communication_house_no' ,
        'communication_street' ,
        'communication_locality' ,
        'communication_landmark' ,
        'communication_city' ,
        'communication_district',
        'communication_state',
        'communication_pin_code' ,
        'country' ,
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
