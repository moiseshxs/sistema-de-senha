<?php
ob_flush();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sistema de Senhas</title>
  <link rel="icon" type="image/x-icon" href="./imgs/etec-guaianazes.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="../css/matricula.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>

  <section class="container-fluid vh-100 m-0 px-3">
  <div id="fades" class="hide"></div>

    <div class="row h-100">

      <div class="row h-30">

        <div class="col d-flex justify-content-start align-items-start mt-3">
          <?php include("./componentes/logo.php"); ?>
        </div>

        <div class="col-6">
          <div class="row">
            <p class="text-center fw-bold text-uppercase p-0 m-0 fs-2">Senha Atual</p>
            <p id="senhaAtual" class="text-center fw-bold text-uppercase p-0 m-0 fs-60"><span
                id="prefixo-atual" class="">XX</span><span id="digitos-atual">000</span></p>
          </div>

          <div id="compareceu-area" class="row d-flex flex-column justify-content-center align-items-center">
            <div class="fs-6 text-center w-100">O atendimento terminou?</div>
            <div class="w-100 d-flex flex-row align-items-center justify-content-center gap-5 mt-2">
              <button onclick="compareceu('1')" class="btn btn-success btn-redondo"><i class="fas fa-check"></i></button>
              <button onclick="compareceu('2')" class="btn btn-danger btn-redondo"><i class="fas fa-times"></i></button>
            </div>
          </div>
        </div>

        <div class="col d-flex flex-column" id="infos">
          <div class="row p-0 my-2 d-flex">
            <div class="col d-flex justify-content-end">
              <button id="abrirModal" type="button" class="btn btn-dark btn-redondo" data-bs-toggle="modal"
                data-bs-target="#config">
                <i class="fas fa-cog"></i>
              </button>
            </div>
          </div> 

          <div class="row d-flex m-0 p-0">
            <div class="col m-0 p-0">
              <p class="fs-5 fw-bold text-uppercase text-end p-0 m-0">Suas informações</p>
            </div>
          </div>

          <div class="row p-0 m-0">
            <p class="fw-bold fs-5 p-0 m-0 text-end">Sala: <span class="fs-4">X</span></p>
            <p class="fw-bold fs-5 p-0 m-0 text-end">Guichê: <span class="fs-4">X</span></p>
            <input type="hidden" id="guiche" value="2">
          </div>
        </div>
      </div>

      <div class="row h-65">
        <div id="embacada">
          <h3 id="text-embacada" style="color:#fff">Termine o Atendimento Atual</h3>
        </div>

        <div class="col">
          <div class="row matricula" style="height: 20%;">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Proximos</p>
          </div>
          <div class="row conteudo d-flex flex-column justify-content-start">
            <div id="proximos">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">Nenhum atendimento</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row remanescente" style="height: 20%;">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Preferencial</p>
          </div>
          <div class="row conteudo overflow-auto d-flex flex-column justify-content-start">
            <div id="preferencial">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">Nenhum preferencial</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row preferencial" style="height: 20%;">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Últimos atendidos</p>
          </div>
          <div class="row conteudo d-flex flex-column justify-content-start">
            <div id="senhasAtendidas" class="row overflow-auto  item mb-1" style="height:100% !important">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">Nenhuma Senha</p>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="row listas" style="height: 20%;">
            <p class="p-0 m-0 text-center text-light">Listagem</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Não comparecidos</p>
          </div>
          <div class="row conteudo d-flex flex-column justify-content-start">
            <div id="senhasNaoAtendidas" class="row overflow-auto  item mb-1" style="height:100% !important">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">Nenhuma Senha</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row h-5">

      </div>
    </div>
  </section>

  <?php include("./componentes/modal-config.php"); ?>
  <?php include("./componentes/modal-pesquisa-sala.php"); ?>

  <script>
  if(localStorage.getItem("idGuicheEmUso") == undefined){
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.getElementById("abrirModal");
      button.click();
    });
  }

  $(document).ready(function() {
      $('[data-bs-toggle="tooltip"]').tooltip();

      
      $('#home-btn').on('click', function() {
        window.location.href = '../index.php';
      });
    });
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
  <script src="./js/matricula.js"></script>
  <script src="./js/geral.js"></script>
  
</body>

</html>
<?php
ob_end_flush();
?>