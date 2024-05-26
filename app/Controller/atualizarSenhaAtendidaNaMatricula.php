<?php
include_once('../Model/Senha.php');
$senha = new Senha();
$senha->updateSenhaMatriculaAtendida($_POST['idSenha'], $_POST['tipo'], $_POST['status']);
$response = array("success" => true);
echo json_encode($response)

?> 