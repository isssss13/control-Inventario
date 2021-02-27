import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {
  producto ={nombre:null,costo:null,descripcion:null,cantidad:null};
  constructor(private serv:ProductosService) { }

  ngOnInit(): void {
  }

  // agregar(){
  //   this.serv.agregarProductos(this.producto);
  // }
  agregar() {
    this.serv.agregarProductos(this.producto).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        console.log('agregado');
      }
    });
  }

}
