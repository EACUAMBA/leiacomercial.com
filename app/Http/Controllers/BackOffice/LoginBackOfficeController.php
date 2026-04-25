<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LoginBackOfficeController extends Controller
{
    public function create()
    {
        return Inertia::render('login');
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string'
        ]);


        $attempt = Auth::attempt($validate);

        if ($attempt) {
            return redirect()->intended(route('backoffice'));
        }

        return Redirect::back()->withErrors(['email' => 'Credenciais incorrectas']);
    }
}
