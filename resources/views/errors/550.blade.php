@extends('app')

@section('content')
    <div class="page">
        <div class="page-content">
            <div class="container text-center">
                <div class="display-1 text-muted mb-5"><i class="si si-exclamation"></i> 550</div>
                <h1 class="h2 mb-3">Ops.. Permissão negada..</h1>
                <p class="h4 text-muted font-weight-normal mb-7">Infelizmente você não possui acesso a esta tela..</p>
                <a class="btn btn-primary" href="javascript:history.back()">
                    <i class="fe fe-arrow-left mr-2"></i>Voltar para tela anterior
                </a>
            </div>
        </div>
    </div>
@endsection
