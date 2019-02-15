<?php

$APP_PATH_ROOT = (substr($_SERVER["DOCUMENT_ROOT"], -1) === "/" ? substr($_SERVER["DOCUMENT_ROOT"], 0, strlen($_SERVER["DOCUMENT_ROOT"]) - 1) : $_SERVER["DOCUMENT_ROOT"]);

require_once $APP_PATH_ROOT."/models/BDConBaseModel.php";


class globalAPI extends BDConBaseModel
{




    // --------------------------------------------------------------------------------
    // newUser
    // Salva o objeto
    // --------------------------------------------------------------------------------
    public function newUser($nome, $email, $telefone, $senha)
    {
        // se o registro existir atualiza, senão insere um novo
        $sql = "INSERT INTO
                    temporario.usuario
                        (nome, email, telefone,senha)
                VALUES(";

        if(isset($nome)){
            $sql .= "".$this->o_db->quote($nome).", ";
        }
        if(isset($email)){
            $sql .= "".$this->o_db->quote($email).", ";
        }
        if(isset($telefone)){
            $sql .= "".$this->o_db->quote($telefone).", ";
        }   
        if(isset($senha)){
            $sql .= "".$this->o_db->quote($senha)."";
        }
        $sql .= " );";

        if ($this->o_db->exec($sql) || ($this->o_db->errorInfo()[0] === "00000")) {
            return true;
        }

        return false;
    }






    // --------------------------------------------------------------------------------
    // login
    // faz login do usuario
    // --------------------------------------------------------------------------------
    public function loginUser($email, $senha)
    {
        // se o registro existir atualiza, senão insere um novo
        $sql = "SELECT
                    *
                FROM 
                    temporario.usuario
                WHERE
                    usuario.email = ".$this->o_db->quote($email)." 
                    AND usuario.senha = ".$this->o_db->quote($senha)." ;";

        try {
            // lê o registro no bd
            if ($resultset = $this->o_db->query($sql)) {
                // transforma o registro em um objeto
                if ($obj_in = $resultset->fetchObject()) {

                    if(is_null($obj_in)){
                        return false;
                    }else{
                        return json_encode($obj_in);
                     
                    }
                    
                }
            }
            // retorna null se não for possível recuperar o objeto
            return null;
        }
        catch (Exception $e) {
            return null;
        }
    }









    




    

    // --------------------------------------------------------------------------------
    // SaldoDisponivel
    // Salva o objeto
    // --------------------------------------------------------------------------------
    public function saldoDisponivel($usuarioId, $valor)
    {
        // se o registro existir atualiza, senão insere um novo
        $sql = "SELECT
                    *
                FROM
                    temporario.usuario
                WHERE
                    id = ".$this->o_db->quote($usuarioId).";";

       // lê o registro no bd
       if ($resultset = $this->o_db->query($sql)) {
            // transforma o registro em um objeto
            if ($obj_in = $resultset->fetchObject()) {

                if($obj_in->saldo < $valor){
                    return false;
                }else{
                    return true;
                
                }
                
            }
        }
        return false;
    }



      // --------------------------------------------------------------------------------
    // SaldoDisponivel
    // Salva o objeto
    // --------------------------------------------------------------------------------
    public function opTransferencia($usuarioId, $valor, $op)
    {
        // se o registro existir atualiza, senão insere um novo
        $sql = "UPDATE
                    temporario.usuario
                SET";
        if($op == "ADD"){
            $sql .= "`saldo` = `saldo` + ".$valor;
        }else if($op == "DEB"){
            $sql .= "`saldo` = `saldo` - ".$valor;
        }
        $sql .= " WHERE `id`=".$this->o_db->quote($usuarioId).";
        ;";

       // lê o registro no bd
       if ($this->o_db->exec($sql) || ($this->o_db->errorInfo()[0] === "00000")) {
            return true;
        }

        return false;
    }








    // --------------------------------------------------------------------------------
    // login
    // faz login do usuario
    // --------------------------------------------------------------------------------
    public function transferenciaSaldo($de, $para, $valor)
    {

        if($this->saldoDisponivel($de, $valor)){
            $this->opTransferencia($de, $valor, "DEB");
            $this->opTransferencia($para, $valor, "ADD");

             // se o registro existir atualiza, senão insere um novo
            $sql = "INSERT INTO temporario.transferencia
            (de, para, valor, dataHora)
            VALUES( ".$de.", ".$para.", ".$valor.", '".date("d-m-Y H:i:s")."');";


            // lê o registro no bd
            if ($this->o_db->exec($sql) || ($this->o_db->errorInfo()[0] === "00000")) {
                return true;
            }
            return false;

        }else{
            return "Saldo indisponivel";
        }
       
      
    }










    
}
?>
