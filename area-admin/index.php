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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../css/admin.css" />
  </head>

  <body>
    <div class="container-fluid vw-100 vh-100">
      <div class="content h-100 w-100">
        <div class="row cima bg-light d-flex align-itens-center">
          <div class="col vazia h-100 d-flex pt-2 justify-content-start">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="140px" height="71px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 304.82 155.09">
              <defs>
               <style type="text/css">
                
                 .fil1 {fill:#4A555C;fill-rule:nonzero}
                 .fil0 {fill:#B20000;fill-rule:nonzero}
                
               </style>
              </defs>
              <g id="Camada_x0020_1">
               <metadata id="CorelCorpID_0Corel-Layer"/>
               <path class="fil0" d="M48.12 154.57l-5.55 0 0 -3.09 -0.1 0c-1.49,2.41 -3.72,3.61 -6.68,3.61 -2.64,0 -4.75,-0.94 -6.33,-2.83 -1.59,-1.89 -2.38,-4.46 -2.38,-7.71 0,-3.44 0.89,-6.21 2.66,-8.31 1.77,-2.1 4.07,-3.14 6.91,-3.14 2.75,0 4.69,1.02 5.82,3.05l0.1 0 0 -12.61 5.55 0 0 31.03zm-5.47 -11.99c0,-1.48 -0.45,-2.71 -1.36,-3.68 -0.9,-0.98 -2.04,-1.47 -3.41,-1.47 -1.6,0 -2.86,0.62 -3.78,1.88 -0.93,1.24 -1.39,2.94 -1.39,5.09 0,2.01 0.45,3.57 1.34,4.68 0.89,1.11 2.09,1.66 3.61,1.66 1.47,0 2.66,-0.57 3.59,-1.73 0.93,-1.16 1.4,-2.64 1.4,-4.44l0 -1.99z"/>
               <path id="1" class="fil0" d="M72.21 145.65l-14.01 0c0.22,3.57 2.25,5.35 6.06,5.35 2.33,0 4.41,-0.61 6.23,-1.83l0 4.23c-1.94,1.13 -4.43,1.69 -7.48,1.69 -3.26,0 -5.8,-0.94 -7.62,-2.83 -1.81,-1.89 -2.72,-4.53 -2.72,-7.93 0,-3.32 0.97,-6.02 2.92,-8.11 1.96,-2.08 4.39,-3.12 7.32,-3.12 2.93,0 5.21,0.89 6.84,2.69 1.64,1.8 2.46,4.27 2.46,7.41l0 2.45zm-5.25 -3.65c0,-3.33 -1.37,-4.99 -4.11,-4.99 -1.15,0 -2.15,0.45 -3.02,1.36 -0.87,0.9 -1.42,2.12 -1.63,3.63l8.76 0z"/>
               <path id="2" class="fil0" d="M114.86 152.58c-2.89,1.67 -6.38,2.51 -10.46,2.51 -4.55,0 -8.17,-1.32 -10.86,-3.96 -2.68,-2.64 -4.03,-6.24 -4.03,-10.79 0,-4.58 1.47,-8.32 4.39,-11.24 2.93,-2.92 6.8,-4.39 11.62,-4.39 3.14,0 5.86,0.46 8.18,1.36l0 5.53c-2.26,-1.37 -5.04,-2.06 -8.34,-2.06 -2.91,0 -5.28,0.97 -7.12,2.89 -1.83,1.92 -2.74,4.46 -2.74,7.61 0,3.23 0.82,5.73 2.47,7.52 1.66,1.79 3.92,2.68 6.79,2.68 1.75,0 3.22,-0.28 4.39,-0.86l0 -6.48 -6.03 0 0 -4.63 11.74 0 0 14.31z"/>
               <path id="3" class="fil0" d="M139.39 154.57l-5.55 0 0 -3.23 -0.1 0c-1.54,2.51 -3.69,3.75 -6.43,3.75 -4.91,0 -7.36,-2.95 -7.36,-8.86l0 -12.63 5.56 0 0 12.05c0,3.39 1.33,5.09 3.96,5.09 1.29,0 2.34,-0.46 3.15,-1.38 0.82,-0.93 1.22,-2.17 1.22,-3.73l0 -12.03 5.55 0 0 20.97z"/>
               <path id="4" class="fil0" d="M145.67 134.93c0.95,-0.54 2.17,-0.98 3.67,-1.32 1.51,-0.34 2.86,-0.51 4.06,-0.51 5.67,0 8.5,2.88 8.5,8.62l0 12.85 -5.31 0 0 -3.09 -0.1 0c-1.41,2.41 -3.51,3.61 -6.29,3.61 -2.02,0 -3.62,-0.56 -4.81,-1.7 -1.18,-1.14 -1.77,-2.66 -1.77,-4.59 0,-4 2.38,-6.32 7.14,-6.96l5.85 -0.8c0,-2.67 -1.3,-4.01 -3.91,-4.01 -2.49,0 -4.83,0.78 -7.03,2.34l0 -4.44zm6.77 10.07c-2.39,0.3 -3.59,1.37 -3.59,3.2 0,0.84 0.28,1.5 0.86,2.02 0.57,0.52 1.34,0.78 2.31,0.78 1.33,0 2.43,-0.47 3.29,-1.41 0.87,-0.94 1.3,-2.11 1.3,-3.54l0 -1.59 -4.17 0.54z"/>
               <path id="5" class="fil0" d="M166.85 126.69c0,-0.85 0.3,-1.56 0.91,-2.13 0.6,-0.57 1.39,-0.86 2.34,-0.86 0.94,0 1.71,0.28 2.34,0.84 0.63,0.57 0.94,1.29 0.94,2.15 0,0.87 -0.31,1.59 -0.93,2.16 -0.62,0.57 -1.4,0.86 -2.35,0.86 -0.94,0 -1.72,-0.29 -2.33,-0.88 -0.62,-0.59 -0.92,-1.3 -0.92,-2.14zm0.44 27.88l0 -20.97 5.54 0 0 20.97 -5.54 0z"/>
               <path id="6" class="fil0" d="M179.08 134.93c0.95,-0.54 2.17,-0.98 3.67,-1.32 1.51,-0.34 2.86,-0.51 4.06,-0.51 5.66,0 8.5,2.88 8.5,8.62l0 12.85 -5.31 0 0 -3.09 -0.1 0c-1.41,2.41 -3.51,3.61 -6.29,3.61 -2.02,0 -3.62,-0.56 -4.81,-1.7 -1.18,-1.14 -1.78,-2.66 -1.78,-4.59 0,-4 2.39,-6.32 7.15,-6.96l5.85 -0.8c0,-2.67 -1.31,-4.01 -3.92,-4.01 -2.48,0 -4.82,0.78 -7.02,2.34l0 -4.44zm6.77 10.07c-2.4,0.3 -3.59,1.37 -3.59,3.2 0,0.84 0.28,1.5 0.85,2.02 0.58,0.52 1.35,0.78 2.32,0.78 1.33,0 2.43,-0.47 3.29,-1.41 0.87,-0.94 1.3,-2.11 1.3,-3.54l0 -1.59 -4.17 0.54z"/>
               <path id="7" class="fil0" d="M220.19 154.57l-5.54 0 0 -11.75c0,-3.59 -1.3,-5.39 -3.89,-5.39 -1.31,0 -2.37,0.49 -3.19,1.47 -0.82,0.97 -1.23,2.21 -1.23,3.72l0 11.95 -5.56 0 0 -20.97 5.56 0 0 3.37 0.07 0c1.54,-2.58 3.8,-3.87 6.8,-3.87 4.66,0 6.98,2.88 6.98,8.64l0 12.83z"/>
               <path id="8" class="fil0" d="M226.14 134.93c0.95,-0.54 2.17,-0.98 3.67,-1.32 1.51,-0.34 2.86,-0.51 4.06,-0.51 5.66,0 8.5,2.88 8.5,8.62l0 12.85 -5.31 0 0 -3.09 -0.1 0c-1.41,2.41 -3.51,3.61 -6.29,3.61 -2.02,0 -3.62,-0.56 -4.81,-1.7 -1.18,-1.14 -1.78,-2.66 -1.78,-4.59 0,-4 2.39,-6.32 7.15,-6.96l5.85 -0.8c0,-2.67 -1.31,-4.01 -3.91,-4.01 -2.49,0 -4.83,0.78 -7.03,2.34l0 -4.44zm6.77 10.07c-2.4,0.3 -3.59,1.37 -3.59,3.2 0,0.84 0.28,1.5 0.85,2.02 0.58,0.52 1.35,0.78 2.32,0.78 1.33,0 2.43,-0.47 3.29,-1.41 0.87,-0.94 1.3,-2.11 1.3,-3.54l0 -1.59 -4.17 0.54z"/>
               <polygon id="9" class="fil0" points="263.84,154.57 245.5,154.57 245.5,152.38 256.56,137.83 246.56,137.83 246.56,133.6 263.81,133.6 263.81,136.17 253.13,150.34 263.84,150.34 "/>
               <path id="10" class="fil0" d="M285.85 145.65l-14 0c0.22,3.57 2.24,5.35 6.06,5.35 2.33,0 4.41,-0.61 6.23,-1.83l0 4.23c-1.94,1.13 -4.44,1.69 -7.48,1.69 -3.27,0 -5.8,-0.94 -7.62,-2.83 -1.81,-1.89 -2.73,-4.53 -2.73,-7.93 0,-3.32 0.98,-6.02 2.93,-8.11 1.95,-2.08 4.39,-3.12 7.31,-3.12 2.93,0 5.22,0.89 6.85,2.69 1.64,1.8 2.45,4.27 2.45,7.41l0 2.45zm-5.24 -3.65c0,-3.33 -1.37,-4.99 -4.12,-4.99 -1.14,0 -2.14,0.45 -3.01,1.36 -0.88,0.9 -1.42,2.12 -1.63,3.63l8.76 0z"/>
               <path id="11" class="fil0" d="M289.37 149.19c2.08,1.3 4.13,1.95 6.15,1.95 2.6,0 3.91,-0.74 3.91,-2.21 0,-1.03 -1.04,-1.89 -3.09,-2.6 -3.01,-1.01 -4.92,-2 -5.73,-2.98 -0.81,-0.98 -1.22,-2.24 -1.22,-3.76 0,-2.03 0.82,-3.61 2.47,-4.77 1.66,-1.15 3.78,-1.72 6.37,-1.72 1.81,0 3.62,0.29 5.43,0.86l0 4.53c-1.63,-0.97 -3.43,-1.46 -5.37,-1.46 -1.03,0 -1.85,0.19 -2.48,0.58 -0.62,0.38 -0.93,0.9 -0.93,1.53 0,1.06 0.87,1.89 2.62,2.5 1.98,0.72 3.43,1.32 4.36,1.81 0.94,0.48 1.66,1.14 2.18,1.98 0.52,0.84 0.78,1.83 0.78,2.96 0,2.12 -0.85,3.77 -2.55,4.94 -1.7,1.18 -3.93,1.76 -6.72,1.76 -2.33,0 -4.4,-0.37 -6.18,-1.12l0 -4.78z"/>
               <polygon class="fil1" points="75.66,110.59 75.66,89.78 23.48,89.78 23.48,64.96 69.86,64.96 69.86,44.44 23.48,44.44 23.48,20.66 75.36,20.66 75.36,0 0,0 0,110.59 "/>
               <path id="1" class="fil1" d="M139.42 110.59l0 -17.84 -9.81 0c-3.86,0 -6.71,-0.82 -8.54,-2.45 -1.84,-1.64 -2.75,-4.34 -2.75,-8.1l0 -32.55 20.81 0 0 -17.69 -20.81 0 0 -21.11 -21.71 0 0 21.11 -11.29 0 0 17.69 11.29 0 0 33.74c0,8.91 2.76,15.68 8.25,20.29 5.5,4.6 13.06,6.91 22.67,6.91l11.89 0z"/>
               <path id="2" class="fil1" d="M221.17 84.58l-20.21 0c0,7.13 -4.95,10.7 -14.86,10.7 -4.76,0 -8.55,-1.19 -11.37,-3.57 -2.83,-2.38 -4.24,-5.95 -4.24,-10.7l0 -3.42 50.83 0 0 -14.12c0,-10.41 -3.22,-18.43 -9.66,-24.08 -6.44,-5.65 -15.01,-8.47 -25.71,-8.47 -10.61,0 -19.15,2.87 -25.64,8.62 -6.49,5.75 -9.74,13.57 -9.74,23.48l0 18.43c0,9.62 3.25,17.12 9.74,22.52 6.49,5.4 15.03,8.1 25.64,8.1 10.7,0 19.25,-2.37 25.64,-7.13 6.39,-4.76 9.58,-11.25 9.58,-19.47l0 -0.89zm-19.76 -19.77l-30.92 0 0 -1.79c0,-4.95 1.36,-8.74 4.09,-11.37 2.72,-2.62 6.56,-3.94 11.52,-3.94 4.85,0 8.62,1.29 11.29,3.87 2.68,2.57 4.02,6.34 4.02,11.29l0 1.94z"/>
               <path id="3" class="fil1" d="M303.97 79.82l-20.22 0c0,9.51 -4.8,14.27 -14.42,14.27 -9.51,0 -14.27,-5.01 -14.27,-15.01l0 -15.31c0,-10.01 4.76,-15.02 14.27,-15.02 9.62,0 14.42,4.81 14.42,14.42l20.22 0 0 -1.34c0,-10 -3.1,-17.66 -9.29,-22.96 -6.2,-5.3 -14.64,-7.95 -25.35,-7.95 -10.6,0 -19.02,2.75 -25.26,8.25 -6.25,5.5 -9.37,13.1 -9.37,22.81l0 19.03c0,9.71 3.12,17.31 9.37,22.81 6.24,5.5 14.66,8.25 25.26,8.25 10.71,0 19.15,-2.65 25.35,-7.95 6.19,-5.3 9.29,-12.96 9.29,-22.96l0 -1.34z"/>
              </g>
             </svg>
          </div>
          <div class="col d-flex flex-column senha-atual h-100">
            <div
              class=" h-25 d-flex justify-content-center fs-4 fw-bold text-uppercase"
            >
              <p class="text-center" style="font-size: 30px;">Senha Atual</p>
            </div>
            <div class=" h-75 d-flex justify-content-center fs-1 fw-bold">
              <p class="text-center" style="font-size: 60px;"><span class="text-success">AP</span>000</p>
            </div>
          </div>
          <div class="col d-flex flex-column suas-informacoes h-100 pe-3">
            <div
              class=" d-flex justify-content-end fs-4 fw-bold text-uppercase"
            >
              Suas Informações
            </div>
            <div class=" d-flex justify-content-end h5">Sala: 3</div>
            
            <div class=" d-flex justify-content-end h5">Guichê: 2</div>
            <input type="hidden" id="guiche" value="2">
          </div>
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
              
              <div id="salvarAM" class="senha border-matricula bg-cinza"><p id="senhaAM" class="m-0 fs-1 fw-bold"><span class="text-dark">AM</span>001</p></div>
              
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
              <div id="salvarAR" class="senha border-remanescente bg-cinza"><p id="senhaAR" class="m-0 fs-1 fw-bold"><span class="text-primary-emphasis">AR</span>001</p></div>
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
              <div id="salvarAP" class="senha border-preferencial bg-cinza"><p id="senhaAP" class="m-0 fs-1 fw-bold"><span class="text-success">AP</span>001</p></div>
            </div>
          </div>
          <div class="col p-0 bg-cinza">
            <div class="titulo listas">
              <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
                Listagem
              </div>
              <div class="text2 h-50 w-100 text-center text-light h3">
                Próximos
              </div>
            </div>
            <div class="conteudo d-flex flex-column justify-content-start">
              <div class="row item border-bottom border-secondary">
                <div class="col d-flex align-items-center justify-content-center"><p class="h3 fw-bold">AP001</p></div>
                <div class="col d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>
              </div>
            </div>
          </div>
          <div class="col p-0 ">
            <div class="titulo listas">
              <div class="text1 h-25 w-100 text-center text-light h6 fw-normal">
                Listagem
              </div>
              <div class="text2 h-50 w-100 text-center text-light h3">
                Ultimos
              </div>
            </div>
            <div class="conteudo overflow-auto d-flex flex-column justify-content-start">
              <div id="ultimos" class="row item">
                <div class="col d-flex align-items-center justify-content-center"><p class="h3 fw-bold">AP001</p></div>
                <div class="col d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row baixo bg-light d-flex align-items-center">
          <div class="col-2 d-flex align-items-center justify-content-center">
            <p class="fw-bold text-center text-uppercase lh-1" style="font-size: 35px;">10:52</p>
        </div>
          <div class="col-10"><div id="ww_f5c4ab7d7d6c6" v='1.3' loc='auto'
          a='{"t":"ticker","lang":"pt","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3}'>
          Mais previsões: <a href="https://oneweather.org/pt/lisbon/25_days/" id="ww_f5c4ab7d7d6c6_u"
              target="_blank">Meteorologia Lisboa 25 dias</a></div></div>
          

        </div>
      </div>
    </div>
    <script async src="https://app2.weatherwidget.org/js/?id=ww_f5c4ab7d7d6c6"></script>  
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
      integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script src="./js/ajax-setup.js"></script>
  </body>
</html>
<?php  
  ob_end_flush();
?>