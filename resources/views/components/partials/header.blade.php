<header class="fixed left-0 top-0 right-0 bg-white h-16 flex items-center justify-center px-2"
        x-data="{ mobileMenuOpen: false }">
    {{--    mobile--}}
    <div class="flex items-center justify-between w-full container  mx-auto">
        <div class="" x-show="!mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
            <i data-lucide="menu"
               class=" size-10 p-1"></i>
        </div>
        <div  x-show="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
            <i data-lucide="x"
               class=" size-10 p-1"></i>
        </div>

        <a href="{{ config('app.url') }}">
            <img src="{{ asset('images/logotipo-text-for-light.png') }}" alt="Logotipo da Leia Comercial em texto."
                 class="w-50">
        </a>

        <div class=""><i data-lucide="shopping-cart" class=" size-10 p-1"></i></div>

        <nav x-show="mobileMenuOpen" @click.outside="mobileMenuOpen = false" x-transition x-transition.scale.origin.top class="fixed left-0 top-16 right-0 shadow-md bg-white flex flex-col gap-4 p-4">
            <a href="{{ config('app.url') }}" class="inline-flex justify-center items-center py-3 px-6 w-full">Página Inicial</a>
            <a href="{{ route('contacts') }}" class="inline-flex justify-center items-center py-3 px-6 w-full">Contactos</a>
            <a href="{{ route('faq') }}" class="inline-flex justify-center items-center py-3 px-6 w-full">FAQ</a>
            <a href="{{ route('backoffice') }}" class="inline-flex justify-center items-center py-3 px-6 w-full bg-primary active:bg-red-700  rounded-lg text-white font-medium">BackOffice</a>
        </nav>
    </div>

    {{--    desktop--}}
</header>
