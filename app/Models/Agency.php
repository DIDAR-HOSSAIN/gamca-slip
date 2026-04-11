<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    use HasFactory;

    protected $fillable = [
        'agency_id',
        'agency_name',
        'proprietor_name',
        'address',
        'user_name',
    ];
}
