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
    <div class="row m-0 w-100 h-15" >
      <div class="col d-flex align-items-center">
        <a href="../index.php"><img src="./imgs/home.png" alt="" class="imga home">
        </a>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <p class="fs-1 fw-bold text-uppercase">Controle de Salas</p>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <?php include ("./componentes/logo.php");?>
      </div>
    </div>
    <div class="row m-0 w-100 h-70 bg-cinza">
      <div class="col"></div>
      <div class="col-4 d-flex align-items-center">
        <div class="select w-100 overflow-auto" id="salasTotal">
          
        </div>
      </div>
      <div class="col"></div>
      <div class="col-4 d-flex align-items-center">
        <div class="select w-100" id="allGuiches">
                
        </div>
      </div>
      <div class="col"></div>

    </div>

    <?php include ("./componentes/menu.php");?>
  </div>

    <?php include ("./componentes/modais-controleSalas.php");?>

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
  <script src="./js/geral.js"></script>
</body>

</html>
<?php  
  ob_end_flush();
?>