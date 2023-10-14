<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Report;
use Faker\Generator as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = app(Faker::class);

        $hazel = User::create([
            'name' => 'Hazel Findlay',
            'email' => 'Hfindlay@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        Report::create([
            'user_id' => $hazel->id,
            'title' => 'Hazels Runout',
            'body' => 'Started the day with some coffee at Pangea, then went to the crag and climbed a runout 5.13.
                I have been training hard and it paid off. I am so happy to be climbing again! Getting out of the
                gym is a good feeling. The climb starts with a v3 slab boulder problem, then goes into a 5.12+ crack.
                You meet the crux near the top. After 12 feet of runout, you make a dyno to a crimp.',
            'date' => $faker->dateTime,
            'location' => $faker->address,
            'image' => $faker->imageUrl(640, 480, 'nature', true),
        ]);

        $joe = User::create([
            'name' => 'Joe Kinder',
            'email' => 'treeCutter@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        Report::create([
            'user_id' => $joe->id,
            'title' => 'Joes 5.15b',
            'body' => 'What a great weekend in Rifle. Stoked to have established another 5.15 in this canyon! If you
                are thinking about climbing this route, be warned that there is a significant amount of bird activity
                near the top. Onsighting will be difficult due to the fact that you will likely encounter guano. Overall
                this is not my favorite climb ever, but it probably deserves a star. I believe Adam said he is visiting
                next month and is going to try it. I wish him luck!',
            'date' => $faker->dateTime,
            'location' => $faker->address,
            'image' => $faker->imageUrl(640, 480, 'nature', true),
        ]);

        $alex = User::create([
            'name' => 'Alex Puccio',
            'email' => 'thepooch@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        Report::create([
            'user_id' => $alex->id,
            'title' => 'Epic day in the Rocklans!',
            'body' => 'South Africa delivered in a big way! Maybe the grading is soft, but this has been my best
                climbing trip ever. Thirteen boulders over v12 in 2 weeks. Great to spend so much time with Margo
                as well. We will definitely be breaking out the chess board again next time we see each other.',
            'date' => $faker->dateTime,
            'location' => $faker->address,
            'image' => $faker->imageUrl(640, 480, 'nature', true),
        ]);

        $chris = User::create([
            'name' => 'Chris Sharma',
            'email' => 'sharmachris@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        Report::create([
            'user_id' => $chris->id,
            'title' => 'Deep Water Soloing',
            'body' => 'This was such a chill day. Climbing to me is all about purity, and this was as pure as it gets.
                The feeling of flow and freedom that is provided by DWS is incredible. I enjoyed the day with Gilbert
                Godfried, too. Man he is a funny weirdo.',
            'date' => $faker->dateTime,
            'location' => $faker->address,
            'image' => $faker->imageUrl(640, 480, 'nature', true),
        ]);
    }
}
