<?php
    function retornarConexion(){
        $servername = "localhost";
        $database = "controlInventario";
        $username = "root";
        $password = "root";
        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $database);
        return $conn;
    }
?>