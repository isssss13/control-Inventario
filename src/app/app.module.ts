import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

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

const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'productos', component:ProductosComponent },
  { path: 'add-Productos', component:AddProductosComponent },
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
    AddProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
