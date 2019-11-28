import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-botonservir',
  templateUrl: './botonservir.component.html',
  styleUrls: ['./botonservir.component.css']
})
export class BotonservirComponent implements OnInit {

  @Input() id:number;
  @Input() idDetalle:number;
  @Input() idPedido: number;
  @Output() lanzador=new EventEmitter();
  listaPedidos: Array<any>;


  constructor(private baseService:FirebaseService) { }

  Servir()
  {
    // this.httpPedido.ServirPedido(this.idDetalle)
    // .subscribe((data)=>{
    //   this.lanzador.emit();
    // })

    this.baseService.getItems("comanda/Pedidos").then(pedidos => {
      this.baseService.getItems("comanda/PedidosDetalle").then(detalle => {
        this.baseService.getItems("comanda/Mesas").then(mesas => {


      this.listaPedidos = pedidos;
      let listaDetalle = detalle;
      let listaMesas = mesas;

      let pedidoSeleccionadoApreparar = this.listaPedidos.find(elem => (elem.id == this.idPedido ));
      let detalleSeleccionadoApreparar = listaDetalle.find(elem => (elem.idPedido == this.idPedido && elem.estado == "preparacion"));
      let mesaServida = listaMesas.find(elem => (elem.idMesa == pedidoSeleccionadoApreparar.idMesa ));

        console.log(pedidoSeleccionadoApreparar);
        console.log(detalleSeleccionadoApreparar);

      let objEnviarDetalle = {
        idPedido: detalleSeleccionadoApreparar.idPedido,
        id: detalleSeleccionadoApreparar.id, 
        estado: "servido",
        nombre: detalleSeleccionadoApreparar.nombre,
        precio: detalleSeleccionadoApreparar.precio,
        tiempoPreparacion: 0,
        sector: detalleSeleccionadoApreparar.sector,
        }

        let objEnviarPedido = {
          id: pedidoSeleccionadoApreparar.id,
          estado: "servido",
          idMesa: pedidoSeleccionadoApreparar.idMesa,
          montoTotal: pedidoSeleccionadoApreparar.montoTotal,
   
          }

          let objEnviarMesa = {
            estado: "Listo para cobrar",
            idMesa: pedidoSeleccionadoApreparar.idMesa,
            imgMesa: mesaServida.imgMesa,
            montoTotal: pedidoSeleccionadoApreparar.montoTotal

            }

      this.baseService.updateItem('comanda/PedidosDetalle',detalleSeleccionadoApreparar.key,objEnviarDetalle); 
      this.baseService.updateItem('comanda/Pedidos',pedidoSeleccionadoApreparar.key,objEnviarPedido); 
      this.baseService.updateItem('comanda/Mesas',mesaServida.key,objEnviarMesa); 

      this.lanzador.emit();
    
    }); // FIN MESASFB

    }); // FIN DETALLEFB
   
}); // FIN PEDIDOFB

  }

  ngOnInit() {
  }

}
