<?php
    require_once(__DIR__."/Conexao.php");
    class Senha{
        protected $senha;
        protected $statusSenha;
        protected $updatedAt;
        protected $idGuiche;
        protected $tipoSenha;

        public function verificarSenhaNoBanco($senha)
        {
            $pdo = Conexao::conexao();
            $com = "SELECT senha from tbsenha WHERE senha = :s";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":s", $senha->getSenha());
            $stmt->execute();
            if($stmt->rowCount() > 0 ){
                return true;
            }
            return false;
        }

        public function storeSenha($senha)
        {
            
            $pdo = Conexao::conexao();
            $com = "INSERT INTO tbsenha VALUES (NULL, :s,:ss,:ts, :ua, :ig)";
            $stmt = $pdo->prepare($com);
            if(! $this->verificarSenhaNoBanco($senha)){
                $stmt->bindValue(":s", $senha->getSenha());
                $stmt->bindValue(":ss", $senha->getStatusSenha());
                $stmt->bindValue(":ts", $senha->getTipoSenha());
                $stmt->bindValue(":ua", $senha->getUpdatedAt());
                $stmt->bindValue(":ig", $senha->getIdGuiche());
                $stmt->execute();
                return $pdo->lastInsertId();
            }
            return false;
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
        public function getSenhas($valor, $limit){
            $pdo = Conexao::conexao();
            $senhas = array();
            if($valor == "Matricula") {
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE (statusSenha =1 AND tipoSenha = 'Triagem')
                
                ORDER BY updateAt DESC
                LIMIT $limit";
            } 
            else if($valor == "Matricula-Atendidos"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE  (statusSenha = 1 AND tipoSenha = 'Matricula') OR (statusSenha != 0 AND tipoSenha = 'Apm')
                ORDER BY updateAt DESC
                LIMIT $limit";
            }
            else if($valor == "Matricula-Nao"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE  (statusSenha = 2 AND tipoSenha = 'Matricula') 
                ORDER BY updateAt DESC
                LIMIT $limit";
            }
            else if($valor == "Apm"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE (statusSenha =1 AND tipoSenha = 'Matricula')
                  
                ORDER BY updateAt DESC
                LIMIT $limit";
            }
            else if($valor == "Apm-Atendidas"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE (statusSenha =1 AND tipoSenha = 'Apm')
                  
                ORDER BY updateAt DESC
                LIMIT $limit";
            }
            else if($valor == "Apm-Nao"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo FROM `tbsenha`
                 WHERE (statusSenha =2 AND tipoSenha = 'Apm')
                  
                ORDER BY updateAt DESC
                LIMIT $limit";
            } else if($valor == "Apm-All"){
                $comAM = "SELECT senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo, updateAt as ua FROM `tbsenha`
                 WHERE (statusSenha !=0 AND tipoSenha != 'Triagem')
                  
                ORDER BY updateAt DESC
                LIMIT $limit";
            } else {
                $comAM = "SELECT  senha, statusSenha as 'status', idSenha as id, tipoSenha as tipo, updateAt as ua  FROM tbsenha
                WHERE statusSenha !=0
                
                ORDER BY updateAt DESC
                LIMIT $limit";
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
            $com = "SELECT senha, nomeSala as sala, nomeGuiche as guiche, tipoSenha as tipo, updateAt as atualizado FROM tbsenha
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
        public function reCall($senha, $data, $guicheId){
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET updateAt = :ua,  statusSenha = '0', idGuiche = :ig WHERE senha = :s";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ua", $data);
            $stmt->bindValue(":ig", $guicheId);
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

        
        public static function verificarStatusSenhaNoBanco($idSenha)
        {
            $pdo = Conexao::conexao();
            $com = "SELECT senha from tbsenha WHERE statusSenha = 0 AND senha = :s";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":s", $idSenha);
            $stmt->execute();
            if($stmt->rowCount() > 0 ){
                return true;
            }
            return false;
        }

        public static function update($senha,$status, $tipo, $idGuiche, $data)
        {
            if($status === 0) {
                if (Senha::verificarStatusSenhaNoBanco($senha)) {
                    return false;
                }
            } 
           $pdo = Conexao::conexao();
           if($data == null){
                $com = "UPDATE tbsenha SET statusSenha = :ss, tipoSenha = :ts, idGuiche = :ig
                WHERE senha = :s";
           }else{
                $com = "UPDATE tbsenha SET statusSenha = :ss, tipoSenha = :ts, idGuiche = :ig, updateAt = :ua
                WHERE senha = :s";
           }
           $stmt = $pdo->prepare($com);
           $stmt->bindValue(":ts", $tipo);
           $stmt->bindValue(":ss", $status);
           $stmt->bindValue(":ig", $idGuiche);
           if($data != null){
           $stmt->bindValue(":ua", $data); 
           }
           $stmt->bindParam(":s", $senha);
           $stmt->execute();
           if($stmt->rowCount() >0){
               return true;
           }
           return false;
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

        public static function updateMatricula($id, $status, $data, $idGuiche) {
            if($status === 0) {
                if (Senha::verificarStatusSenhaNoBanco($id)) {
                    return false;
                }
            } 
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET statusSenha = :ss, updateAt = :ua, tipoSenha ='Matricula', idGuiche = :ig WHERE idSenha = :id";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ss", $status);
            $stmt->bindValue(":ua", $data);
            $stmt->bindValue(":ig", $idGuiche);
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            if($stmt->rowCount() >0){
                return true;
            }
            return false;
        
        }

        public static function updateApm($id, $status, $data, $guicheId) {
            $pdo = Conexao::conexao();
            $com = "UPDATE tbsenha SET statusSenha = :ss, updateAt = :ua, idGuiche = :ig , tipoSenha ='Apm' WHERE idSenha = :id";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ss", $status);
            $stmt->bindValue(":ua", $data);
            $stmt->bindValue(":ig", $guicheId);
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
        public static function pesquisarSenhas($busca) {
            $pdo = Conexao::conexao();
            $com = "SELECT * FROM tbsenha WHERE senha LIKE '%".$busca."%'
            OR updateAt LIKE '%".$busca."%'
            OR tipoSenha LIKE '%".$busca."%'
            ";
            $stmt = $pdo->prepare($com);
            $stmt->execute();
            if($stmt->rowCount() > 0) {
                $resul = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
            return $resul;
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