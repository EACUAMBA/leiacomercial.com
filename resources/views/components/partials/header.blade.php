@php use Illuminate\Support\Facades\Auth; @endphp
<header class="fixed left-0 top-0 right-0 bg-white h-16 flex items-center justify-center"
        x-data="{ mobileMenuOpen: false, searchBarOpen:false }">
    {{--    mobile--}}
    <div class="flex items-center justify-between w-full container  mx-auto">
        <div class="" x-show="!mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
            <i data-lucide="menu"
               class=" size-10 p-1"></i>
        </div>
        <div x-show="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
            <i data-lucide="x"
               class=" size-10 p-1"></i>
        </div>

        <a href="{{ route('welcome') }}" >
            <img src="{{ asset('images/logotipo-text-for-light.png') }}" alt="Logotipo da Leia Comercial em texto."
                 class="w-50">
        </a>

        <a href="{{ route('shopping-cart') }}" class="hidden"><i data-lucide="shopping-cart" class=" size-10 p-1"></i></a>

        <div x-show="!searchBarOpen" @click="searchBarOpen = !searchBarOpen" ><i data-lucide="search" class=" size-10 p-1"></i></div>

        <div x-show="searchBarOpen" @click="searchBarOpen = !searchBarOpen">
            <i data-lucide="x"
               class=" size-10 p-1"></i>
        </div>

        <div class="bg-white shadow-md fixed left-0 top-16 right-0 p-2" x-show="searchBarOpen" @click.outside="searchBarOpen = false" x-cloak x-transition>
            <form action="{{ route('welcome') }}" method="get"
                  class="flex gap-2 container  mx-auto">
                <input type="text" placeholder="Pesquisar...." name="q" value="{{ request()->has('q') ? request()->string('q') : '' }}" class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                <button type="submit" class="bg-red-500 p-1 rounded-lg "><i data-lucide="search"
                                                                            class="text-white size-10 p-1"></i></button>
            </form>
        </div>

        <nav x-show="mobileMenuOpen" @click.outside="mobileMenuOpen = false" x-cloak x-transition
             class=" fixed left-0 top-16 right-0 shadow-md bg-white flex flex-col gap-4 p-4">
            <a href="{{ route('welcome') }}" class="inline-flex justify-center items-center py-3 px-6 w-full">Página
                Inicial</a>
            <a href="{{ route('contacts') }}"
               class="inline-flex justify-center items-center py-3 px-6 w-full">Contactos</a>
            <a href="{{ route('faq') }}" class="inline-flex justify-center items-center py-3 px-6 w-full">FAQ</a>
            @if(Auth::check())
                <a href="{{ route('backoffice') }}"
                   class="inline-flex justify-center items-center py-3 px-6 w-full bg-primary active:bg-red-700  rounded-lg text-white font-medium">BackOffice</a>
            @else
                <a href="{{ route('login') }}"
                   class="inline-flex justify-center items-center py-3 px-6 w-full bg-primary active:bg-red-700  rounded-lg text-white font-medium">Login</a>
            @endif
        </nav>
    </div>

    {{--    desktop--}}
</header>
