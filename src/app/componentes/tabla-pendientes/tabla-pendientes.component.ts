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
  tiempoPreparacion:number;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];

  constructor(private baseService:FirebaseService) { }

  TraerTabla()
  {
    this.spinner=true;
    this.baseService.getItems("comanda/Pedidos").then(pedidos => {

      this.listaPendientes= pedidos;
});


  }
 ngOnInit() {
   this.TraerTabla();
 }


}
