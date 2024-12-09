<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
class Transaction extends Model
{
    use HasFactory;
    protected $fillable = ['order_id','transaction_id','type','voucher_date','amount','status','reference_id','reference_type'];
    protected $appends = ['customer_name'];

    public function reference(): MorphTo
    {
        return $this->morphTo('reference');
    }
}
