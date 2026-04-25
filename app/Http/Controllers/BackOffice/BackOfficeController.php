<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BackOfficeController extends Controller
{
    public function create()
    {
        return Inertia::render('backoffice');
    }
}
