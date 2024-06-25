<?php 
    class Conexao{
       

        public static function conexao(){
        $db = "bdchamadordesenhas";
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

        public static function resetarBanco(){
            $pdo = Conexao::conexao();
            $pdo->query("DROP TABLE IF EXISTS tbsenha");
            $pdo->query("DROP TABLE IF EXISTS tbguiche");
            $pdo->query("DROP TABLE IF EXISTS tbsala");
            $pdo->query("CREATE TABLE tbsala(idSala INT PRIMARY KEY AUTO_INCREMENT, nomeSala VARCHAR(8))");
            $pdo->query("CREATE TABLE tbguiche(idGuiche INT PRIMARY KEY AUTO_INCREMENT, nomeGuiche VARCHAR(9), statusGuiche INT(1), idSala INT, FOREIGN KEY(idSala) REFERENCES tbsala(idSala))");
            $pdo->query("CREATE TABLE tbsenha(idSenha INT PRIMARY KEY AUTO_INCREMENT, senha VARCHAR(5), statusSenha BOOLEAN,tipoSenha VARCHAR(11), updateAt DATETIME, idGuiche INT, FOREIGN KEY(idGuiche) REFERENCES tbguiche(idGuiche))");
            $stmt = $pdo->prepare("INSERT INTO tbsala VALUES(NULL,'Sala 01'), (NULL, 'Sala 02'), (NULL, 'Sala 03')");
            
            $stmt->execute();
            $stmt = $pdo->prepare(
                "INSERT INTO tbguiche VALUES 
                (NULL, 'Guichê 01', 0, 1),
                (NULL, 'Guichê 02', 0, 1),
                (NULL, 'Guichê 01', 0, 2),
                (NULL, 'Guichê 02', 0, 2),
                (NULL, 'Guichê 01', 0, 3),
                (NULL, 'Guichê 02', 0, 3)"
                );
            $stmt->execute();
            return true;
        }
        public static function resetarSenhas(){
            $pdo = Conexao::conexao();
            $pdo->exec("TRUNCATE TABLE tbsenha");
            return true;
        }
    }





?>