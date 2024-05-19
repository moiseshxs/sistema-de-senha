<?php  
  ob_flush();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Controle de Salas</title>
  <link rel="icon" type="image/x-icon" href="./imgs/etec-guaianazes.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="../css/admin2.css" />


</head>

<body>
  <div class="container-fluid p-0 vw-100 vh-100">
    <div class="row m-0 w-100 cima" style="height: 10%;">
      <div class="col pt-1">
      <?php include ("./componentes/logo.php");?>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-semibold text-uppercase">Controle de Salas</p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row m-0 w-100 meio">
      <div class="col"></div>
      <div class="col-4 d-flex align-items-center">
        <div class="select w-100 overflow-auto" id="salasTotal" style="height: 400px !important">
          <div class="opcao d-flex align-items-center justify-content-center" onclick="borda(this)" id="areaNome">
            <p class="fs-1" id="salaNome">SALA 1 </p> <a id="trocarNomeSala"> <i class='bx bx-edit-alt'></i></a>
          </div>
          <div class="opcao bg-success add d-flex align-items-center justify-content-center ">
            <p class="fs-1 fw-bold" data-bs-toggle="modal" data-bs-target="#modaal">+ ADD SALA</p>
          </div>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-4 d-flex align-items-center">
        <div class="select w-100" style="height: 400px" id="allGuiches">
          <div class="opcao safado d-flex align-items-center justify-content-center" >
            <p class="fs-1">GUICHÊ 1 </p>
          </div>
          <div class="add bg-success d-flex align-items-center justify-content-center">
            <p class="fs-1 fw-bold">+ ADD GUICHE</p>
          </div>
        </div>
      </div>
      <div class="col"></div>
      
    </div>
    <div class="linha1" style="width: 100%; height: 5%"></div>
    <div class="linha"></div>
    <?php include ("./componentes/menu.php");?>
  </div>

  <div class="modal" tabindex="-1" id="modaal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border: transparent !important">
        <h5 class="modal-title fs-3">INSIRA O NOME DA SALA</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="POST" action="" id="storeSala">
        <input type="text" class="w-100 border border-none fs-2" id="nomeSala" maxlength="13"/>
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
        <input type="text" class="w-100 border border-none fs-2" id="salaA"/>
      </div>
      <div class="modal-footer" style="border: transparent !important">
          <button type="button" class="btn btn-secondary fs-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-success fs-5" id="alterarSala">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</div>



  <script>


  function borda1(div) {
    var divs = document.querySelectorAll('.safado');
    divs.forEach(function(element) {
      element.classList.remove('borda-verde');
    });

    div.classList.add('borda-verde');
  }

  </script>
  <script async src="https://app2.weatherwidget.org/js/?id=ww_f5c4ab7d7d6c6"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
    integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>
  <script src="./js/controleSala.js"></script>
</body>

</html>
<?php  
  ob_end_flush();
?>