<?php
require_once(__DIR__."/Conexao.php");
class Guiche {
    protected $nomeGuiche;
    protected $idSala;


    public function setNomeGuiche($nomeGuiche) {
        $this->nomeGuiche = $nomeGuiche;
    }
    public function setIdSala($idSala) {
        $this->idSala = $idSala;
    }

    public function getNomeGuiche() {
        return $this->nomeGuiche;
    }
    public function getIdSala() {
        return $this->idSala;
    }

    public function storeGuicheSala($salaId, $nomeGuiche) {
        $pdo = Conexao::conexao();
        $com = "INSERT INTO tbguiche VALUES(NULL, :ng, :is)";
        $stmt = $pdo->prepare($com);
        $stmt->bindValue(":ng", $nomeGuiche->getNomeGuiche());
        $stmt->bindValue(":is", $salaId);
        $stmt->execute();
    }
    public function selectAllGuicheDaSala($id) {
        $pdo = Conexao::conexao();
        $com = "SELECT * FROM tbguiche WHERE idSala = :is";
        $stmt = $pdo->prepare($com);
        $stmt->bindParam(":is", $id);
        $stmt->execute();
        if($stmt->rowCount() > 0) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return false;
        }

    }
    public function verificaGuiche($id) {
        $pdo = Conexao::conexao();
        $com = "SELECT statusGuiche FROM tbguiche WHERE idGuiche = :ig";
        $stmt = $pdo->prepare($com);
        $stmt->bindParam(':ig', $id);
        $stmt->execute();
        if($stmt->rowCount() > 0) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            return false;
        }

    }   
    public function alteraStatus($id, $status) {
        $pdo = Conexao::conexao();
        $com = "UPDATE tbguiche set statusGuiche = :s WHERE idGuiche =:ig";
        $stmt = $pdo->prepare($com);
        $stmt->bindParam(':ig', $id);
        $stmt->bindValue(":s", $status);
        $stmt->execute();
        if($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

}

?>