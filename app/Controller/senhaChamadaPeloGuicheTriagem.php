<?php 
include_once('../Model/Senha.php');



$senha = new Senha();
$senha = $senha->getSenhaCalledInGuiche($_POST['idGuiche']);
$response = array([
    'success' => true,
    'senha' => $senha
]);

echo json_encode($response);



?>