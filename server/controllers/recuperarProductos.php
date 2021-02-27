<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require_once("../db.php");
    $conn=retornarConexion();
    $sql = "Select * from productos";
    $result = $conn->query($sql);
    $vec=[];
    while ($reg=mysqli_fetch_array($result))  
    {
        $vec[]=$reg;
    }
    $cad=json_encode($vec);
    echo $cad;
    header('Content-Type: application/json');
?>