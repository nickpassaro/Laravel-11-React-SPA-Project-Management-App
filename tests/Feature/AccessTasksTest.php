<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AccessTasksTest extends TestCase
{
    use RefreshDatabase;

    public function test_logged_in_user_can_access_home()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/');
        $response->assertStatus(302);
    }
}
