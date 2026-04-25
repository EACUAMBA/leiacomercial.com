@extends('layouts.app')

@section('content')
    <div class="flex flex-col items-center justify-center gap-4 p-2  h-full">
       <h1 class="text-3xl mb-2">Sentimos muito...</h1>
        <p>Produto <span class="font-medium bg-gray-300 text-gray-600 px-2 py-1 rounded-lg">{{ $slug }}</span> está indisponível!</p>

        <a href="{{ route('welcome') }}" class="bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-white font-medium mt-4">Ir a Página Inicial</a>

        <div class="mt-8">
            <h2 class="text-xl ">Produtos Semelhantes</h2>
        </div>
    </div>
@endsection

