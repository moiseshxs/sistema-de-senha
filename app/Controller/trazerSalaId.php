<?php
require_once(__DIR__."../../Model/Sala.php");
$sala = new Sala();
$sala->setNomeSala($_POST['salaNome']);
$id = $sala->selectSalaById($sala);

echo json_encode($id);


?>