<?php
    require_once(__DIR__."/Conexao.php");
    class Sala {
        protected $nomeSala;


        public function setNomeSala($nomeSala) {
            $this->nomeSala = $nomeSala;
        }
        public function getNomeSala() {
            return $this->nomeSala;
        }
        public function storeSala($sala) {
            $pdo = Conexao::conexao();
            $com = "INSERT INTO tbsala VALUES (NULL, :s)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":s", $sala->getNomeSala());
            $stmt->execute();
            
        }
        public function selectAllSala() {
            $pdo = Conexao::conexao();
            $com = "SELECT * FROM tbsala";
            $stmt = $pdo->prepare($com);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        }
        public function selectAllGuicheComSala() {
            $pdo = Conexao::conexao();
            $com = "SELECT nomeSala as sala, nomeGuiche as guiche FROM tbsala as s
            INNER JOIN tbguiche g
            ON s.idSala = g.idSala";
            $stmt = $pdo->prepare($com);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                $salas = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $nome = "";
                $resultado = [];  
                $controller =0;
                foreach($salas as $sala){
                    if($nome == ""){
                    array_push($resultado[$controller]['sala'], $sala['sala']);
                    $nome =".";
                    }
                    if($resultado[$controller]['sala'] != $sala['sala']){
                        $controller++;
                    }
                    array_push($resultado[$controller]['guiches'], $sala['guiche']);

                }
                return $resultado;
            } else {
                return false;
            }
        }
    }



?>