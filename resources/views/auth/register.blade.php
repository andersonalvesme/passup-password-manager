@extends('auth.template')

@section('content')
    <form id="formRegister" class="card card-md" role="form" method="POST" action="{{ url('register') }}">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="card-body">
            <h2 class="mb-5 text-center">Create an account</h2>

            @if (count($errors) > 0)
                <div class="alert alert-danger alert-dismissible" role="alert">
                    <ul class="list-unstyled">
                        @foreach ($errors->all() as $error)
                            <li>{!! $error !!}</li>
                        @endforeach
                    </ul>
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
            @endif

            <div class="mb-3">
                <label class="form-label" for="txtNome">Name</label>
                <input type="text" class="form-control" name="name" id="txtNome" autocomplete="off"
                       value="{{ old('name') ?? '' }}" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="txtEmail">Email</label>
                <input type="email" class="form-control" name="email" id="txtEmail" autocomplete="off"
                       value="{{ old('email') ?? '' }}" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" required minlength="6" id="password"
                       autocomplete="off">
            </div>
            <div class="mb-3">
                <label for="txtRepetirSenha" class="form-label">Repeat password</label>
                <input type="password" class="form-control" name="password_confirmation" id="txtRepetirSenha"
                       equalTo="#password" autocomplete="off">
            </div>
            <div class="mb-2">
                <label for="txtActiveUsersLimit" class="form-label">Number of users</label>
                <input type="number" class="form-control" name="active_users_limit" id="txtActiveUsersLimit"
                       autocomplete="off" value="1" required min="1" max="10000">
            </div>

            <div class="form-footer">
                <button type="submit" class="btn btn-primary btn-block">Sign up</button>
            </div>
        </div>
    </form>
    <div class="text-center text-muted mb-8">
        Already have an account? <a href="{{ url('login') }}">Sign in</a>
    </div>

    <script type="text/javascript">
        $(function () {
            $('#txtNome').focus();
            $('#formRegister').validate();
        });
    </script>
@endsection
