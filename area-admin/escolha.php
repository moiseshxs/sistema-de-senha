<?php  
  ob_flush();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Escolha</title>
  <link rel="icon" type="image/x-icon" href="./imgs/etec-guaianazes.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="../css/admin2.css" />


</head>

<body>
  <div class="container-fluid p-0 vw-100 vh-100">
    <div class="row m-0 w-100 cima">
      <div class="col pt-1">
      <?php include ("./componentes/logo.php");?>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-semibold text-uppercase">tipo de atendimento</p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row m-0 w-100 meio">
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 d-flex justify-content-center align-items-center">
          <img src="./imgs/triagem.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./index.php">
          <p class="fs-1 fw-bold text-light">TRIAGEM</p>
          </a>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 d-flex justify-content-center align-items-center">
          <img src="./imgs/matricula.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./matricula.php">
          <p class="fs-1 fw-bold text-light">MATRICULA</p>
          </a>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-3  d-flex justify-content-center align-items-center">
        <div class="escolher w-100 d-flex justify-content-center align-items-center">
          <img src="./imgs/apm.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <a href="./apm.php">
          <p class="fs-1 fw-bold text-light">APM</p>
          </a>
        </div>

      </div>
      <div class="col"></div>
    </div>
    <div class="row m-0 w-100 baixo">
      <div class="col d-flex justify-content-end align-items-center "><button
          class="btn btn-sm btn-success tra fw-bold">SALVAR</button></div>
    </div>


  </div>

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
  <script src="./js/ajax-setup.js"></script>
</body>

</html>
<?php  
  ob_end_flush();
?>