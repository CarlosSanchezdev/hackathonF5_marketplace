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
             'img' => 'https://media.istockphoto.com/id/1307791650/es/foto/retrato-a-la-cabeza-del-sonriente-empresario-cauc%C3%A1sico-posa-en-el-lugar-de-trabajo.jpg?s=612x612&w=0&k=20&c=h7JT5UHiPf_S7JBLq6tG5os21j6tn_pxYSjzzuRXpjg=',
             'name' => 'Carlos Sanchez',
             'email' => 'carlos@developer.com',
             'genderIdentity' => 'He/Him',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React. Strong experience in Visual Design',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1399788030/es/foto/retrato-de-una-joven-india-confiada-que-posa-sobre-el-fondo.jpg?s=612x612&w=0&k=20&c=d7hpOc97-dPdajpWOn_uIe2YswXWwUN5JGpgr57xEm4=',
             'name' => 'Ana Delgado',
             'email' => 'ana@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Full Stack Developer',
             'stackDescription' => 'Junior Full Stack Developer with experience in HTML5, CSS3, JavaScript, React, PHP and symphony.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=',
             'name' => 'Alba Rus',
             'email' => 'alba@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Back Developer',
             'stackDescription' => 'Junior Back Developer with experience in HTML5, CSS3, JavaScript, PHP, Laravel and MySQL.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1398385367/es/foto/feliz-mujer-de-negocios-millennial-con-gafas-posando-con-las-manos-cruzadas.jpg?s=612x612&w=0&k=20&c=pgJoHs698wY3npJz7AyxosicITYgSDo0G6fxbT5Bwa0=',
             'name' => 'Ainhoa Cala',
             'email' => 'ainhoa@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1317804578/es/foto/una-empresaria-dispar%C3%B3-con-la-cabeza-sonriendo-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=CLbDPD1RNphC0QAseQfMRN10s66SNDLh1iOVkXjCBUM=',
             'name' => 'Georgette Velasco',
             'email' => 'georgette@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Front Developer',
             'stackDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1318482009/es/foto/joven-lista-para-el-trabajo-concepto-de-negocio.jpg?s=612x612&w=0&k=20&c=pAm4gKFeH1CTRAMgk16c-tae-eUwLL1JiJdIg5yXCWw=',
             'name' => 'Judit ',
             'email' => 'judit@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => ' Junior Full Stack Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL.',
             'projectDescription' => 'Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1351285381/es/foto/feliz-joven-afroamericana-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=a64TQRqdIjO0HMK9pozQNT_xzIynM6titZEsqRc4gfA=',
             'name' => 'Natalia Calvo',
             'email' => 'natalia@developer.com',
             'genderIdentity' => 'She/Her',
             'position' => 'Back End Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL, Node and MAriaDB.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);

         Developer::factory()->create([
             'img' => 'https://media.istockphoto.com/id/1303206644/es/foto/retrato-del-sonriente-hombre-cauc%C3%A1sico-posa-en-el-cargo.jpg?s=612x612&w=0&k=20&c=oocCuhValZtYvZg2b759_untx8JJkifYRo7tlSgUFow=',
             'name' => 'bryan',
             'email' => 'bryan@developer.com',
             'genderIdentity' => 'He/,Him',
             'position' => 'Back End Developer',
             'stackDescription' => 'Junior Back End Developer with experience in PHP, Laravel, MySQL and Node, and extensive experience in Docker.',
             'projectDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ullamcorper efficitur. Ut neque metus, euismod ut nisl eget, pulvinar pharetra ex. Fusce eget tempor turpis.',
        ]);
    }
}
