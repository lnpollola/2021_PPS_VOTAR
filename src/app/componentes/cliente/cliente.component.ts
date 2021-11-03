import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


export interface DetallePedido {
  nroPedido: string;
  producto: string;
  tiempoRestante: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  detalles:boolean = false;
  idMesa;
  idDocumento;
  nombre:any;
  sexo:any;
  orden:any;
  listaEscuelas:any;
  escuelaVotante = [];
  DNIError: boolean = false;

valMozo:number;
valCocinero:number;
valMesa:number;
valRest:number;
listaVotantes: any;
listaDetallePedidoUsuario= [];
isLoading: boolean = false;
votanteBuscado:any;


// displayedColumns: string[] = ['idDocumento', 'nombre', 'sexo','escuela','mesa','orden'];

// private httpPedido: PedidoService
  constructor(private baseService:FirebaseService) { }

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

      if(this.votanteBuscado !== undefined)
      {
        

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
      else{
        this.isLoading = false
        this.detalles= false;
        this.DNIError = true;

        // this.idDocumento = null;
  
      }
     
     
      


    });

   
    

    // this.baseService.getItems("votar/PedidosDetalle").then(pedidosDetalle => {

    //   this.listaPedidosDetalle = pedidosDetalle;


    //   this.listaPedidosDetalle.forEach(element => {
    //     if(element.idPedido == this.idDocumento)
    //     {
    //       this.listaDetallePedidoUsuario.push(element);
    //     }
    //   console.log(this.listaDetallePedidoUsuario)

    //   });
    //   this.isLoading = false
    //   this.detalles = this.listaDetallePedidoUsuario;
     

    // }); 
    
  }

  // Presionar()
  // {
  //   console.log(this.valCocinero, this.valMesa, this.valMozo, this.valRest);
  // }

  
  

  ngOnInit() {
  }

}

