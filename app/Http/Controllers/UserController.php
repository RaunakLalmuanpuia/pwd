<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    //
    public function index(){
        $users = User::where('id', '!=', auth()->id())->with('roles')->get();
        return Inertia::render('User/Index',[
            'users' => $users
        ]);
    }

    public function create(){
        $roles = Role::all();
        return Inertia::render('User/Create',[
            'roles' => $roles
        ]);
    }

    public function store(Request $request){
        $validatedData = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users',
            'phone' => 'required|digits:10|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);
        $roleIds = array_column($request->input('roles'), 'id');
        $data = User::query()->create($validatedData);
        $data->roles()->sync($roleIds);

        return redirect()->route('user.index')->with('success', 'User created successfully.');

    }

    public function edit(Request $request, User $model)
    {
        $data = $model->load(relations: ['roles']);
        $roles = Role::all();

        return Inertia::render('User/Edit', [
            'data' => $data,
            'roles' => $roles
        ]);
    }

    public function update(Request $request, User $model)
    {
//        dd($request);
        $this->validate($request, [
            'name' => 'required',
            'email' => [Rule::unique('users', 'email')->ignore($model)],
            'mobile' => ['digits:10', Rule::unique('users', 'mobile')->ignore($model)],
            'password' => 'required|min:6|confirmed'
        ]);
        $model->update($request->only($model->getFillable()));
        // Determine the format of the roles and extract role IDs
        $rolesInput = $request->get('roles', []);
        $roleIds = collect($rolesInput)->map(function ($role) {
            if (is_array($role) && isset($role['id'])) {
                // Role is an array with an 'id'
                return $role['id'];
            } elseif (is_string($role)) {
                // Role is a string (assumes role name)
                // Fetch the role ID from the database
                $roleModel = Role::where('name', $role)->first();
                return $roleModel ? $roleModel->id : null;
            }
            return null;
        })->filter(); // Remove null values

        // Sync the roles with the user
        $model->roles()->sync($roleIds);
        return redirect()->route('user.index')->with('success', 'User Updated successfully.');
    }

    public function destroy(Request $request, User $model)
    {
        $model->delete();
        return redirect()->route('user.index')->with('success', 'User deleted successfully.');
    }
}
