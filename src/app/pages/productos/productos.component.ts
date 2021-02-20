import { ProductosService } from '../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos: any;
  constructor(private _prod:ProductosService) {
    this._prod.regresarDatos().subscribe(item=>{
      this.listProductos=item;
    })
  }

  public editarProducto(id:string){
    console.log(`el id es ${id}`);
  }

  ngOnInit(): void {
  }

}
