<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require_once("../db.php");
    $conn=retornarConexion();
    $sql = "INSERT INTO productos (nombre,costo,descripcion,cantidad) VALUES ('producto 3','223.23','El producto3',23);";
    if($result = $conn->query($sql)){
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    // if (mysqli_num_rows($result) > 0) {
    //     // output data of each row
    //     while($row = mysqli_fetch_assoc($result)) {
    //         echo "id: " . $row["id"]. " - Name: " . $row["nombre"]. " " . $row["lastname"]. "<br>";
    //     }
    // } else {
    //     echo "0 results";
    // }
?>