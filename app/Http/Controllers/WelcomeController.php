<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query()->where('visible', '=', true);

        if ($request->has('q')) {
            $searchTerm = '%' . $request->string('q') . '%';

            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', $searchTerm)
                    ->orWhere('description', 'like', $searchTerm)
                    ->orWhere('price', 'like', $searchTerm);
            });
        }

        $products = $query->with('coverFile')->get();

        return view('welcome', ['products' => $products, 'q' => $request->string('q')]);
    }
}
