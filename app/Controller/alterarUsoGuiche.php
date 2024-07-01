<?php
include_once('../Model/Guiche.php');
$guiche = new Guiche();
$status = $guiche->alteraStatus($_POST['idGuiche'], $_POST['status']);
$response = array('success' => true);
echo json_encode($response);



?>