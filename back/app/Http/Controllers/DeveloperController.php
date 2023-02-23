<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Developer;

class DeveloperController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function developers(Request $request)
    {
        $developers = Developer::all();

        return response()->json($developers);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $developer = Developer::find($id);

        return response()->json($developer);
    }
}
