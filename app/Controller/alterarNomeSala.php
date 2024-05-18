<?php
include_once("../Model/Sala.php");
$sala = new Sala();
$troca = $sala->trocarNomeSala($_POST['salaNome'], $_POST['salaId']);

echo json_encode($troca);


?>