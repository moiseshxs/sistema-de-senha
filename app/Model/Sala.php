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
        public function selectAllGuicheWithSala() {
            $pdo = Conexao::conexao();
            $com = "SELECT nomeSala as sala, nomeGuiche as guiche FROM tbsala as s
            INNER JOIN tbguiche g
            ON s.idSala = g.idSala";
            $stmt = $pdo->prepare($com);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        }
        public function selectSalaById($nomeSala) {
            $pdo = Conexao::conexao();
            $com = "SELECT idSala FROM tbsala WHERE nomeSala = :ns";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ns", $nomeSala->getNomeSala());
            $stmt->execute();
            return $stmt->fetchAll();
             
        }
        public function trocarNomeSala($nome,$id) {
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsala SET nomeSala = :ns WHERE idSala = :is";
            $stmt = $pdo->prepare($com);
            $stmt->bindParam(":ns", $nome);
            $stmt->bindParam(":is", $id);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                return true;
            } else {
                return false;
            } 
        }
    }



?>