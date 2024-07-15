<?php 
    require_once(__DIR__."../../Model/Senha.php");
    $senha = new Senha();
    date_default_timezone_set('America/Sao_Paulo');
    $data = date("Y-m-d H:i:s");
    $senha->setSenha($_POST['senha']);
    $senha->setStatusSenha("0");
    $senha->setTipoSenha($_POST['tipo']);
    $senha->setUpdatedAt($data);
    $senha->setIdGuiche($_POST['guiche']);
    $res = $senha->storeSenha($senha);

    if($res){
        $senhas = $senha->getLastSenhas();
        $response = array("success" => true,
            "senhas" => $senhas,
            "resposta" => $res

        );
        
        echo json_encode($response);
    }else{
        echo json_encode([
            "success" => true,
            "resposta" => false
        ]);
    }

?>