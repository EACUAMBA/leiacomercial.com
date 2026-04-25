@php use Illuminate\Support\Facades\Storage; @endphp
<a href="#" class="bg-white shadow-xs rounded p-2">
    <img src="{{ Storage::url($product->files()->where('cover', '=', true)->firstOrFail()->path) }}"
         alt="Logotipo da Leia Comercial Lda." class="w-50" >
    <div class="mt-2">
        <h1 class="text-sm font-sans">{{ $product->name }}</h1>
        <p class="text-base font-bold text-primary">{{ $product->price }} MZN</p>
        @if($product->old_price && $product->old_price!=0)
            <p class="text-sm line-through text-gray-500">{{ $product->old_price }}</p>
        @endif
    </div>
</a>
