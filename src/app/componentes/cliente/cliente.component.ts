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

  detalles:any;
  idMesa;
  idPedido;
valMozo:number;
valCocinero:number;
valMesa:number;
valRest:number;
listaPedidosDetalle: any;
listaDetallePedidoUsuario= [];
isLoading: boolean = false;


displayedColumns: string[] = ['nroPedido', 'producto', 'tiempoRestante'];

// private httpPedido: PedidoService
  constructor(private baseService:FirebaseService) { }

  TraerTiempo()
  {
    this.isLoading = true;
    // setTimeout(() => this.isLoading = false, 8000);
    this.baseService.getItems("comanda/PedidosDetalle").then(pedidosDetalle => {

      this.listaPedidosDetalle = pedidosDetalle;

      this.listaPedidosDetalle.forEach(element => {
        if(element.idPedido == this.idPedido)
        {
          this.listaDetallePedidoUsuario.push(element);
        }
      console.log(this.listaDetallePedidoUsuario)

      });
      this.isLoading = false
      this.detalles = this.listaDetallePedidoUsuario;
      // let pedidoDelUsuario = this.listaPedidosDetalle.find(elem => (elem.idPedido == this.idPedido ));

    }); //FIN PEDIDODETALLE
    

    // this.httpPedido.TiempoRestante(this.idPedido)
    // .subscribe(data=>{
    //   let respuesta= JSON.parse(data._body);
    //   this.detalles=respuesta.detalles;
    //   this.idPedido=respuesta.idPedido;
    //  // console.log(this.detalles);

    // });
  }

  Presionar()
  {
    console.log(this.valCocinero, this.valMesa, this.valMozo, this.valRest);
  }

  
  

  ngOnInit() {
  }

}

