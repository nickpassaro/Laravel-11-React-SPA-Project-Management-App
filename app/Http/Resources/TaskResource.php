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
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'due_date' => $this->due_date,
            'status' => $this->status,
            'priority' => $this->priority,
            'image_path' => $this->image_path,
            'createdBy' => new UserResource($this->createdBy),
            'assignedTo' => new UserResource($this->assignedTo),
            'updatedBy' => new UserResource($this->updatedBy),
            'projectid' => new ProjectResource($this->projectid),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
