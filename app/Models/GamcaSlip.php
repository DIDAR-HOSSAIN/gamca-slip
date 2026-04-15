<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GamcaSlip extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'city',
        'travel_country',
        'first_name',
        'last_name',
        'dob',
        'nationality',
        'gender',
        'marital_status',
        'passport_number',
        'passport_issue_date',
        'passport_issue_place',
        'passport_expiry_date',
        'visa_type',
        'email',
        'phone',
        'nid',
        'position_applied',
        'passport_image',
        'payment_id',
        'trx_id',
        'amount',
        'payment_status'
    ];
}