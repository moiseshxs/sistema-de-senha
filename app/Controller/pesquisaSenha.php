<?php
include_once('../Model/Senha.php');
$senha = new Senha();
$tudo = $senha->pesquisarSenhas($_POST['busca']);
$response = (["success" => true, "result" => $tudo]);
echo json_encode($response)


?>