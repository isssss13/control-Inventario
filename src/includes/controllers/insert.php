<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require_once("../db.php");
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    $conn=retornarConexion();
    $sql ="INSERT INTO productos (nombre,costo,descripcion,cantidad) VALUES ('".$params->nombre."',".$params->costo.",'".$params->descripcion."',".$params->cantidad.")";
    class result{};
    if($conn->query($sql)){
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'datos grabados';
        header('Content-Type: application/json');
        echo json_encode($response);
    }
?>