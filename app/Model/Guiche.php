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

    public function storeGuiche() {

    }

}

?>