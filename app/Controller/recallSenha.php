<?php  
    require_once(__DIR__."../../Model/Senha.php");
    $senha = new Senha();
    date_default_timezone_set('America/Sao_Paulo');
    $data = date("Y-m-d H:i:s");
    $troca = $senha->reCall($_POST['senha'], $data, $_POST['idGuiche']);
    $response = array("success" => true, "troca" => $troca );
    echo json_encode($response);

?>