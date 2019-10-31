import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { ClienteComponent } from "../app/componentes/cliente/cliente.component";
import { AboutComponent } from "../app/componentes/about/about.component";
import { RegistroComponent } from "../app/componentes/registro/registro.component";
import { ContactComponent } from "../app/componentes/contact/contact.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'contacto', component: ContactComponent },





  
  { path: '', 
  redirectTo: '/home', 
  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
