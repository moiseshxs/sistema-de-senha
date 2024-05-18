<?php  
include_once('../Model/Conexao.php');

if(Conexao::resetarSenhas()){
    echo json_encode([
        'success' => true
    ]);
}



?>