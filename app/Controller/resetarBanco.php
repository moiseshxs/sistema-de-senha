<?php 
    require_once(__DIR__."../../Model/Conexao.php");
    if(Conexao::resetarBanco()){
        echo json_encode([
            'success' => true
        ]);
    }


?>