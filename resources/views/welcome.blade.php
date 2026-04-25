@extends('layouts.app')

@section('content')
    <div class="grid grid-cols-2 auto-rows-min gap-3 px-4 md:px-0 md:gap-4 md:flex md:flex-wrap md:items-start  py-4 h-full">
        @foreach($products as $product)
            <x-partials.product-card :product="$product"/>
        @endforeach()
    </div>
@endsection

