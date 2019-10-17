import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { ClienteComponent } from "../app/componentes/cliente/cliente.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cliente', component: ClienteComponent },


  
  { path: '', 
  redirectTo: '/home', 
  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
