import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "../../clases/producto";
import { Pedido } from "../../clases/pedido";
import { FirebaseService } from '../../servicios/firebase.service';
import * as firebase from "firebase";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listaProductos:Array<Producto>;
  productosPedido:Array<Producto>;
  totalPedido:number=0;
  @Input() mesaSeleccionada:number;
  elPedido:Pedido;
  busqueda:string;
  respuestaAsync: any;
  listaMesas: any;
  @Input() mesasDisponibles:any;

  constructor( private baseService:FirebaseService) {
    this.elPedido=new Pedido();
    this.TraerProductos();
    this.TraerMesasDisp();
   }

   TraerProductos()
   {
    this.baseService.getItems("comanda/Productos").then(productos => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaProductos = productos;
      
    
    });
   }
 
   TraerMesasDisp()
   {
    this.baseService.getItems("comanda/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.mesasDisponibles = mesas;
      
    
    });
   }
 
   AgregarAlPedido(producto:Producto)
   {
     this.productosPedido ? this.productosPedido.push(producto) : this.productosPedido= new Array<Producto>(producto);
     
    this.totalPedido = this.totalPedido + producto.precio;
   // console.log(this.totalPedido);
     
   }
 
   QuitarAlPedido(producto:Producto){
   
     for(let i = 0; i < this.productosPedido.length; i++)
     {
       
       if(this.productosPedido[i].nombre == producto.nombre)
       {
         this.totalPedido-= producto.precio;
       //  console.log("se va a borrar el producto " + this.productosPedido[i].nombre);
         this.productosPedido.splice(i,1);
         break;
       }
     }
 
   }
 
 IngresarPedido()
 {
   this.elPedido.detalle= this.productosPedido;
   this.elPedido.idMesa=this.mesaSeleccionada;
   this.elPedido.id= this.crearID(5);
   console.log(this.elPedido);
   
this.baseService.addItem('comanda/Pedidos', this.elPedido); 
 
 
 }
 
 async IngresarPedidoPromise()
 {
   this.elPedido.detalle= this.productosPedido;
 
   console.log(this.mesaSeleccionada);
   this.elPedido.idMesa=this.mesaSeleccionada;
   
 
  // await this.httpPedido.IngresarPedido(this.elPedido)
  //  .toPromise().then(
       
  //    (data)=>{
  //   this.respuestaAsync =JSON.parse(data._body);
   
  //  })


 
 }
 
   ngOnInit() {
     // this.dishServices.getDishes()
     // .subscribe(dishes => this.dishes = dishes);
   }
 
   // onSelect(dish: Dish){
   //   this.selectedDish = dish;
   // }

    crearID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

}
