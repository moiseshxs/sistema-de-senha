<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css" ;>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <title>Chamador - Cliente</title>
    <link rel="icon" type="image/x-icon" href="../area-admin/imgs/etec-guaianazes.png">
</head>

<body>
    <section class="container-fluid p-0">
        <div class="row vh-100 vw-100 m-0">

            <div id="lasts" class="col-4 border d-flex align-items-center justify-content-start flex-column pt-5"
                style="background-color: #2B8C44;">
                <div
                    class="row w-75 d-flex align-items-center overflow-auto justify-content-center border-bottom border-light border-4">
                    <p class="fs-2 fw-bold text-center text-uppercase text-light lh-1">Chamadas recentes</p>
                </div>
                <p class="fs-3 my-3 fw-bold text-white">Não há chamadas no histórico</p>
                
            </div>

            <div class="col-8 p-0 d-flex align-items-center justify-content-center flex-column">
                <div class="row" style="height: 80%;">
                    <div class="row">
                        <div class="col-2 d-flex align-items-center justify-content-center">
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            <p class="fw-bold text-center text-uppercase text-dark lh-1" style="font-size: 50px;">senha
                            </p>
                        </div>
                        <div class="col-2 d-flex align-items-center justify-content-center">
                        <?php include ("../area-admin/componentes/logo.php");?>
                        </div>
                    </div>

                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="row">
                            <div class="col d-flex align-items-center justify-content-center">
                                <p id="senhaAtual" class="fw-bold text-center text-uppercase text-dark lh-1"
                                    style="font-size: 150px;"><span style="color: #106018;">00</span>000</p>
                                    
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-center align-items-center"><p id="tipo"></p></div>
                        <div class="row">
                            <div class="col d-flex align-items-center justify-content-center flex-column">
                                <p class="fw-bold text-center text-uppercase lh-1" style="font-size: 25px;">Sala</p>
                                <p id="salaAtual" class="fw-bold text-center text-uppercase lh-1"
                                    style="font-size: 40px; color: #106018;">0</p>
                            </div>
                            <div class="col d-flex align-items-center justify-content-center flex-column">
                                <p class="fw-bold text-center text-uppercase lh-1" style="font-size: 25px;">Guichê</p>
                                <p id="guicheAtual" class="fw-bold text-center text-uppercase lh-1"
                                    style="font-size: 40px; color: #106018;">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row w-100 px-2" style="height: 20%; background-color: #c5c5c562;">

                    <div class="col d-flex align-items-center justify-content-center">
                        <div class="col-9">
                            <div class="row">
                                <div class="col">
                                    <p class="fw-bold text-uppercase lh-1" style="font-size: 15px; color:#B20000">Contato:</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <p class="fw-bold text-uppercase lh-1" style="font-size: 20px;">
                                    (11) 2551-9484</p>
                                <p class="fw-bold text-uppercase lh-1" style="font-size: 20px;">
                                    e118.egz@etec.sp.gov.br</p>
                            </div>
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-center">
                            <div id="ww_73191feb4cc90" v='1.3' loc='id'
                                a='{"t":"responsive","lang":"pt","sl_lpl":1,"ids":["wl1583"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"3","el_wfc":3,"cl_odd":"#00000000","el_nme":3}'>
                                Mais previsões: <a href="https://oneweather.org/sao_paulo/30_days/"
                                    id="ww_73191feb4cc90_u" target="_blank">Weather forecast Sao Paulo 30 days</a></div>
                            <script async src="https://app2.weatherwidget.org/js/?id=ww_73191feb4cc90"></script>
                            <p id="horario" class="fw-bold text-center text-uppercase lh-1" style="font-size: 35px;">
                                10:52</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="row bg-primary" style="height: 20%;">
                <div class="col-12 d-flex align-items-center justify-content-center" style="height: 50%; background-color: rgba(0, 0, 0, 0.404);">
                    <div class="scrolling-text">
                        <p class="fw-bold text-center text-uppercase lh-1 text-light" style="font-size: 50px;">Retire sua senha e aguarde ser chamado.</p>
                        <p class="fw-bold text-center text-uppercase lh-1 text-light" style="font-size: 50px;">Se atente a sala e o guichê informado.</p>
                        <p class="fw-bold text-center text-uppercase lh-1 text-light" style="font-size: 50px;">Informe seu tipo de atendimento ao atendente.</p>
                    </div>

                </div>
                <div class="col d-flex align-items-center justify-content-center">
                    <div class="col-10">
                        
                    </div>
                    <div class="col-2 d-flex align-items-center justify-content-center">
                        <div id="ww_73191feb4cc90" v='1.3' loc='id' a='{"t":"responsive","lang":"pt","sl_lpl":1,"ids":["wl1583"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"3","el_nme":3,"el_wfc":3,"cl_odd":"#00000000","el_cwi":3}'>Mais previsões: <a href="https://oneweather.org/sao_paulo/30_days/" id="ww_73191feb4cc90_u" target="_blank">Weather forecast Sao Paulo 30 days</a></div>
                        <p id="horario" class="fw-bold text-center text-uppercase lh-1" style="font-size: 35px;">10:52</p>
                    </div>                  
                </div>
            </div> -->
        </div>
    </section>

</body>
<!--SCRIPT BOOTSTRAP-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
<!--SCRIPT TEMPO-->
<script async src="https://app2.weatherwidget.org/js/?id=ww_73191feb4cc90"></script>
<!--SCRIPT GERAL-->
<script src="../js/script.js"></script>
<script src="./js/ajax-setup.js"></script>

</html>