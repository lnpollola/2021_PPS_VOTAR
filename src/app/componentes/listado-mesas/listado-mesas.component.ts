import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as firebase from "firebase";



@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.css']
})
export class ListadoMesasComponent implements OnInit {

  listaMesas;
  importe;
  display: boolean = false;
  perfil;

  constructor( private baseService:FirebaseService) {
    this.perfil=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
  
    this.TraerLasMesas();
   }

  ngOnInit() {
  }
  TraerLasMesas()
  {
    this.baseService.getItems("comanda/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaMesas = mesas;
      
    
    });
  }

}
