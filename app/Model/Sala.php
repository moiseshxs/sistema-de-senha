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
        public function storeSala() {

            
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
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        }
    }



?>