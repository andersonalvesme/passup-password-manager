@extends('emails.template')

@section('container')
    <h1>Não se preocupe, todos nós esquecemos às vezes</h1>
    <hr>
    <p>Oi {{ $name }}.</p>
    <p>Você pediu recentemente para redefinir a senha desta conta:<br>{{ $email }}</p>
    <p>Para atualizar sua senha, clique no botão abaixo:</p>
    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
        <tbody>
        <tr>
            <td align="left">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr>
                        <td> <a href="{{ url('password/reset/' . $token) }}" target="_blank">Resetar minha senha</a> </td>
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