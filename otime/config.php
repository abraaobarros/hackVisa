<?php

	$APP_PATH_VERSION = "";
	// TIRAR A BARRA CASO TENHA
	$APP_PATH_ROOT = (substr($_SERVER["DOCUMENT_ROOT"], -1) === "/" ? substr($_SERVER["DOCUMENT_ROOT"], 0, strlen($_SERVER["DOCUMENT_ROOT"]) - 1) : $_SERVER["DOCUMENT_ROOT"]).$APP_PATH_VERSION;

	
?>


