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
  <link rel="stylesheet" href="../css/admin.css" />


</head>

<body>
  <div class="container-fluid w-100 vh-100">
    <div class="content h-100 w-100">
      <div class="row cima-2 bg-light d-flex align-itens-center">
      <button id="abrirModal" type="button"
            class="btn btn-dark btn-sm " data-bs-toggle="modal" data-bs-target="#config">
            Alterar
          </button>
        <div class="col vazia h-100 d-flex pt-1 justify-content-start">
        <?php include ("./componentes/logo.php");?>
        </div>
        <div class="col"></div>
        <div class="col d-flex flex-column senha-atual h-100">
          <div class=" h-25 d-flex justify-content-center fs-4 fw-bold text-uppercase">
            <p class="text-center" style="font-size: 30px;">Senha Atual</p>
          </div>
          <div class=" h-75 d-flex justify-content-center fs-1 fw-bold">
            <p id="senhaAtual" class="text-center" style="font-size: 60px;"><span class="text-success">AP</span>000</p>
          </div>
        </div>
        <div class="col">

        </div>
        <div class="col d-flex flex-column suas-informacoes h-100" id="infos">
          <div class=" d-flex justify-content-end fs-5 fw-bold text-uppercase">
            Suas Informações
          </div>
          <div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Sala</span>: </div>

          <div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Guichê</span>: </div>
          <input type="hidden" id="guiche" value="2">
        </div>
        <div id="compareceu-area" class="col d-flex justify-content-center align-items-center">
          <button onclick="compareceu('1')" class="btn btn-success me-3">Compareceu</button>
          <button onclick="compareceu('2')" class="btn btn-danger ms-3">Não Compareceu</button>
        </div>
    </div>
      

      <div class="row meio border border-secondary"  id="conteudo">
      <div id="embaca">
          <h3 style="color:#fff">Termine o Atendimento Atual</h3>
        </div>
        <div class="col p-0">
          <div class="titulo matricula">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Próximos
            </div>
          </div>
          <div class="conteudo p-2 overflow-auto d-flex flex-column justify-content-start">
            <div id="proximos" class="row item">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">AP001</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>
        <div class="col p-0 bg-cinza">
          <div class="titulo preferencial">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Matrícula - Preferencial
            </div>
          </div>
          <div class="conteudo p-2 overflow-auto d-flex flex-column justify-content-start">
            <div id="preferenciais" class="row item">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">AP001</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>
        <div class="col p-0">
          <div class="titulo remanescente">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Últimos atendidos
            </div>
          </div>
          <div class="conteudo p-2 overflow-auto d-flex flex-column justify-content-start">
            <div id="atendidas" class="row item">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">AP001</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>
        <div class="col p-0 ">
          <div class="titulo listas">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Listagem
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Não Comparecedidos
            </div>
          </div>
          <div class="conteudo p-2 overflow-auto d-flex flex-column justify-content-start">
            <div id="nao-comparecidos" class="row item">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">AP001</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="modal fade" id="config" tabindex="-1" aria-labelledby="config" aria-hidden="true">
    <div class="modal-dialog modal-xl bg-secondary">
      <div class="modal-content bg-secondary">
        <div class="modal-header bg-secondary">
          <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Escolha uma Sala e Guichê</h1>
          <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body modalzin bg-secondary">
          <div class="container-fluid h-100">
            <div class="row h-100 modalzin">
              <div class="col-1"></div>
              <div class="col-4 bg-light p-1" id="salasTotal">
                <div class="sala w-100 bg-secondary d-flex justify-content-center align-items-center">
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
        <div class="modal-footer">
          <button type="button" class="btn btn-danger btn-safado" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-success">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <script>
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("abrirModal");
    button.click();
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
  <script src="./js/apm.js"></script>
</body>

</html>
<?php  
  ob_end_flush();
?>