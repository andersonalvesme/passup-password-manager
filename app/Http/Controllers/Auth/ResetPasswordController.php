<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/';

    public function showResetForm($token)
    {
        $passwordReset = DB::table('password_resets')->select('email', 'created_at')->where('token', $token)->first();

        if (!isset($passwordReset)) {
            return view('auth.passwords.reset')->withErrors(['error' => 'O token para recuperação de senha é inválido.']);
        }

        if (Carbon::parse($passwordReset->created_at)->diffInHours(Carbon::now()) > 1) {
            return view('auth.passwords.reset')->withErrors(['error' => 'Sua solicitação de redefinição de senha expirou.<br><br><a href="' . url('password/reset') . '" class="text-info">Reenviar o link?</a>']);
        }

        return view('auth.passwords.reset', ['token' => $token, 'emails' => $passwordReset->email]);
    }

    public function reset(Request $request)
    {
        $passwordReset = DB::table('password_resets')->select('email', 'created_at')->where('token', $request->token)->first();

        if (!isset($passwordReset)) {
            return view('auth.passwords.reset')->withErrors(['error' => 'O token para recuperação de senha é inválido.']);
        }

        if (Carbon::parse($passwordReset->created_at)->diffInHours(Carbon::now()) > 1) {
            return view('auth.passwords.reset')->withErrors(['error' => 'Sua solicitação de redefinição de senha expirou.<br><br><a href="' . url('password/reset') . '" class="text-info">Reenviar o link?</a>']);
        }

        DB::table('users')
            ->where('email', $passwordReset->email)
            ->update([
                'password' => bcrypt($request->password)
            ]);
        DB::table('password_resets')->where('email', $passwordReset->email)->delete();

        return view('auth.login', ['status' => 'Sua senha foi redefinida.']);
    }
}
