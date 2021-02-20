import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// AngularFire
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Servicios
import { ProductosService } from './services/productos.service';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { E404Component } from './errors/e404/e404.component';
import { AddProductosComponent } from './pages/add-productos/add-productos.component';
import { FinanzasComponent } from './pages/finanzas/finanzas.component';
import { EditComponent } from './pages/productos/edit/edit.component';

// Rutas
const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'productos', component:ProductosComponent },
  { path: 'add-Productos', component:AddProductosComponent },
  { path: 'finanzas', component:FinanzasComponent },
  { path: '404', component:E404Component },
  { path: '**', redirectTo: '/404', pathMatch:'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    InicioComponent,
    ProductosComponent,
    E404Component,
    AddProductosComponent,
    FinanzasComponent,
    EditComponent
  ],
  imports: [
    AngularFireAnalyticsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
