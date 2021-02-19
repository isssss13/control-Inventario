import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Array<any>=[
    { nombre:'Producto 1',costo:'10.00',descripcion:'Producto de prueba1',cantidad:5 },
    { nombre:'Producto 2',costo:'15.00',descripcion:'Producto de prueba2',cantidad:10 },
    { nombre:'Producto 3',costo:'20.00',descripcion:'Producto de prueba3',cantidad:15 },
    { nombre:'Producto 4',costo:'50.00',descripcion:'Producto de prueba4',cantidad:7 },
    { nombre:'Producto 5',costo:'19.00',descripcion:'Producto de prueba5',cantidad:19 },
    { nombre:'Producto 6',costo:'10.50',descripcion:'Producto de prueba6',cantidad:99 },
  ]

  constructor() {
    console.log(this.productos);
  }

  regresarDatos(){
    return this.productos;
  }
}
