import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-validomesa',
  templateUrl: './validomesa.component.html',
  styleUrls: ['./validomesa.component.css']
})
export class ValidomesaComponent implements OnInit {

  // listaMesas;
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
  listaMesas : Array<any>;
  listadoMesasAbiertas : Array<any>;
  listadoMesasAbiertasArray : Array<any>;

  listadoMesasEscuelasAbiertas : Array<any>;

  listadoEscuelasAbiertasArray : Array<any>;
  listadoEscuelasAbiertas : Array<any>;

  


  constructor( private baseService:FirebaseService) {
    this.perfilLog=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
    // this.listadoEscuelasAbiertas = [];
    // this.listadoEscuelasAbiertas = [];
    // this.TraerLasMesas();
    this.TraerLasEscuelas();
   }

   TraerLasEscuelas() {

    this.baseService.getItems("votar/Escuelas").then(escuelas => {
     
      this.listadoEscuelasAbiertas = [];
      this.listaEscuelas = escuelas;

      this.listaEscuelas.forEach(element => {
        element = {
       direccion: element.direccion,
       distrito: element.distrito, 
       estado: element.estado,
       idEscuela: element.idEscuela,
       nombre: element.nombre
       }

       if (element.estado == "abierta") {
        this.listadoEscuelasAbiertas.push(element);
       }

       this.listadoEscuelasAbiertasArray = this.listadoEscuelasAbiertas;
       
      });
      // console.log( this.listadoEscuelasAbiertasArray );
      this.TraerMesasAbiertas(this.listadoEscuelasAbiertasArray);
      
     });
  }


TraerMesasAbiertas (listadoEscuelasAbiertas){
  
    this.listadoMesasAbiertas = [];
    this.listaMesas = [];
    // this.listaEscuelas = escuelas;

    this.baseService.getItems("votar/Mesas").then(mesas => {

    this.listaMesas = mesas;

    listadoEscuelasAbiertas.forEach(escuela => {
        // ESCUELA
        escuela = {
          direccion: escuela.direccion,
          distrito: escuela.distrito, 
          estado: escuela.estado,
          idEscuela: escuela.idEscuela,
          nombre: escuela.nombre
          }
      
          this.listaMesas.forEach(mesa => {

            // MESA
            mesa = {
           escuela: mesa.escuela,
           estado: mesa.estado, 
           idMesa: mesa.idMesa,
           validofiscal: mesa.validofiscal,
           validopresidente: mesa.validopresidente
           }

          if (mesa.escuela == escuela.idEscuela) {
            this.listadoMesasAbiertas.push(mesa);
          }
          
          //FOREACH MESA
          this.listadoMesasAbiertasArray = this.listadoMesasAbiertas;
           });
      
     });

     console.log(this.listadoMesasAbiertasArray);
    
    });
  }

  ngOnInit() {
  }

}
