<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;
use App\Models\Room;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    $rooms = Room::latest()->take(3)->get();

    return inertia('Index', ['rooms' => $rooms]);
});
Route::get('/about', function(){

    return inertia('About');
});
Route::get('/services', function(){

    return inertia('Services');
});

Route::get('/rooms', function(){
    $rooms = Room::latest()->take(3)->get();
    return inertia('Rooms', ['rooms' => $rooms]);
});

Route::get('/contact', function(){
    return inertia('Contact');
});


Route::get('/booking', [HotelController::class, 'showAll'])->name('bookings.showAll');
Route::get('/booking/{id}', [HotelController::class, 'show'])->name('bookings.show');
Route::post('/booking', [HotelController::class, 'store'])->name('bookings.store');
Route::get('/booking/{id}/edit', [HotelController::class, 'edit'])->name('bookings.edit');
Route::put('/booking/{id}', [HotelController::class, 'update'])->name('bookings.update');
Route::delete('/booking/{id}', [HotelController::class, 'delete'])->name('bookings.delete');
