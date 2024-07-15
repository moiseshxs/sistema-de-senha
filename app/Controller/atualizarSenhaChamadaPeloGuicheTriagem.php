<?php
include_once('../Model/Senha.php');

    $rows =Senha::updateTriagem($_POST['id'], $_POST['status']);

    if($rows){
        echo json_encode([
            'success' => true,
            'respostsaasdasd' => $rows
            
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'respostsaasdasd' => $rows
        ]);
    }

?>