<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::query()->upsert([
            ['id'=>1,'name'=>'admin','email'=>'admin@mail.com','password'=>Hash::make('password'), 'phone'=>'00001'],
            ['id'=>2,'name'=>'citizen','email'=>'citizen@mail.com','password'=>Hash::make('password'), 'phone'=>'00002'],
        ], ['id']);

        $admin=User::query()->find(1);
        $admin->assignRole('Admin');

        $citizen=User::query()->find(2);
        $citizen->assignRole('Applicant');

    }
}
