<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Developer>
 */
class DeveloperFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'img' => $this->faker->imageUrl(),
        'name' => $this->faker->name(),
        'genderIdentity' => $this->faker->name(),
        'position' => $this->faker->name(),
        'stackDescription' => $this->faker->text(),
        ];
    }
}
