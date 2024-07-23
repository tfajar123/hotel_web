<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rooms')->insert([
            [
                'room_number' => '101',
                'room_type' => 'Single',
                'price' => 100.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV',
                'description' => 'A cozy single room with a comfortable bed and modern amenities.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'room_number' => '102',
                'room_type' => 'Double',
                'price' => 150.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV, Mini Bar',
                'description' => 'A spacious double room with two beds and additional facilities.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'room_number' => '103',
                'room_type' => 'Suite',
                'price' => 300.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV, Mini Bar, Kitchenette',
                'description' => 'A luxurious suite with separate living area and premium facilities.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'room_number' => '104',
                'room_type' => 'Single',
                'price' => 110.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV, Coffee Maker',
                'description' => 'A modern single room with additional facilities and a comfortable setting.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'room_number' => '105',
                'room_type' => 'Double',
                'price' => 160.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV, Mini Bar, Safe',
                'description' => 'A well-appointed double room with modern amenities and extra security.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'room_number' => '106',
                'room_type' => 'Suite',
                'price' => 320.00,
                'facilities' => 'Wi-Fi, Air Conditioning, TV, Mini Bar, Kitchenette, Jacuzzi',
                'description' => 'An exquisite suite with luxurious amenities including a private Jacuzzi.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
