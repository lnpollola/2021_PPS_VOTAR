import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.css']
})
export class TablaPendientesComponent implements OnInit {

  spinner:boolean;
  listaPendientes: Array<any>;
  listaPedidos: Array<any>;
  // tiempoPreparacion:number;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];

  constructor(private baseService:FirebaseService) { }

  TraerTabla()
  {
    this.spinner=true;
    this.baseService.getItems("comanda/Pedidos").then(pedidos => {
      this.listaPendientes = [];
      this.listaPedidos = [];

      this.listaPedidos= pedidos;
      this.listaPedidos.forEach(element => {
        
            element.detalle.forEach(ele => {


              element = {
                id: element.id,
                estado: element.estado,
                detalle: {
                nombre: ele.nombre,
                sector: ele.sector,
                tiempoPreparacion: 0
                }

             }
            // delete element.detalle;
            // element.add(detalleNS);
            this.listaPendientes.push(element);
            console.log(this.listaPendientes)
          });
      
    });
});


  }
 ngOnInit() {
   this.TraerTabla();
 }


}
