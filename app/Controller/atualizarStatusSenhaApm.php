<?php
include_once('../Model/Senha.php');
$senha = new Senha();
date_default_timezone_set('America/Sao_Paulo');
$data = date("Y-m-d H:i:s");
$row = $senha->updateApm($_POST['idSenha'], $_POST['statusSenha'], $data);

if($row) {
    echo json_encode([
        'success' => true,
        'foi' => 'HAHAHAH',
    ]) ;
} else {
    echo json_encode([
        'error' => true,
    ]);
}
?>