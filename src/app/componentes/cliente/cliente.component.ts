import { Component, OnInit } from '@angular/core';
// import { PedidoService } from '../services/pedido.service';

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

displayedColumns: string[] = ['nroPedido', 'producto', 'tiempoRestante'];

// private httpPedido: PedidoService
  constructor() { }

  TraerTiempo()
  {
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

