<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class RoomsController extends Controller
{
    public function index()
    {
        $rooms = Room::all();

        return response()->json([
            'message' => 'All rooms retrieved successfully',
            'rooms' => $rooms
        ], 200);
    }
}
