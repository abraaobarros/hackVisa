<?php


$APP_PATH_ROOT = (substr($_SERVER["DOCUMENT_ROOT"], -1) === "/" ? substr($_SERVER["DOCUMENT_ROOT"], 0, strlen($_SERVER["DOCUMENT_ROOT"]) - 1) : $_SERVER["DOCUMENT_ROOT"]);
require_once $APP_PATH_ROOT."/models/global.php";



if(isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['senha'])){
 
    $o_user = new globalAPI();
    $o_user->newUser($_POST['nome'], $_POST['email'], $_POST['telefone'], $_POST['senha']);
    
}else{
    echo "Parametros invalidos!";
}




?>