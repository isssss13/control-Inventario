import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {
  producto : any={identificador:'',nombre:'',costo:0,descripcion:'',cantidad:0};
  constructor(private serv:ProductosService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.serv.agregarProductos(this.producto);
  }

}
