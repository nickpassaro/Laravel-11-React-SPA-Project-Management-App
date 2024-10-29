<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'first_name' => 'Nick',
            'last_name' => 'Passaro',
            'email' => 'admin@example.com',
            'password' => bcrypt('1234567890'),
            'email_verified_at' => time(),
        ]);

        Project::factory(30)->hasTasks(6)->create();
    }
}
