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
    public function store(Request $request)
    {
        //
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
        $task->update($request->validate([
            'due_date' => 'nullable',
            'status' => 'nullable',
            'priority' => 'nullable',
            'updated_by' => 'required',
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
