<?php

use App\Http\Controllers\BackOffice\BackOfficeController;
use App\Http\Controllers\BackOffice\LoginBackOfficeController;
use App\Http\Controllers\BackOffice\LogoutBackOfficeController;
use App\Http\Controllers\BackOffice\ProductBackOfficeController;
use App\Http\Middleware\AuthenticateBackOffice;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\WelcomeController::class, 'index']);

Route::get('/store', function () {
    return view('welcome');
});

Route::get('/contactos', function () {
    return view('welcome');
})->name('contacts');

Route::get('/faq', function () {
    return view('welcome');
})->name('faq');

//BACKOFFICE
Route::get('/backoffice/login', [LoginBackOfficeController::class, 'create'])->name('backoffice.login');
Route::post('/backoffice/login', [LoginBackOfficeController::class, 'store']);
Route::get('/backoffice/logout', [LogoutBackOfficeController::class, 'create'])->name('backoffice.logout');


Route::middleware(AuthenticateBackOffice::class)->group(function () {
    Route::get('/backoffice', [BackOfficeController::class, 'create'])->name('backoffice');

    Route::get('/backoffice/products', [ProductBackOfficeController::class, 'index'])->name('backoffice.products');
    Route::get('/backoffice/products/create', [ProductBackOfficeController::class, 'create']);
    Route::post('/backoffice/products', [ProductBackOfficeController::class, 'store']);
    Route::get('/backoffice/products/{id}', [ProductBackOfficeController::class, 'show']);
    Route::get('/backoffice/products/{id}/edit', [ProductBackOfficeController::class, 'edit']);
    Route::put('/backoffice/products/{id}', [ProductBackOfficeController::class, 'update']);
    Route::delete('/backoffice/products/{id}', [ProductBackOfficeController::class, 'destroy']);
});


