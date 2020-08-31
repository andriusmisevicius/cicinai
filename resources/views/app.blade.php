<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="{{url('/')}}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Čičinų kaimo bendruomenė') }}</title>
    <meta name="description" content="Čičinų kaimo bendruomenės puslapis. Kaimo renginiai ir naujienos.">
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <!-- Apple Touch Icon (at least 200x200px) -->
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">

    <!-- To run web application in full-screen -->
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- Status Bar Style (see Supported Meta Tags below for available values) -->
    <!-- Has no effect unless you have the previous meta tag -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <nav-bar></nav-bar>
    <transition>
        <router-view></router-view>
    </transition>
</div>
</body>
</html>
