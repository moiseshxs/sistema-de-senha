<?php
include_once('../Model/Guiche.php');
$guiche = new Guiche();
$verificado = $guiche->verificaGuiche($_POST['idGuiche']);
$response = array('success' => true, 'verificado' => $verificado );
echo json_encode($response);


?>