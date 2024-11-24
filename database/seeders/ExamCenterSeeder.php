<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamCenterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Insert sample exam centers
        DB::table('exam_centers')->insert([
            [
                'center_name' => 'Center A',
                'location' => '123 Main Street, City A',
                'capacity' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'center_name' => 'Center B',
                'location' => '456 Park Avenue, City B',
                'capacity' => 150,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'center_name' => 'Center C',
                'location' => '789 Broadway, City C',
                'capacity' => 200,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
