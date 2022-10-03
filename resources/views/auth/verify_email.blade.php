@extends('auth.template')

@section('content')
    <div class="card">
        <div class="card-body text-center">
            @if (isset($status))
                <div class="row text-left justify-content-center">
                    <div class="col-6">
                        <div class="alert alert-success alert-dismissable" role="alert">
                            <p class="mb-0">{!! $status !!}</p>
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        </div>
                    </div>
                </div>
            @endif

            <h3 class="mb-6 font-w300">Acesse sua caixa de entrada para verificar seu e-mail</h3>

            <div>Enviamos um email para <u>{{ session('email') }}</u>.</div>
            <div>Siga as instruções para verificar seu endereço de e-mail.</div>

            <div class="mt-6"><small>A verificação por e-mail nos ajuda a garantir que seus dados estarão sempre
                    seguros.</small></div>
        </div>
    </div>
    @if (!isset($status))
        <div class="mt-50 text-center"><small>Não recebeu o email de verificação? <a
                    href="{{ url('register/verify_email/resend') }}">Envie novamente</a></small></div>
    @endif
@endsection
