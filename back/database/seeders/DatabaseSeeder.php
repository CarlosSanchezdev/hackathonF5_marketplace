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
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Ana Delgado',
             'email' => 'ana@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Full Stack Developer',
             'stackDescription' => 'Junior Full Stack Developer with experience in HTML5, CSS3, JavaScript, React, PHP and symphony.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Alba Rus',
             'email' => 'alba@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Back Developer',
             'stackDescription' => 'Junior Back Developer with experience in HTML5, CSS3, JavaScript, PHP, Laravel and MySQL.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Ainhoa Cala',
             'email' => 'ainhoa@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);
    }
}
