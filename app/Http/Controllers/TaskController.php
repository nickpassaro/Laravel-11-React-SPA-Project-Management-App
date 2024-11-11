<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Task::with(['createdBy', 'assignedTo', 'updatedBy', 'project']);

        if ($searchBox = request('searchBox')) {
            $query->where('description', 'like', '%' . $searchBox . '%'); // description is referring to the db column "description" in the projects table
        }

        if ($status = request('status')) {
            $query->where('status', 'like', '%' . $status . '%');
        }

        if ($priority = request('priority')) {
            $query->where('priority', 'like', '%' . $priority . '%');
        }

        $sortField = request('sortField', "id");

        $sortDirection = request('sortDirection', "desc");

        $tasks = $query->orderBy($sortField, $sortDirection)->simplePaginate(100);

        return inertia('Tasks/Index', [
            'tasks' => $tasks,
            'nextPage' => $tasks->nextPageUrl(),
            'previousPage' => $tasks->previousPageUrl(),
            'queryParams' => request()->query(),
            'sortField' => $sortField,
            'sortDirection' => $sortDirection,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Task $task)
    {
        Task::create([
            'description' => request('description', 'No description'),
            'due_date' => request('due_date', now()->addWeek()),
            'status' => 'Pending',
            'priority' => 'Low',
            'created_by' => auth()->id(),
            'updated_by' => auth()->id(),
            'project_id' => request('project_id'),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $request = request()->validate([
            'description' => 'nullable',
            'due_date' => 'nullable',
            'status' => 'nullable',
            'priority' => 'nullable',
        ]);

        $task->update([
            'description' => $request['description'],
            'due_date' => $request['due_date'],
            'status' => $request['status'],
            'priority' => $request['priority'],
            'updated_by' => auth()->id(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
    }
}
