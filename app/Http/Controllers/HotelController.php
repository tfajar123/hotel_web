<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Room;
use Carbon\Carbon;
use Inertia\Inertia;

class HotelController extends Controller
{
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'room_id' => 'required|exists:rooms,id',
            'check_in' => 'required|date',
            'check_out' => 'required|date|after:check_in',
            'name' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required|string',
        ]);

        // Ambil data kamar dari database
        $room = Room::findOrFail($request->room_id);

        // Hitung jumlah malam
        $check_in = Carbon::parse($request->check_in);
        $check_out = Carbon::parse($request->check_out);
        $totalNights = $check_out->diffInDays($check_in);

        // Hitung total harga
        $totalPrice = $totalNights * $room->price;

        // Simpan data pemesanan ke dalam database
        $booking = new Booking([
            'room_id' => $room->id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'total_nights' => $totalNights,
            'total_price' => $totalPrice,
            'payment_status' => false, // default status
        ]);

        $booking->save();

        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => $booking
        ], 201);
    }

    public function showAll()
    {
        $bookings = Booking::with('room')->get();
        return Inertia::render('Booking/BookingIndex', [
            'bookings' => $bookings
        ]);
    }

    public function show($id)
    {
        $booking = Booking::with('room')->findOrFail($id);
        return response()->json($booking);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'room_id' => 'required|exists:rooms,id',
            'check_in' => 'required|date',
            'check_out' => 'required|date|after:check_in',
            'name' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required|string',
        ]);

        // Ambil data kamar dari database
        $room = Room::findOrFail($request->room_id);

        // Hitung jumlah malam
        $check_in = Carbon::parse($request->check_in);
        $check_out = Carbon::parse($request->check_out);
        $totalNights = $check_out->diffInDays($check_in);

        // Hitung total harga
        $totalPrice = $totalNights * $room->price;

        // Simpan data pemesanan ke dalam database
        $booking = Booking::findOrFail($id);
        $booking->update([
            'room_id' => $room->id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'total_nights' => $totalNights,
            'total_price' => $totalPrice,
            'payment_status' => $request->payment_status ?? $booking->payment_status,
        ]);

        return response()->json([
            'message' => 'Reservation successfully updated',
            'booking' => $booking], 200);
    }

    public function delete($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();

        return redirect()->route('hotel.reservation');
    }
}
