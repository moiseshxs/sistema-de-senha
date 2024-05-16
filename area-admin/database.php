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
      <div class="col-5 d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-semibold text-uppercase">Controle de DataBase</p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row m-0 w-100 meio1">
      <div class="col d-flex justify-content-around align-items-center">
        <div class="excluir bg-success">
          <img src="./imgs/banco.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <p class="fs-1 fw-bold text-light">Resetar Banco</p>
        </div>
        <div class="excluir bg-success">
          <img src="./imgs/bancosenha.jpg" alt="" class="fundo">
          <div class="overlay"></div>
          <p class="fs-1 fw-bold text-light">Resetar Senhas</p>
        </div>
      </div>
    </div>
    <div class="linha1" style="width: 100%; height: 5%"></div>
    <?php include ("./componentes/menu.php");?>

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