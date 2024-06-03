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
  <link rel="stylesheet" href="../css/triagem.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
  <!-- Começo da Seção -->
  <section class="container-fluid vh-100 m-0 px-3">
  <div id="fades" class="hide"></div>
    <div class="row h-100">
      <!-- Começo do Header -->
      <div class="row h-30">
        <!-- Parte da Logo -->
        <div class="col d-flex justify-content-start align-items-start mt-3">
          <?php include("./componentes/logo.php"); ?>
        </div>
        <!-- Parte da Senha  -->
        <div class="col-6">
          <div class="row">
            <p class="text-center fw-bold text-uppercase p-0 m-0 fs-2">Senha Atual</p>
            <p id="senhaAtual" class="text-center fs-60 fw-bold text-uppercase p-0 m-0"><span id="prefixo-atual"
                class="">XX</span><span id="digitos-atual">000</span></p>
          </div>
          <!-- Resposta do Atendimento -->
          <div class="row d-flex flex-column align-items-center justify-content-center">
            <div class="fs-6 text-center w-100">O atendimento terminou?</div>
            <div id="" class="w-100 d-flex flex-row align-items-center justify-content-center gap-5 mt-2">
              <button onclick="update('1')" class="btn btn-success btn-redondo"><i class="fas fa-check"></i></button>
              <button onclick="update('2')" class="btn btn-danger btn-redondo"><i class="fas fa-times"></i></button>
            </div>
          </div>
        </div>
        <!-- Informações -->
        <div class="col d-flex flex-column" id="infos">
          <!-- Botao de Alterar -->
          <div class="row p-0 my-2 d-flex">
            <div class="col d-flex justify-content-end">
              <button id="abrirModal" type="button" class="btn btn-dark btn-redondo" data-bs-toggle="modal"
                data-bs-target="#config">
                <i class="fas fa-cog"></i>
              </button>
            </div>
          </div>
          <!-- Titulo -->
          <div class="row p-0 m-0 d-flex">
            <div class="col m-0 p-0">
              <p class="fs-5 fw-bold text-uppercase text-end p-0 m-0">Suas informações</p>
            </div>
          </div>
          <!-- Infos -->
          <div class="row p-0 m-0">
            <p class="fw-bold fs-5 p-0 m-0 text-end">Sala: <span class="fs-4">X</span></p>
            <p class="fw-bold fs-5 p-0 m-0 text-end">Guichê: <span class="fs-4">X</span></p>
            <input type="hidden" id="guiche" value="2">
          </div>
        </div>
      </div>
      <!-- Main -->
      <div class="row h-65">
        <!-- Mensagem que não permite atender atender ate q se confirme -->
        <div id="embacada">
          <h3 style="color:#fff">Termine o Atendimento Atual</h3>
        </div>
        <!-- matricula -->
        <div class="col border">
          <div class="row matricula h-20">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Matrícula</p>
          </div>
          <div class="row conteudo">
            <div id="salvarAM" class="senha border-matricula bg-cinza">
              <p id="senhaAM" class="m-0 fs-1 fw-bold"><span class="text-dark">AM</span>001</p>
            </div>
          </div>
        </div>
        <!-- remanescente -->
        <div class="col border">
          <div class="row remanescente h-20">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Remanescente</p>
          </div>
          <div class="row conteudo">
            <div id="salvarAR" class="senha border-remanescente bg-cinza">
              <p id="senhaAR" class="m-0 fs-1 fw-bold"><span class="text-primary-emphasis">AR</span>001</p>
            </div>
          </div>
        </div>
        <!-- preferencial -->
        <div class="col border">
          <div class="row preferencial h-20">
            <p class="p-0 m-0 text-center text-light">Atendimento</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Preferencial</p>
          </div>
          <div class="row conteudo">
            <div id="salvarAP" class="senha border-preferencial bg-cinza">
              <p id="senhaAP" class="m-0 fs-1 fw-bold"><span class="text-success">AP</span>001</p>
            </div>
          </div>
        </div>
        <!-- ja chamados -->
        <div class="col border">
          <div class="row listas h-20">
            <p class="p-0 m-0 text-center text-light">Listagem</p>
            <p class="p-0 m-0 text-center text-light text-uppercase fs-3 fw-bold">Chamados</p>
          </div>
          <div class="row conteudo d-flex flex-column justify-content-start">
            <div id="ultimos" class="row item mb-1 h-100 overflow-auto">
             <p class="h4 text-center mt-1">Chame uma senha</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row h-5">

      </div>
    </div>
  </section>

      <!-- Modal de mudar sala e guiche -->
      <div class="modal fade" id="config" tabindex="-1" aria-labelledby="config" aria-hidden="true">
        <div class="modal-dialog modal-xl bg-secondary">
          <div class="modal-content bg-secondary">
            <div class="modal-header bg-secondary">
              <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Escolha uma Sala e Guichê</h1>
              <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-secondary">
              <div class="container-fluid h-100">
                <div class="row h-100 modal-corpo">
                  <div class="col-1"></div>
                  <div class="col-4 bg-light p-1" id="salasTotal">
                    <div class="sala w-100 bg-secondary d-flex justify-content-center align-items-center" id="salaa">
                      <p class="titulo-sala fs-1 fw-bold text-light">SALA 1</p>
                    </div>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-4 bg-light p-1 flex-column" id="guiches">
                    <div class="titulo-sala w-100 d-flex justify-content-center align-items-center">
                      <p class="titulo-sala fs-3 fw-bold ">SALA 1</p>
                    </div>
                    <div class="guiche w-100 bg-secondary d-flex justify-content-center align-items-center">
                      <p class="titulo-sala fs-1 fw-bold text-light">GUICHÊ 1</p>
                    </div>
                  </div>
                  <div class="col-1"></div>
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button id="home-btn" type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ir para home"><i class="fas fa-home"></i></button>
              <button type="button" class="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      </div>


  <div id="pesquisa-sala" class="hide">
    <div id="modal-cabeca">
      <h2 class="w-100 text-center p-3">Visualizar Senhas</h2>
      <div class="p-1 mb-4" style="border-radius: 10px;margin-left: 30%;width: 40%;justify-content: center;align-items: center;display: flex;background-color: rgb(201, 187, 187);"><input id="buscaa" style="border:none;width: 80%;outline:none;background-color: transparent;" placeholder="Pesquisar..."> <button style="height: 30px;border:none;width: 15%;background-color: transparent;justify-content: center;align-items: center;display: flex;padding-left: 5%;"><img style="height: 90%;" src="./imgs/pesquisa.png"></button></div>
    </div>
      <div id="modal-corpo" class="overflow-auto" style="height: 63%;">
        <table class="w-100 h-100" id="modalSenhasAll">
          <tr style="border-bottom: 1px solid black;background-color: rgb(182, 170, 170);height: 10%;">
            <td class="blocos p-2" style="border-right: 1px solid black;">Senha</td>
            <td class="blocos" style="border-right: 1px solid black;">Etapa</td>
            <td class="blocos" style="border-right: 1px solid black;">Atendimento Concluido</td>
            <td class="blocos">Horario</td>
          </tr>

          <tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 10%;" id="senhasAll">
            <td class="blocos" style="border-right: 1px solid black;">AR004</td>
            <td class="blocos" style="border-right: 1px solid black;">Triagem</td>
            <td class="blocos" style="border-right: 1px solid black;">Não</td>
            <td class="blocos">03/05/2023</td>
          </tr>
          <tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 90%;"></tr>

        </table>
      </div>
      <div id="modal-baixo" class=" d-flex w-100 justify-content-end gap-2 pe-4 py-4">
        <button class="fw-bold text-white p-2 px-4 rounded-3" id="fechando-modal" style="outline:none;border:none;background-color: rgb(192, 24, 24);" >Fechar</button>
        <button onclick="chamaDnv()" class="fw-bold text-white p-2 px-4 rounded-3" style="outline:none;border:none;background-color: green;">Salvar</button>
      </div>
</div>


  <script>
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("abrirModal");
    button.click();
  });

  $(document).ready(function() {
      $('[data-bs-toggle="tooltip"]').tooltip();

      
      $('#home-btn').on('click', function() {
        window.location.href = '../index.php';
      });
    });

    
  
  </script>

  <!-- <script async src="https://app2.weatherwidget.org/js/?id=ww_f5c4ab7d7d6c6"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
    integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>
  <script src="./js/triagem.js"></script>
</body>

</html>
<?php
ob_end_flush();
?>