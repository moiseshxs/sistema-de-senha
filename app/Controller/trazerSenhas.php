<?php  
    require_once(__DIR__."../../Model/Senha.php");
    $senha = new Senha();
    $senhas = $senha->getSenhas();
    $response = array("success" => true, "result" => $senhas);
    
    echo json_encode($response);
?>