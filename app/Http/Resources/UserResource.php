<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // stuff from users table
            'id' => $this->id, // not showing this anywhere but may need it
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email, // only showing in the single user view
            'created_at' => $this->created_at, // not showing this anywhere but may need it
        ];
    }
}
