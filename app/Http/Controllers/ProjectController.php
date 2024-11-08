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
    public function show(Project $project)
    {
        $project->load([
            'createdBy',
            'updatedBy',
            'tasks' => function ($query) {
                $query->with(['createdBy', 'updatedBy', 'assignedTo']);
            }
        ]);

        return inertia('Projects/Show', [
            'project' => $project,
            'tasks' => $project->tasks,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
