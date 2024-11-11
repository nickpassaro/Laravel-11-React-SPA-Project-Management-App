<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::with(['createdBy', 'updatedBy', 'tasks']);

        if ($searchBox = request('searchBox')) {
            $query->where('name', 'like', '%' . $searchBox . '%'); // name is referring to the db column "name" in the projects table
        }

        if ($status = request('status')) {
            $query->where('status', 'like', '%' . $status . '%');
        }

        $sortField = request('sortField', "id");

        $sortDirection = request('sortDirection', "desc");

        $projects = $query->orderBy($sortField, $sortDirection)->simplePaginate(100);

        return inertia('Projects/Index', [
            'projects' => $projects,
            'nextPage' => $projects->nextPageUrl(),
            'previousPage' => $projects->previousPageUrl(),
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
        return inertia('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Project $project)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'status' => 'required|string',
        ]);

        $createdProject = $project::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'due_date' => $validatedData['due_date'],
            'status' => $validatedData['status'],
            'created_by' => auth()->id(),
            'updated_by' => auth()->id(),
        ]);

        return redirect()->route('projects.show', $createdProject);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $project->load([
            'createdBy',
            'updatedBy',
            'tasks' => function ($query) {
                $query->with(['createdBy', 'updatedBy']);
            }
        ]);

        return inertia('Projects/Show', [
            'project' => $project,
            'tasks' => $project->tasks()->with(['createdBy', 'updatedBy'])->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'status' => 'required|string',
        ]);

        $project->update([
            'name' => $request['name'],
            'description' => $request['description'],
            'due_date' => $request['due_date'],
            'status' => $request['status'],
            'updated_by' => auth()->id(),
        ]);

        $project->load([
            'createdBy',
            'updatedBy',
            'tasks' => function ($query) {
                $query->with(['createdBy', 'updatedBy']);
            }
        ]);

        return inertia('Projects/Show', [
            'project' => $project,
            'tasks' => $project->tasks,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        // Delete related tasks first to avoid foreign key constraint violation
        $project->tasks()->delete();
        $project->delete();
        return redirect()->route('projects.index');
    }
}
