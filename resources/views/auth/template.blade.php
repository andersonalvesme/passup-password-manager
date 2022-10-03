<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8"/>
    <title>{{ config('app.name') }}</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset($assets . '/images/logo/favicon.ico?') . $version }}"/>

    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">
    <link rel="stylesheet" href="{{ asset($assets . '/css/base.css?') . $version }}" type="text/css"/>

    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/popper.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/bootstrap.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.pjax.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.validate.js?') . $version }}"></script>
</head>
<body class="antialiased border-top-wide border-primary d-flex flex-column">
    <div class="flex-fill d-flex flex-column justify-content-center">
        <div class="container-tight py-5">
            <div class="text-center mb-4">
                <img src="{{ asset('assets/images/logo/favicon-32x32.png') }}" class="h-auto" alt="">
                <span class="h1 align-middle pl-2">{{config('app.name')}}</span>
            </div>
            @yield('content')
        </div>
    </div>
</body>
</html>
