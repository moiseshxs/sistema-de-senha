<?php
    require_once(__DIR__."/Conexao.php");
    class Senha{
        protected $senha;
        protected $statusSenha;
        protected $updatedAt;
        protected $idGuiche;

        public function storeSenha($senha)
        {
            
            $pdo = Conexao::conexao();
            $com = "INSERT INTO tbsenha VALUES (NULL, :s,:ss, :ua, :ig)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":s", $senha->getSenha());
            $stmt->bindValue(":ss", $senha->getStatusSenha());
            $stmt->bindValue(":ua", $senha->getUpdatedAt());
            $stmt->bindValue(":ig", $senha->getIdGuiche());
            $stmt->execute();
        }

        public function getLastSenhas(){
            $pdo = Conexao::conexao();
            $senhas = array();
            $comAM = "SELECT  senha FROM tbsenha
            WHERE senha LIKE 'AM%'
            ORDER BY senha DESC
            LIMIT 1";
            $stmt = $pdo->prepare($comAM);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas['am'] = $stmt->fetch(PDO::FETCH_ASSOC);
            }else{
                $senhas['am'] = "AM000";
            }

            $comAR = "SELECT  senha FROM tbsenha
            WHERE senha LIKE 'AR%'
            ORDER BY senha DESC
            LIMIT 1";
            $stmt = $pdo->prepare($comAR);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas['ar'] = $stmt->fetch(PDO::FETCH_ASSOC);
            }else{
                $senhas['ar'] = "AM000";
            }

            $comAP = "SELECT  senha FROM tbsenha
            WHERE senha LIKE 'AP%'
            ORDER BY senha DESC
            LIMIT 1";
            $stmt = $pdo->prepare($comAP);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas['ap'] = $stmt->fetch(PDO::FETCH_ASSOC);
            }else{
                $senhas['ap'] = "AM000";
            }
            return $senhas;
        }
        public function getSenhas(){
            $pdo = Conexao::conexao();
            $senhas = array();
            $comAM = "SELECT  senha FROM tbsenha
            ORDER BY idSenha DESC
            LIMIT 8";
            $stmt = $pdo->prepare($comAM);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                return false;
            }
            return $senhas;
        }

        public function getSenhasWithGuiche(){
            $pdo = Conexao::conexao();
            $com = "SELECT senha, nomeSala as sala, nomeGuiche as guiche FROM tbsenha
            INNER JOIN tbguiche ON `tbsenha`.`idGuiche` = `tbGuiche`.`idGuiche`
            INNER JOIN tbSala ON `tbguiche`.`idSala` = `tbsala`.`idSala`
            ORDER BY idSenha DESC
            LIMIT 5";
            $stmt = $pdo->prepare($com);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                return false;
            }
            return $senhas;
        }
        public function setSenha($senha){
            $this->senha = $senha;
        }
        public function setStatusSenha($statusSenha){
            $this->statusSenha = $statusSenha;
        }
        public function setUpdatedAt($updatedAt){
            $this->updatedAt = $updatedAt;
        }
        public function setIdGuiche($idGuiche){
            $this->idGuiche = $idGuiche;
        }
        public function getSenha(){
            return $this->senha;
        }
        public function getStatusSenha(){
            return $this->statusSenha;
        }
        public function getUpdatedAt(){
            return $this->updatedAt;
        }
        public function getIdGuiche(){
            return $this->idGuiche;
        }
    }


?>