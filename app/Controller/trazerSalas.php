<?php
require_once(__DIR__."../../Model/Sala.php");
$sala = new Sala();
$salas = $sala->selectAllSala();

$response = array("success" => true, "salas" => $salas);
    
echo json_encode($response);


?>