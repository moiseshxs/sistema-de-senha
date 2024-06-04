<div class="modal" tabindex="-1" id="modaal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style="border: transparent !important">
          <h5 class="modal-title fs-3">INSIRA O NOME DA SALA</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method="POST" action="" id="storeSala">
            <input type="text" class="w-100 border border-none fs-2" id="nomeSala" maxlength="13" />
        </div>
        <div class="modal-footer" style="border: transparent !important">
          <button type="button" class="btn btn-secondary fs-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-success fs-5" id="inserirSala">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" tabindex="-1" id="modalAltera">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style="border: transparent !important">
          <h5 class="modal-title fs-3">TROQUE O NOME</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method="POST" action="" id="updateSala">
            <input type="text" class="w-100 border border-none fs-2" id="salaA" />
        </div>
        <div class="modal-footer" style="border: transparent !important">
          <button type="button" class="btn btn-secondary fs-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-success fs-5" id="alterarSala">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>