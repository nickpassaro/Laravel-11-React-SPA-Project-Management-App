<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // stuff from tasks table
            'id' => $this->id,
            'description' => $this->description,
            'due_date' => $this->due_date,
            'status' => $this->status,
            'priority' => $this->priority,
            'image_path' => $this->image_path, // these will only be shown in the single task view
            'createdBy' => new UserResource($this->createdBy), // this column points to a user in the users table
            'assignedTo' => new UserResource($this->assignedTo), // this column points to a user in the users table
            'updatedBy' => new UserResource($this->updatedBy), // this column points to a user in the users table
            'projectid' => new ProjectResource($this->projectid), // this column points to a user in the projects table
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
