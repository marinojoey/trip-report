<?php

namespace Database\Factories;

use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Report>
 */
class ReportFactory extends Factory
{   
    protected $model = \App\Models\Report::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return User::factory()->create()->id;
            },
            'title' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'date' => $this->faker->dateTime,
            'location' => $this->faker->address,
            'image' => $this->faker->imageUrl(640, 480, 'nature', true),
        ];
    }
}
