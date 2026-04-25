<?php

use App\Http\Controllers\BackOffice\BackOfficeController;
use App\Http\Controllers\BackOffice\LoginBackOfficeController;
use App\Http\Controllers\BackOffice\LogoutBackOfficeController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\WelcomeController;
use App\Http\Middleware\AuthenticateBackOffice;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/produto/{slug}', [ProductController::class, 'show'])->name('product.show');
Route::get('/login', [\App\Http\Controllers\LoginController::class, 'create'])->name('login');
Route::get('/contactos', [ContactsController::class, 'create'])->name('contacts');
Route::get('/faq', [FaqController::class, 'create'])->name('faq');
Route::get('/carinho-de-compras', [ShoppingCartController::class, 'create'])->name('shopping-cart');


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


