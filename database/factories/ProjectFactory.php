<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->realTextBetween(10, 50),
            'description' => fake()->realTextBetween(250, 1000),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['Pending', 'In Progress', 'Completed']),
            'created_by' => fake()->numberBetween(1, 20),
            'updated_by' => fake()->numberBetween(21, 200),
        ];
    }
}
