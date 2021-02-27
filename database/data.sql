use controlInventario

CREATE TABLE productos(
    id int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(32) ,
    costo FLOAT(11),
    descripcion TEXT,
    cantidad int(11),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)