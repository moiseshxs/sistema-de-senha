<?php  
    require_once(__DIR__."../../Model/Senha.php");
    $senha = new Senha();
    $limit = 8 * $_POST['limit'];
    $senhas = $senha->getSenhas($_POST['tipo'], $limit);
    $response = array("success" => true, "result" => $senhas);
    
    echo json_encode($response);
?>