<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Report;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): array
    {
        // NOT CURRENTLY USED

        // $users = User::all();
        // foreach ($users as $user) {
        //     return [
        //         Reports::create([
        //             'user_id' => $user->id,
        //             'title' => 'Big Wall',
        //             'body' => 'I climbed a big wall today',
        //             'date' => $this->faker->dateTime,
        //             'location' => $this->faker->coordinates,
        //         ]),
        //     ];
        // }
    }
}
