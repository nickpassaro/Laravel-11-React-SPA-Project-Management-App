<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // stuff from projects table
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description, // these will only be shown in the single project view
            'due_date' => $this->due_date,
            'status' => $this->status,
            'createdBy' => new UserResource($this->createdBy), // this column points to a user in the users table
            'updatedBy' => new UserResource($this->updatedBy), // this column points to a user in the users table
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            // stuff from other tables
            'tasks' => new TaskResource($this->tasks),
        ];
    }
}
