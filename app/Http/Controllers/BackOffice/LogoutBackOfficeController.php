<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LogoutBackOfficeController extends Controller
{
    public function create()
    {
        Auth::logout();
        return redirect()->route('backoffice.login');
    }
}
