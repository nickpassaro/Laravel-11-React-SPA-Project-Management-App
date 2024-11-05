<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::with(['projects', 'tasks', 'assignedTasks']);

        if ($searchBox = request('searchBox')) {
            $query
                ->where('first_name', 'like', '%' . $searchBox . '%') // first_name is referring to the db column "first_name" in the projects table
                ->orwhere('last_name', 'like', '%' . $searchBox . '%'); // last_name is referring to the db column "last_name" in the projects table
        }

        $users = $query->simplePaginate(20);

        return inertia('Users/Index', [
            'users' => $users,
            'nextPage' => $users->nextPageUrl(),
            'previousPage' => $users->previousPageUrl(),
            'queryParams' => request()->query(),
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
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
