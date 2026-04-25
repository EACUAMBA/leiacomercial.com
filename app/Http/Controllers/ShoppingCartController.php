<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Routing\Controller;
use function PHPUnit\Framework\isNull;

class ShoppingCartController extends Controller
{
    public function create()
    {
        return view('shopping-cart');
    }
}
