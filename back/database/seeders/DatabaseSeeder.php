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
       
        // \App\Models\Developer::factory()->create();

        Developer::factory()->create([
             'img' => '',
             'name' => 'Carlos Sanchez',
             'email' => 'carlos@developer.com',
             'genderIdentity' => 'He/Him',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React. Strong experience in Visual Design',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Ana Delgado',
             'email' => 'ana@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Full Stack Developer',
             'stackDescription' => 'Junior Full Stack Developer with experience in HTML5, CSS3, JavaScript, React, PHP and symphony.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Alba Rus',
             'email' => 'alba@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Back Developer',
             'stackDescription' => 'Junior Back Developer with experience in HTML5, CSS3, JavaScript, PHP, Laravel and MySQL.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Ainhoa Cala',
             'email' => 'ainhoa@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Georgette Velasco',
             'email' => 'georgette@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Judit ',
             'email' => 'judit@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => ' Junior Full Stack Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'Natalia Calvo',
             'email' => 'natalia@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Back End Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL, Node and MAriaDB.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => '',
             'name' => 'bryan',
             'email' => 'bryan@developer.com',
             'genderIdentity' => 'He/,Him',
             'position' => 'Back End Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL and Node, and extensive experience in Docker.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);
    }
}
