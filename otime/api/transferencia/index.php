<?php


$APP_PATH_ROOT = (substr($_SERVER["DOCUMENT_ROOT"], -1) === "/" ? substr($_SERVER["DOCUMENT_ROOT"], 0, strlen($_SERVER["DOCUMENT_ROOT"]) - 1) : $_SERVER["DOCUMENT_ROOT"]);
require_once $APP_PATH_ROOT."/models/global.php";



if(isset($_POST['de']) && isset($_POST['para']) && isset($_POST['valor'])){
 
    $o_user = new globalAPI();
    echo $o_user->transferenciaSaldo($_POST['de'], $_POST['para'], $_POST['valor']);
    
}else{
    echo "Parametros invalidos!";
}




?>