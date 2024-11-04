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
        User::factory()->create([
            'first_name' => 'Nick',
            'last_name' => 'Passaro',
            'email' => 'admin@example.test',
            'password' => bcrypt('1234567890'),
            'email_verified_at' => time(),
        ]);
        User::factory(199)->create();

        Project::factory(1000)->hasTasks(5)->create();
    }
}
