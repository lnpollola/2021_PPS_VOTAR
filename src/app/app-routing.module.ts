import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { ClienteComponent } from "../app/componentes/cliente/cliente.component";
import { AboutComponent } from "../app/componentes/about/about.component";
import { RegistroComponent } from "../app/componentes/registro/registro.component";
import { ContactComponent } from "../app/componentes/contact/contact.component";
import { ListadoMesasComponent } from "../app/componentes/listado-mesas/listado-mesas.component";
import { MenuComponent } from "../app/componentes/menu/menu.component";
import { TablaPendientesComponent } from "../app/componentes/tabla-pendientes/tabla-pendientes.component";
import { EncuestaComponent } from "../app/componentes/encuesta/encuesta.component";
import { GestionEscuelasComponent } from '../app/componentes/gestion-escuelas/gestion-escuelas.component';
import { ValidovotanteComponent } from './componentes/validovotante/validovotante.component';
import { GestionFuncionarioComponent} from '../app/componentes/gestion-funcionario/gestion-funcionario.component';
import { ValidomesaComponent } from './componentes/validomesa/validomesa.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'listadoMesas', component: ListadoMesasComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gestionFuncionario', component: GestionFuncionarioComponent },

  // { path: 'listado', component: TablaPendientesComponent },
  { path: 'gestionEscuelas', component: GestionEscuelasComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'validovotante', component: ValidovotanteComponent },
  { path: 'validomesa', component: ValidomesaComponent },











  
  { path: '', 
  redirectTo: '/home', 
  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
