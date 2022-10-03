@extends('auth.template')

@section('content')
    <form id="formLogin" class="card card-md" role="form" method="POST" action="{{ url('/login') }}">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="card-body">
            <h2 class="mb-5 text-center">Sign in to your account</h2>

            @if (isset($status))
                <div class="alert alert-success alert-dismissible" role="alert">
                    {!! $status !!}
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
            @endif

            @if (session()->has('status'))
                <div class="alert alert-success alert-dismissible" role="alert">
                    {!! session()->get('status') !!}
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
            @endif

            @if (count($errors) > 0)
                <div class="alert alert-danger alert-dismissible" role="alert">
                    <ul class="list-unstyled">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
            @endif

            <div class="mb-3">
                <label class="form-label" for="txtEmail">Email Address</label>
                <input type="email" class="form-control" name="email" id="txtEmail" autocomplete="off" required
                       value="{{ old('email') }}" tabindex="1">
            </div>
            <div class="mb-2">
                <label class="form-label" for="txtPassword">
                    Password
                    <span class="form-label-description"><a
                            href="{{ url('password/reset') }}">Forgot Password?</a></span>
                </label>
                <input type="password" class="form-control" name="password" id="txtPassword" autocomplete="off" required
                       tabindex="2">
            </div>
            <div class="form-footer">
                <button type="submit" class="btn btn-primary btn-block" tabindex="3">Sign in</button>
            </div>
        </div>
    </form>
    <div class="text-center text-muted">
        Not have an account yet? <a href="{{ url('register') }}">Sign up</a>
    </div>

    <script type="text/javascript">
        $(function () {
            if ($('#txtEmail').val() != '') {
                $('#txtPassword').focus();
            } else {
                $('#txtEmail').focus();
            }
            $('#formLogin').validate();
        });
    </script>
@endsection
