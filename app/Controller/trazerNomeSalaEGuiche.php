<?php
include_once('../Model/Senha.php');

$senha = new Senha();
$resposta = $senha->trazerNomeSalaEGuiche($_POST['id']);
echo json_encode($resposta);




?>