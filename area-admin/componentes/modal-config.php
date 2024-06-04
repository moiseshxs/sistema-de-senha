<div class="modal fade" id="config" tabindex="-1" aria-labelledby="config" aria-hidden="true">
    <div class="modal-dialog modal-xl bg-secondary">
        <div class="modal-content bg-secondary">
            <div class="modal-header bg-secondary">
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Escolha uma Sala e Guichê</h1>
                <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" id="fechar" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-secondary">
                <div class="container-fluid h-100">
                    <div class="row h-100 modal-corpo">
                        <div class="col-1"></div>
                        <div class="col-4 bg-light p-1" id="salasTotal">

                        </div>
                        <div class="col-2"></div>
                        <div class="col-4 bg-light p-1 flex-column" id="guiches">

                        </div>
                        <div class="col-1"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
                <button id="home-btn" type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ir para home"><i class="fas fa-home"></i></button>
                <button type="button" class="btn btn-success" id="salvar">Salvar</button>
            </div>
        </div>
    </div>
</div>

<style>
    .modal-corpo {
        min-height: 500px !important;
        overflow-y: auto;
    }

    .sala {
        height: 20%;
        cursor: pointer !important;
    }

    .guiche {
        height: 20%;
        cursor: pointer !important;
    }
</style>