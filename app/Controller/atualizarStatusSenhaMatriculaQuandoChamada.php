<?php
include_once('../Model/Senha.php');


if(isset($_POST['outra_etapa'])){
    $senha = new Senha();
    date_default_timezone_set('America/Sao_Paulo');
    if(isset($_POST['retomada'])){
        $data = null;
    }else{
        $data = date("Y-m-d H:i:s");
    }
    $troca = $senha->update($_POST['senha'],$_POST['status'], $_POST['tipo'], $_POST['idGuiche'], $data);
    $response = array("success" => true, "achou" => "caiu 3" );
    echo json_encode($response);
    }else{
    $senha = new Senha();
    date_default_timezone_set('America/Sao_Paulo');
    $data = date("Y-m-d H:i:s");
    $row = $senha->updateMatricula($_POST['idSenha'], $_POST['statusSenha'], $data, $_POST['idGuiche']);

    if($row) {
        echo json_encode([
            'success' => true,
            'achou' => "caiu 1",
        ]) ;
    } else {
        echo json_encode([
            'success' => true,
            'achou' =>"caiu 2",
        ]);
    }
    }
?>