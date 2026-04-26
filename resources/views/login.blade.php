@extends('layouts.app')

@section('content')
    <div class=" gap-3 px-4 md:px-0 md:gap-4 md:flex md:flex-wrap md:items-start  py-4 h-full bg-white">
        <h1 class="text-2xl font-serif mb-4">Login</h1>

        <form method="post" action="{{ route('login') }}" class="flex flex-col gap-2">


            <div>
                <label for="email" class="font-serif">E-mail:</label>
                <input type="email" placeholder="Email" name="email"
                       value="{{ request()->has('email') ? request()->string('email') : '' }}"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                @error('email')
                    <span>{{ $errors->email }}</span>
                @enderror
            </div>

            <div>
                <label for="password" class="font-serif">Senha:</label>
                <input type="password" placeholder="Senha" name="password"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                @error('password')
                <span>{{ $errors->password }}</span>
                @enderror
            </div>

            <button type="submit" class="bg-red-500 text-white p-1 rounded-lg mt-4 px-4 py-2">Entrar</button>
        </form>
    </div>
@endsection

