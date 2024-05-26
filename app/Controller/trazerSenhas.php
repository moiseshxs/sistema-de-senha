<?php  
    require_once(__DIR__."../../Model/Senha.php");
    $senha = new Senha();
    $senhas = $senha->getSenhas($_POST['tipo']);
    $response = array("success" => true, "result" => $senhas);
    
    echo json_encode($response);
?>