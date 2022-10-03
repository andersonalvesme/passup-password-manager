@extends('emails.template')

@section('container')
    <h1>Você foi convidado</h1>
    <hr>
    <p>Oi {{ $convidado }}.</p>
    <p>Você foi convidado(a) por <b>{{ $name }}</b> para utilizar o sistema {{ config('app.name') }}.</p>
    <cite>{{ config('app.name') }} é um sistema de Gerenciamento de Senhas que visa organizar e facilitar o compartilhamento de senhas.</cite>
    <p></p>
    <p>Para criar sua senha de acesso ao sistema, clique no botão abaixo:</p>
    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
        <tbody>
        <tr>
            <td align="left">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr>
                        <td> <a href="{{ url('/password/create/' . $token) }}" target="_blank">Criar minha senha</a> </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
    <br>
    <p>Atenciosamente,<br>Equipe {{ config('app.name') }}</p>
@endsection
