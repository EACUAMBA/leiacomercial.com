@extends('layouts.app')

@section('content')
    <div class="flex flex-col gap-2 h-full">
        <img src="{{ Storage::url($product->files()->where('cover', '=', true)->firstOrFail()->path) }}"
             alt="Imagem de {{ $product->name }}" class="w-full object-cover object-center aspect-square">

        <div class="mt-2 flex flex-col gap-1 px-2">
            <h1 class="text-xl font-serif font-medium">{{ $product->name }}</h1>
            <p class="text-xl font-extrabold text-red-500">{{ $product->price }} MZN</p>
            @if($product->old_price && $product->old_price != 0)
                <p class="text-sm font-medium line-through">{{ $product->old_price }}</p>
            @endif
            <h1 class="text-base mt-4">{{ $product->description }}</h1>
        </div>
    </div>
@endsection

