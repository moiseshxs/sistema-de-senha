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
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>




</head>

<body>
  <div id="main" class="container-fluid w-100 vh-100">
    <div id="embacada">
        <h3 style="color:#fff">Termine o Atendimento Atual</h3>
    </div>
    <div class="content h-100 w-100">
      <div class="row cima bg-light pb-2 d-flex align-itens-center">
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
          <div class=" h-75 d-flex w-100  gap-2 justify-content-center fs-1 fw-bold ">
            <p id="senhaAtual" class="text-center" style="font-size: 60px;"><span id="prefixo-atual" class="">00</span><span id="digitos-atual">000</span></p>
            <div class="d-flex flex-column justify-content-center align-items-center gap-2">
            <button onclick="update('1')" class="btn btn-outline-primary" style="font-size:14px; height:40px; width:150px">Atendimento Ok</button>
            <button onclick="update('2')" class="btn btn-outline-dark" style="font-size:14px; height:40px; width:150px">Não Compareceu</button>
            </div>
          </div>
        </div>
        <div class="col">

        </div>
        <div class="col d-flex flex-column suas-informacoes h-100 pe-3">
          <div class=" d-flex justify-content-end fs-5 fw-bold text-uppercase">
            Suas Informações
          </div>
          <div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Sala</span>: 1</div>

          <div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Guichê</span>: 3</div>
          <input type="hidden" id="guiche" value="2">
        </div>
      </div>
     
      <div class=" w-100 d-flex justify-content-center align-items-center">
        
        
      </div>

      <div class="row meio border border-secondary">
        <div class="col p-0">
          <div class="titulo matricula">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Matrícula
            </div>
          </div>
          <div class="conteudo">

            <div id="salvarAM" class="senha border-matricula bg-cinza">
              <p id="senhaAM" class="m-0 fs-1 fw-bold"><span class="text-dark">AM</span>001</p>
            </div>

          </div>
        </div>
        <div class="col p-0 bg-cinza">
          <div class="titulo remanescente">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Remanescente
            </div>
          </div>
          <div class="conteudo">
            <div id="salvarAR" class="senha border-remanescente bg-cinza">
              <p id="senhaAR" class="m-0 fs-1 fw-bold"><span class="text-primary-emphasis">AR</span>001</p>
            </div>
          </div>
        </div>
        <div class="col p-0">
          <div class="titulo preferencial">
            <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
              Atendimento
            </div>
            <div class="text2 h-50 w-100 text-center text-light h3">
              Preferencial
            </div>
          </div>
          <div class="conteudo">
            <div id="salvarAP" class="senha border-preferencial bg-cinza">
              <p id="senhaAP" class="m-0 fs-1 fw-bold"><span class="text-success">AP</span>001</p>
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
          <div class="conteudo overflow-auto d-flex flex-column justify-content-start">
            <div id="ultimos" class="row item mb-1">
              <div class="col d-flex align-items-center justify-content-center">
                <p class="h3 fw-bold">AP001</p>
              </div>
              <div class="col d-flex align-items-center justify-content-center">
              <i class='bx bx-check-circle fs-1 text-success'></i>
              </div>
              <div class="col d-flex align-items-center justify-content-center"><button
                  class="btn btn-success fw-semibold">Chamar</button></div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="row baixo bg-light d-flex align-items-center">

        <div class="col d-flex align-items-center justify-content-center">
          <div class="col-9">

          </div>
          <div class="col-3 d-flex align-items-center justify-content-center">
            <div id="ww_73191feb4cc90" v='1.3' loc='id'
              a='{"t":"responsive","lang":"pt","sl_lpl":1,"ids":["wl1583"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"3","el_wfc":3,"cl_odd":"#00000000","el_nme":3}'>
              Mais previsões: <a href="https://oneweather.org/sao_paulo/30_days/" id="ww_73191feb4cc90_u"
                target="_blank">Weather forecast Sao Paulo 30 days</a></div>
            <script async src="https://app2.weatherwidget.org/js/?id=ww_73191feb4cc90"></script>
            <p id="horario" class="fw-bold text-center text-uppercase lh-1" style="font-size: 35px;">
              10:52</p>
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
              <div class="col-4 bg-light p-1">
                <div class="sala w-100 bg-secondary d-flex justify-content-center align-items-center">
                  <p class="titulo-sala fs-1 fw-bold text-light">SALA 1</p>
                </div>
              </div>
              <div class="col-2"></div>
              <div class="col-4 bg-light p-1 flex-column">
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
  
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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