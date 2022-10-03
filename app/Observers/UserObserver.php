<?php

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class UserObserver
{
    /**
     * rules
     * 1 - Verificar quantidade de usuários do plano
     * 2 - Só administradores podem cadastrar outros usuários administradores
     */
    public function creating(User $user)
    {
        $activeUsersLimit = DB::table('tenants')->where('id', Auth::user()->tenant_id)->first()->active_users_limit;
        $count = DB::table('vw_users')->count();

        // rule 1
        if ($count >= $activeUsersLimit) {
            throw ValidationException::withMessages(['message' => 'Limite de usuários do plano atingido']);
        }

        // rule 2
        if (!Auth::user()->admin && $user->admin == 1) {
            throw ValidationException::withMessages(['message' => 'Você não possui permissão para cadastrar usuários administradores']);
        }
    }

    public function created(User $user)
    {
        User::sendMailNewUser($user);
    }

    /**
     * rules:
     * 1 - Só administradores podem alterar outros usuários administradores
     * 2 - Caso seja administrador não pode remover a flag admin
     */
    public function updating(User $user)
    {
        // rule 1
        if (!Auth::user()->admin && $user->admin == 1) {
            throw ValidationException::withMessages(['message' => 'Você não possui permissão para cadastrar usuários administradores']);
        }

        // rule 2
        if (Auth::user()->admin && Auth::user()->id == $user->id) {
            unset($user['admin']);
        }

        $user['updated_by'] = Auth::user()->id;
    }

    public function deleting(User $user)
    {
        if (Auth::user()->id == $user->id) {
            throw ValidationException::withMessages(['message' => 'Não é permitido excluir o próprio usuário']);
        }
    }

}
