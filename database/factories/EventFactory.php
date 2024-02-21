<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->text(30),
            'start_date' => '2024-03-31',
            'registration_until' => '2024-03-28',
            'description' => fake()->text(),
            'eventtype_id' => rand(1,4),
            'location_id' => rand(1,5)
        ];
    }
}
