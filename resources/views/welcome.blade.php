@extends('layouts.app')

@section('content')
    <div class="grid grid-cols-2 gap-2 p-2 bg-secondary">
        @foreach($products as $product)
            <x-partials.product-card :product="$product"/>
        @endforeach()
    </div>
@endsection

