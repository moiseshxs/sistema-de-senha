<?php
include_once("../Model/Guiche.php");
$guiche = new Guiche();
$guiches = $guiche->selectAllGuicheDaSala($_POST['idSala']);
$response = array("success" => true, "guiches" => $guiches);
    
echo json_encode($response);


?>