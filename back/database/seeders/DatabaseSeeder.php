<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Developer;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // \App\Models\Developer::factory()->create();

        Developer::factory()->create([
             'img' => '',
             'name' => 'Carlos Sanchez',
             'email' => 'carlos@developer.com',
             'genderIdentity' => 'He/Him',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript amd React.',
        ]);
    }
}
