<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use function PHPUnit\Framework\isNull;

class LoginController extends Controller
{
    public function create()
    {
        return view('login');
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string'
        ]);


        $attempt = Auth::attempt($validate);

        if ($attempt) {
            return redirect()->intended(route('welcome'));
        }

        return Redirect::back()->withErrors(['email' => 'Credenciais incorrectas']);
    }
}
