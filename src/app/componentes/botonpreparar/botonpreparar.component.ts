import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-botonpreparar',
  templateUrl: './botonpreparar.component.html',
  styleUrls: ['./botonpreparar.component.css']
})
export class BotonprepararComponent implements OnInit {

  @Input() id:number;
  @Input() idPedido: number;
  @Input() tiempoPreparacion:number;
  @Output() lanzador=new EventEmitter();
  listaPedidos: Array<any>;
  usuarioLogeado:any;
  constructor(private baseService:FirebaseService) { }

  ngOnInit() {
    this.usuarioLogeado = JSON.parse(sessionStorage.getItem("Usuarios"));

  }

  Preparar()
  {
    this.baseService.getItems("comanda/Pedidos").then(pedidos => {
      this.baseService.getItems("comanda/PedidosDetalle").then(detalle => {

      this.listaPedidos = pedidos;
      let listaDetalle = detalle;

      let pedidoSeleccionadoApreparar = this.listaPedidos.find(elem => (elem.id == this.idPedido ));
      let detalleSeleccionadoApreparar = listaDetalle.find(elem => (elem.idPedido == this.idPedido && elem.sector == this.usuarioLogeado.perfil ));
     
        console.log(pedidoSeleccionadoApreparar);
        console.log(detalleSeleccionadoApreparar);

      let objEnviarDetalle = {
        idPedido: detalleSeleccionadoApreparar.idPedido,
        id: detalleSeleccionadoApreparar.id, 
        estado: "preparacion",
        nombre: detalleSeleccionadoApreparar.nombre,
        precio: detalleSeleccionadoApreparar.precio,
        tiempoPreparacion: this.tiempoPreparacion,
        sector: detalleSeleccionadoApreparar.sector,
        }

        let objEnviarPedido = {
          id: pedidoSeleccionadoApreparar.id,
          estado: "preparacion",
          idMesa: pedidoSeleccionadoApreparar.idMesa,
          montoTotal: pedidoSeleccionadoApreparar.montoTotal,
   
          }

      this.baseService.updateItem('comanda/PedidosDetalle',detalleSeleccionadoApreparar.key,objEnviarDetalle); 
      this.baseService.updateItem('comanda/Pedidos',pedidoSeleccionadoApreparar.key,objEnviarPedido); 
      this.lanzador.emit();
    

    });
   
});
  
  }

}
