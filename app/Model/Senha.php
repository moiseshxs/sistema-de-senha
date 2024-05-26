<?php
    require_once(__DIR__."/Conexao.php");
    class Senha{
        protected $senha;
        protected $statusSenha;
        protected $updatedAt;
        protected $idGuiche;
        protected $tipoSenha;

        public function storeSenha($senha)
        {
            
            $pdo = Conexao::conexao();
            $com = "INSERT INTO tbsenha VALUES (NULL, :s,:ss,:ts, :ua, :ig)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":s", $senha->getSenha());
            $stmt->bindValue(":ss", $senha->getStatusSenha());
            $stmt->bindValue(":ts", $senha->getTipoSenha());
            $stmt->bindValue(":ua", $senha->getUpdatedAt());
            $stmt->bindValue(":ig", $senha->getIdGuiche());
            $stmt->execute();
            return $pdo->lastInsertId();
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
                $senhas['am'] = ["senha" => "AM000"];
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
                $senhas['ar'] = ["senha" => "AR000"];
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
                $senhas['ap'] = ["senha" => "AM000"];
            }
            return $senhas;
        }
        public function getSenhas($valor){
            $pdo = Conexao::conexao();
            $senhas = array();
            if($valor == "Matricula") {
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id FROM `tbsenha`
                 WHERE (statusSenha =1 AND tipoSenha = 'Triagem')
                  
                ORDER BY updateAt DESC
                LIMIT 8";
            } 
            else if($valor == "Matricula-Atendidos"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id FROM `tbsenha`
                 WHERE  (statusSenha = 1 AND tipoSenha = 'Matricula') OR (statusSenha != 0 AND tipoSenha = 'Apm')
                ORDER BY updateAt DESC
                LIMIT 8";
            }
            else if($valor == "Matriculo-Nao"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id FROM `tbsenha`
                 WHERE  (statusSenha = 2 AND tipoSenha = 'Matricula') 
                ORDER BY updateAt DESC
                LIMIT 8";
            }
            else {
                $comAM = "SELECT  senha, statusSenha as 'status', idSenha as id  FROM tbsenha
                WHERE statusSenha !=0
                
                ORDER BY updateAt DESC
                LIMIT 8";
            }
            $stmt = $pdo->prepare($comAM);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                $senhas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                return false;
            }
            return $senhas;
        }

        public function getSenhaCalledInGuiche($idSenha)
        {
            $pdo = Conexao::conexao();
            $com = "SELECT senha FROM tbsenha
            WHERE idSenha = :id
            ORDER BY updateAt DESC
            LIMIT 1";
            $stmt= $pdo->prepare($com);
            $stmt->bindParam(":id", $idSenha);
            $stmt->execute();
            if($stmt->rowCount() > 0){
                return $stmt->fetch(PDO::FETCH_ASSOC);
            }
            return false;
        }

        public function getSenhasWithGuiche(){
            $pdo = Conexao::conexao();
            $com = "SELECT senha, nomeSala as sala, nomeGuiche as guiche, tipoSenha as tipo FROM tbsenha
            INNER JOIN tbguiche ON `tbsenha`.`idGuiche` = `tbGuiche`.`idGuiche`
            INNER JOIN tbSala ON `tbguiche`.`idSala` = `tbsala`.`idSala`
            ORDER BY updateAt DESC
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
        public function reCall($senha, $data){
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET updateAt = :ua,  statusSenha = '0' WHERE senha = :s";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ua", $data);
            $stmt->bindValue(":s", $senha);
            $stmt->execute();
            if($stmt->rowCount() >0){
                return true;
            }
            return false;
        }
        public static function getSenhasComparecidasMatricula($tipo) {
            $pdo = Conexao::conexao();
            $com = "SELECT senha FROM tbsenha
            WHERE tipoSenha = 'Matricula'
            AND statusSenha = :t
            ORDER BY updateAt DESC
            LIMIT 8";
            $stmt = $pdo->prepare($com);
            $stmt->bindParam(":t", $tipo);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                $senhasC = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
            return $senhasC;
        }

        public static function updateTriagem($id, $status)
        {
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET statusSenha = :ss WHERE idSenha = :id";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ss", $status);
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            if($stmt->rowCount() >0){
                return true;
            }
            return false;
        }
        public static function updateMatricula($id, $status, $data) {
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET statusSenha = :ss, updateAt = :ua, tipoSenha ='Matricula' WHERE idSenha = :id";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ss", $status);
            $stmt->bindValue(":ua", $data);
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            if($stmt->rowCount() >0){
                return true;
            }
            return false;
        }
        public static function updateSenhaMatriculaAtendida($senhaId, $tipo, $status) {
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET tipoSenha = :ts, statusSenha = :ss WHERE idSenha = :id";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ts", $tipo);
            $stmt->bindValue(":ss", $status);
            $stmt->bindParam(":id", $senhaId);
            $stmt->execute();
            if($stmt->rowCount() >0) {
                return true;
            } else {
                return false;
            }
        }
        public function setSenha($senha){
            $this->senha = $senha;
        }
        public function setStatusSenha($statusSenha){
            $this->statusSenha = $statusSenha;
        }
        public function setTipoSenha($tipoSenha){
            $this->tipoSenha = $tipoSenha;
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
        public function getTipoSenha(){
            return $this->tipoSenha;
        }
        public function getUpdatedAt(){
            return $this->updatedAt;
        }
        public function getIdGuiche(){
            return $this->idGuiche;
        }
    }


?>