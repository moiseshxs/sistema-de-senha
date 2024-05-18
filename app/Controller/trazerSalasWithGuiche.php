<?php
    require_once(__DIR__."../../Model/Sala.php");
    $sala = new Sala();
    $salas = $sala->selectAllGuicheWithSala();
    $response = array("success" => true, "result" => $salas);
    
    echo json_encode($response);


?>