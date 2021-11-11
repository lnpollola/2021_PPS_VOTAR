import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-validovotante',
  templateUrl: './validovotante.component.html',
  styleUrls: ['./validovotante.component.css']
})
export class ValidovotanteComponent implements OnInit {

  
  detalles:boolean = false;
  idMesa;
  idDocumento;
  nombre:string;
  sexo:any;
  orden:any;
  listaEscuelas:any;
  escuelaVotante:any;
  DNIError: boolean = false;

  perfilLog;

listaVotantes: any;
listaDetallePedidoUsuario= [];
isLoading: boolean = false;
votanteBuscado:any;

  constructor(private baseService:FirebaseService,) {
    this.perfilLog=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;

   }

  ngOnInit() {
  }
  TraerVotante()
  {
    this.isLoading = true;
    
    // setTimeout(() => this.isLoading = false, 8000);
    

    this.baseService.getItems("votar/Escuelas").then(listaEscuelas => {
      this.listaEscuelas = listaEscuelas;
    }); 
    
    this.baseService.getItems("votar/Votantes").then(usuarios => {
      

      this.listaVotantes = usuarios;
      console.log(this.listaVotantes);
     
      this.votanteBuscado = this.listaVotantes.find(elem => (elem.dni == this.idDocumento ));
     
      console.log(this.votanteBuscado);

      if(this.votanteBuscado === undefined)
      {
        this.isLoading = false
        this.detalles= false;
        this.DNIError = true;

      }
      else {
     
        
        this.DNIError = false;
        this.detalles = true;
        this.idDocumento = this.votanteBuscado.dni;
        this.nombre = this.votanteBuscado.nombre;
        this.sexo = this.votanteBuscado.sexo;
        this.idMesa = this.votanteBuscado.idMesa;
        this.orden = this.votanteBuscado.orden;
  
       this.escuelaVotante = this.listaEscuelas.find(elem => (elem.idEscuela == this.votanteBuscado.idEscuela ));
       console.log(this.escuelaVotante);
       this.isLoading = false
      }
     
   

    });
  }

  CheckAuxiliar()
  {
   
    var agregoVotante = {
      dni: this.votanteBuscado.dni,
      dvalidador: this.votanteBuscado.dvalidador,
      flagvoto: false,
      validoauxiliar: true,
      idEscuela: this.votanteBuscado.idEscuela,
      idMesa: this.votanteBuscado.idMesa,
      nombre: this.votanteBuscado.nombre,
      orden: this.votanteBuscado.orden,
      sexo: this.votanteBuscado.sexo,
      validovotar: false
       
     }
     console.log(this.votanteBuscado);
    this.baseService.updateItem('votar/Votantes',this.votanteBuscado.key,agregoVotante); 
    this.TraerVotante();

 
  }

  CheckPresidente()
  {
   
    var agregoVotante = {
      dni: this.votanteBuscado.dni,
      dvalidador: this.votanteBuscado.dvalidador,
      flagvoto: false,
      validoauxiliar: true,
      idEscuela: this.votanteBuscado.idEscuela,
      idMesa: this.votanteBuscado.idMesa,
      nombre: this.votanteBuscado.nombre,
      orden: this.votanteBuscado.orden,
      sexo: this.votanteBuscado.sexo,
      validovotar: true
       
     }
     console.log(this.votanteBuscado);
    this.baseService.updateItem('votar/Votantes',this.votanteBuscado.key,agregoVotante); 
    this.TraerVotante();

 
  }

}
