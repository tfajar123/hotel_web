<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;

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
    return inertia('Index');
});


Route::get('/booking', [HotelController::class, 'showAll'])->name('bookings.showAll');
Route::get('/booking/{id}', [HotelController::class, 'show'])->name('bookings.show');
Route::post('/booking', [HotelController::class, 'store'])->name('bookings.store');
Route::put('/booking/{id}', [HotelController::class, 'update'])->name('bookings.update');
Route::delete('/booking/{id}', [HotelController::class, 'delete'])->name('bookings.delete');
