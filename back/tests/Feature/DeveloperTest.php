<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Developer;

class DeveloperTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_Developer_list()
    {
        Developer::factory(2)->create();
        
        $response = $this->get('api/developers');

        $response->assertStatus(200)
             ->assertJsonCount(2);
    }

   public function test_developer_can_be_shown_in_json()
    {
        $developer = Developer::factory()->create();

        $response = $this->getJson("/api/show/{$developer->id}");

        $response->assertOk()
            ->assertJson([
                'img'=> $developer->img,
                'name'=> $developer->name,
                'email'=> $developer->email,
                'genderIdentity'=> $developer->genderIdentity,
                'position'=> $developer->position,
                'stackDescription'=> $developer->stackDescription,
            ]);
    }
}
