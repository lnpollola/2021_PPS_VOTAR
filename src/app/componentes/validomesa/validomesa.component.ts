import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-validomesa',
  templateUrl: './validomesa.component.html',
  styleUrls: ['./validomesa.component.css']
})
export class ValidomesaComponent implements OnInit {

  listaMesas;
  listaEscuelas;
  importe;
  display: boolean = false;
  perfilLog;
  noIMGcargada: boolean = false;
  listaUsuarios:Array<any>;
  usuarioRegistrado: boolean = false;
  agregOK:boolean = false;
  eliminOK:boolean = false;
  perfiles = [
    

  ];
  listaMesasabiertas = [];
  listadoEscuelasAbiertas:any;


  constructor( private baseService:FirebaseService) {
    this.perfilLog=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
    this.listadoEscuelasAbiertas = [];
    this.TraerLasMesas();
    this.TraerLasEscuelas();
   }

   TraerLasEscuelas() {
    this.baseService.getItems("votar/Escuelas").then(escuelas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaEscuelas = escuelas;

  
      for (let index = 0; index < this.listaEscuelas.length; index++) {

        if (this.listaEscuelas[index].estado == "abierta") {
         this.listadoEscuelasAbiertas[index] = this.listaEscuelas[index]
          
        }
        
      }
      console.log(this.listadoEscuelasAbiertas);

    
    });
  }

  ngOnInit() {
  }

  TraerLasMesas()
  {
    this.baseService.getItems("votar/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaMesas = mesas;

   
     

      
    
    });

 
  }


}
