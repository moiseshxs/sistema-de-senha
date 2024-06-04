<?php
ob_flush();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Controle de DataBase</title>
  <link rel="icon" type="image/x-icon" href="./imgs/etec-guaianazes.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="../css/admin2.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <div id="loader-space">
    <div class="loader"></div>
  </div>
  <div class="container-fluid p-0 w-100 vh-100">
    <div class="row m-0 w-100 h-15">
      <div class="col d-flex align-items-center">
        <a href="../index.php"><img src="./imgs/home.png" alt="Home" class="imga home">
        </a>
      </div>
      <div class="col-5 d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-bold text-uppercase">Controle de DataBase</p>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <?php include("./componentes/logo.php"); ?>
      </div>
    </div>
    <div class="row m-0 w-100 h-70 bg-cinza">
      <div class="col d-flex justify-content-around align-items-center">
        <div id="banco" class="excluir bg-success">
          <img src="./imgs/banco.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <p class="fs-1 fw-bold text-light">Resetar Banco</p>
        </div>
        <div id="senhas" class="excluir bg-success">
          <img src="./imgs/bancosenha.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <p class="fs-1 fw-bold text-light">Resetar Senhas</p>
        </div>
      </div>
    </div>
    <?php include("./componentes/menu.php"); ?>
  </div>

  <script async src="https://app2.weatherwidget.org/js/?id=ww_f5c4ab7d7d6c6"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>
  <script src="./js/database.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</body>

</html>
<?php
ob_end_flush();
?>