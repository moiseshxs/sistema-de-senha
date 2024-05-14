<?php
require_once(__DIR__."../../Model/Sala.php");
$sala = new Sala();
$sala->setNomeSala($_POST['nomeSala']);
$sala->storeSala($sala);

$response = array("success" => true, "sala" => $sala);
    
echo json_encode($response);



?>