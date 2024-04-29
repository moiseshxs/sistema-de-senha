<?php 
    class Conexao{
       

        public static function conexao(){
        $db = "dbchamadordesenhas";
        $user = "root";
        $password = "";
        $host = "localhost";

        try{
            $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
        }catch(PDOException $e){
            echo $e->getMessage();
        }
        return $pdo;
        }
    }





?>