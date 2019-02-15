<?php
// --------------------------------------------------------------------------------
// BDConBaseModel
//
// Classe BASE para acesso ao banco de dados.
//
// Gerado em: 2018-03-13
// --------------------------------------------------------------------------------
abstract class BDConBaseModel
{
	protected $o_db;
	
	function __construct()
	{
		date_default_timezone_set('America/Sao_Paulo');

		$st_ambiente = explode('.', $_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'])[0];
		
		$st_host = "3.16.137.175";
		$st_usuario = "GOEDUCA_PRD";
		$st_senha = "4c@nn+k.5Zs-{7rm";
		$st_banco = "temporario";
		 
		$st_dsn = "mysql:host=$st_host;dbname=$st_banco;port=1944";
		$this->o_db = new PDO
		(
			$st_dsn,
			$st_usuario,
			$st_senha
		);
	
		$this->o_db->setAttribute ( PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION );
	}
}
?>