<?php
ob_flush();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bem-Vindo!</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="icon" type="image/x-icon" href="./area-admin/imgs/etec-guaianazes.png">
  <link rel="stylesheet" href="./css/entrada.css">
</head>

<body>
  <div class="container-fluid p-0 vw-100 vh-100">
    <div class="row m-0 w-100 h-15">
      <div class="col d-flex align-items-center">
        <?php include("./area-admin/componentes/logo.php"); ?>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-bold text-uppercase">Sistema de Senha Etec</p>
      </div>
      <div class="col d-flex align-items-center justify-content-end">
        <button type="button" class="btn btn-success btn-help" data-bs-toggle="modal" data-bs-target="#exampleModal">
          ?
        </button>
      </div>
    </div>
    <div class="row m-0 w-100 h-70 bg-cinza">
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 bg-success d-flex justify-content-center align-items-center">
          <img src="./area-admin/imgs/admin.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./area-admin/controleSalas.php">
            <p class="fs-1 fw-bold text-light">ADM</p>
          </a>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 bg-success d-flex justify-content-center align-items-center">
          <img src="./area-admin/imgs/atendimento.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./area-admin/escolha.php">
            <p class="fs-1 fw-bold text-light">ATENDIMENTO</p>
          </a>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 bg-success d-flex justify-content-center align-items-center">
          <img src="./area-admin/imgs/visor.png" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./area-cliente/index.php">
            <p class="fs-1 fw-bold text-light">VISOR</p>
          </a>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Ajuda</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="fw-bold">Escolha como quer entrar no sistema</p>

          <p>● <span class="fw-bold">Adm:</span> Administre as salas e o banco de dados</p>

          <p>● <span class="fw-bold">Atendimento:</span> Após escolher o tipo de atendimento e sua sala você pode começar a chamar</p>

          <p>● <span class="fw-bold">Visor:</span> Essa tela irá mostrar as senhas chamadas para as pessoas a serem atendidas</p>

        </div>
      </div>
    </div>
  </div>

  </div>

  <script async src="https://app2.weatherwidget.org/js/?id=ww_f5c4ab7d7d6c6"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>
  <script src="./js/script.js"></script>
</body>

</html>
<?php
ob_end_flush();
?>