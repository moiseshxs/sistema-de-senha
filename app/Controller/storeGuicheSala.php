<?php
    include_once("../Model/Guiche.php");
    $guiche = new Guiche();
    $guiche->setNomeGuiche($_POST['nameGuiche']);
    $guiches = $guiche->storeGuicheSala($_POST['idSala'], $guiche);
    
    echo json_encode($guiches);


?>