<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(){


        return Movie::all();
    }

    public function show($id){


        return Movie::find($id);
    }

    
    public function store(Request $request){

        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    public function update(Request $request, $id){

        $movie = Movie::findOrFail($id);
        $movie->update($request->all());

        return response()->json($movie,200);
    }

    public function delete($id){

        $movie = Movie::findOrFail($id);
        $movie->delete();

        return response(null,204);
    }
}
