@php use Illuminate\Support\Facades\Storage; @endphp
<a href="{{ route('product.show', ['slug'=> $product->slug]) }}" class="bg-white shadow-xs rounded p-2 max-w-75">
    <img src="{{ Storage::url($product->coverFile->path) }}"
         alt="Imagem de {{ $product->name }}" class="w-full object-cover object-center aspect-square">

    <div class="mt-2 flex flex-col gap-1">
        <h1 class="text-base font-serif font-medium">{{ $product->name }}</h1>
        <p class="text-xl font-extrabold text-red-500">{{ $product->price }} MZN</p>
        @if($product->old_price && $product->old_price != 0)
            <p class="text-sm font-medium line-through">{{ $product->old_price }}</p>
        @endif
    </div>
</a>
