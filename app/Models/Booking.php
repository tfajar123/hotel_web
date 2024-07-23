<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'name',
        'email',
        'phone_number',
        'total_nights',
        'total_price',
        'check_in',
        'check_out',
        'payment_status',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}

