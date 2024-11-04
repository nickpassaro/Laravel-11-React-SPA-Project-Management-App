<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => fake()->realTextBetween(250, 1000),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['Pending', 'In Progress', 'Completed']),
            'priority' => fake()->randomElement(['Low', 'Medium', 'High', 'Urgent']),
            'image_path' => fake()->imageUrl(),
            'created_by' => fake()->numberBetween(1, 5),
            'assigned_to' => fake()->numberBetween(6, 50),
            'updated_by' => fake()->numberBetween(6, 50),
            'project_id' => fake()->numberBetween(1, 30),
        ];
    }
}
