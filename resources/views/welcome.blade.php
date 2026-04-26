@extends('layouts.app')

@section('content')
    <div
        class="{{ $products->isEmpty() ? 'flex flex-col items-center justify-center gap-4 p-2' : 'grid grid-cols-2 auto-rows-min gap-3 px-4 md:px-0 md:gap-4 md:flex md:flex-wrap md:items-start' }} py-4 h-full">
        @foreach($products as $product)
            <x-partials.product-card :product="$product"/>
        @endforeach()
        @if($products->isEmpty())
            <h1 class="text-3xl mb-2">Sentimos muito...</h1>
            <div class="flex flex-col flex-wrap justify-center items-center gap-2">
            <p class="text-center">Não encontramos produtos com o termo </p>
                <span class="font-medium bg-gray-300 text-gray-600 px-2 py-1 rounded-lg">{{ $q }}</span>
            </div>

            <a href="{{ redirect()->back() }}"
               class="bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-white font-medium mt-4">Voltar</a>
        @endif
    </div>
@endsection

