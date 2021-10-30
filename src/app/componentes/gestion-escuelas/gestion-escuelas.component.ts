import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-gestion-escuelas',
  templateUrl: './gestion-escuelas.component.html',
  styleUrls: ['./gestion-escuelas.component.css']
})
export class GestionEscuelasComponent implements OnInit {

  spinner:boolean;
  listaPendientesCocina: Array<any>;
  listaPendientesChopera: Array<any>;
  listaPendientesCandy: Array<any>;
  listaPendientesBarra: Array<any>;
  listaPendientes: Array<any>;
  usuarioLogeado: any;

  listaPedidos: Array<any>;
  // tiempoPreparacion:number;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];

  constructor(private baseService:FirebaseService) {
   }

  TraerTabla()
  {
    this.spinner=true;
    // this.baseService.getItems("comanda/Pedidos").then(pedidos => {
      this.baseService.getItems("comanda/PedidosDetalle").then(pedidosDetalle => {

      this.listaPendientesCocina = [];
      this.listaPendientesChopera = [];
      this.listaPendientesCandy = [];
      this.listaPendientesBarra = [];

      this.listaPedidos = [];

      // this.listaPedidos= pedidos;
      let listaPedidosDetalle = pedidosDetalle;
     

    listaPedidosDetalle.forEach(element => {

                 element = {
                idPedido: element.idPedido,
                id: element.id, 
                estado: element.estado,
                nombre: element.nombre,
                precio: element.precio,
                sector: element.sector,
                }
    
    if (this.usuarioLogeado.perfil == "mozo") {

            this.listaPedidos.push(element);
            this.listaPendientes = this.listaPedidos;
   
          }
      
      switch (element.sector) {
        case "cocina":
        this.listaPendientesCocina.push(element);
        if (this.usuarioLogeado.perfil == "cocina") {
          this.listaPendientes = this.listaPendientesCocina;
          
        }
        break;
        case "chopera":
        this.listaPendientesChopera.push(element);
        if (this.usuarioLogeado.perfil == "chopera") {
          this.listaPendientes = this.listaPendientesChopera;
          
        }
        break;
        case "candy":
        this.listaPendientesCandy.push(element);
        if (this.usuarioLogeado.perfil == "candy") {
          this.listaPendientes = this.listaPendientesCandy;
          
        }
        break;
        case "barra":
        this.listaPendientesBarra.push(element);
        if (this.usuarioLogeado.perfil == "barra") {
          this.listaPendientes = this.listaPendientesBarra;
          
        }
        break;
    
        default:
           
            break;
        }

          
       });

       
  }); //FIN PEDIDODETALLE

// }); // FIN PEDIDOS
          
  


  }
 ngOnInit() {
   this.usuarioLogeado = JSON.parse(sessionStorage.getItem("Usuarios"));

   this.TraerTabla();


 }


}