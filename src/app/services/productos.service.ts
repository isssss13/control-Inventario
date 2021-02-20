import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; costo:number; descripcion:string; cantidad:number; }

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productosCollection: AngularFirestoreCollection<Item>;
  listProductos: Observable<Item[]>;

  // productos:Array<any>=[
  //   { nombre:'Producto 1',costo:'10.00',descripcion:'Producto de prueba1',cantidad:5 },
  //   { nombre:'Producto 2',costo:'15.00',descripcion:'Producto de prueba2',cantidad:10 },
  //   { nombre:'Producto 3',costo:'20.00',descripcion:'Producto de prueba3',cantidad:15 },
  //   { nombre:'Producto 4',costo:'50.00',descripcion:'Producto de prueba4',cantidad:7 },
  //   { nombre:'Producto 5',costo:'19.00',descripcion:'Producto de prueba5',cantidad:19 },
  //   { nombre:'Producto 6',costo:'10.50',descripcion:'Producto de prueba6',cantidad:99 },
  // ]

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Item>('productos');
    this.listProductos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  regresarDatos(){
    return this.listProductos;
  }
}
