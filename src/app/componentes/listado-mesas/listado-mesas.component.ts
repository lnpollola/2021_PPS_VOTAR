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
  noIMGcargada: boolean = false;

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


  // ServirMesa(idMesa)
  // {
    
  // }

  Cobrar(idMesa)
  {
    

    this.baseService.getItems("comanda/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      let listadoMesas = mesas;
      console.log(idMesa);
      let mesaACobrar = listadoMesas.find(elem => (elem.idMesa == idMesa ));
      console.log(mesaACobrar);

      let mesaAEnviar = {
        idMesa: mesaACobrar.idMesa,
        estado: "con cliente pagando",
        imgMesa: mesaACobrar.imgMesa,
        montoTotal: mesaACobrar.montoTotal
      }
      
      this.baseService.updateItem('comanda/Mesas',mesaACobrar.key,mesaAEnviar); 

      this.TraerLasMesas();
      
    
    });
   
  }

  Cerrar(idMesa)
  {

    this.baseService.getItems("comanda/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      let listadoMesas = mesas;
      console.log(idMesa);
      let mesaACobrar = listadoMesas.find(elem => (elem.idMesa == idMesa ));
      console.log(mesaACobrar);

      let mesaAEnviar = {
        idMesa: mesaACobrar.idMesa,
        estado: "vacia",
        imgMesa: "",
        montoTotal: 0
      }
      
      this.baseService.updateItem('comanda/Mesas',mesaACobrar.key,mesaAEnviar); 

      this.TraerLasMesas();
      
    
    });
   
  }


}
