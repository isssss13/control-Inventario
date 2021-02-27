import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// export interface Item { name: string; costo:number; descripcion:string; cantidad:number; }

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url="http://localhost/angular/controlInventario/server/controllers/";

  
  // private productosCollection: AngularFirestoreCollection<Item>;
  // listProductos: Observable<Item[]>;
  constructor(private http: HttpClient) {}
  //   this.productosCollection = afs.collection<Item>('productos');
  //   this.listProductos = this.productosCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Item;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  regresarDatos(){
    return this.http.get(`${this.url}recuperarProductos.php`);
  }

  agregarProductos(producto){
    return this.http.post(`${this.url}insert.php`, JSON.stringify(producto));
  }
}
