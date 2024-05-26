<?php
include_once('../Model/Senha.php');
$senha = new Senha();
$senhas = $senha->getSenhasComparecidasMatricula($_POST['tipo']);

$response = array("success" => true, "senha" => $senhas);
echo json_encode($response);


?>