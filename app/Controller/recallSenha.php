<?php  
    require_once(__DIR__."../../Model/Senha.php");
    if(isset($_POST['outra_etapa'])){
        $senha = new Senha();
        date_default_timezone_set('America/Sao_Paulo');
        if(isset($_POST['retomada'])){
            $data = null;
        }else{
            $data = date("Y-m-d H:i:s");
        }
        $troca = $senha->update($_POST['senha'],$_POST['status'], $_POST['tipo'], $_POST['idGuiche'], $data);
        $response = array("success" => true, "troca" => true );
        echo json_encode($response);
    }else{
        $senha = new Senha();
        date_default_timezone_set('America/Sao_Paulo');
        $data = date("Y-m-d H:i:s");
        $troca = $senha->reCall($_POST['senha'], $data, $_POST['idGuiche']);
        $response = array("success" => true, "troca" => $troca );
        echo json_encode($response);
    }
?>