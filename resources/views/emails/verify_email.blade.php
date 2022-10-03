@extends('emails.template')

@section('container')
    <h1>Verifique seu endereço de email</h1>
    <hr>
    <p>Oi {{ $name }}.</p>
    <p>Verifique seu endereço de e-mail para sabermos que é realmente você!</p>
    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
        <tbody>
        <tr>
            <td align="left">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr>
                        <td> <a href="{{ url('/register/verify_email/' . $token) }}" target="_blank">Verificar meu e-mail</a> </td>
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