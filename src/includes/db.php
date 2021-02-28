<?php
    function retornarConexion(){
        $archivo =__DIR__."/../../private/config.ini";
        $config = parse_ini_file($archivo, true);
        $conn = mysqli_connect($config['database']['servername'],$config['database']['username'], $config['database']['password'], $config['database']['database']);
        if($conn === false) {
            echo mysqli_connect_error(); 
        }
        return $conn;
    }
?>