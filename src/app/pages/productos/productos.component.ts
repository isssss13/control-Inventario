import { ProductosService } from '../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos:Array<any>=[];
  constructor(private _productosServicio:ProductosService) {
    this.listProductos=_productosServicio.regresarDatos();
  }

  public editarProducto(id:number){
    console.log(id);
  }

  ngOnInit(): void {
  }

}
