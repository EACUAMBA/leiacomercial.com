<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Routing\Controller;
use function PHPUnit\Framework\isNull;

class ProductController extends Controller
{
    public function show(Request $request, string $slug)
    {
        $product = Product::query()
            ->where('slug', $slug)
            ->where('visible', '=', true)
            ->first();

        if ($product) {
            return view('product', ['product' => $product]);

        } else {
            return view('product-not-found', ['slug' => $slug]);
        }
    }
}
