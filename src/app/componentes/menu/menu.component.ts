import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "../../clases/producto";
import { Pedido } from "../../clases/pedido";
import { FirebaseService } from '../../servicios/firebase.service';
import { Mesa } from "../../clases/mesa";
import * as firebase from "firebase";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}



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
  // listaMesas: any;
  @Input() mesasDisponibles:any;
  // listadoMesas:Array<Mesa>;
  listadoMesas: any;

  selectedFile: ImageSnippet;
  imagenNueva: any;
  checkagregoimagen: boolean = false;
  agregoimagenErrorMsg: boolean = false;
  msjDisponible: boolean = false;


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
      this.mesasDisponibles = [];
      this.listadoMesas = mesas;
      this.listadoMesas.forEach(element => {
        if(element.estado == "vacia" )
        {
          this.msjDisponible = false;
            this.mesasDisponibles.push(element);
        }
       
      });
      if (!this.mesasDisponibles.length) {
        this.msjDisponible = true;
      }
    
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
 
 async IngresarPedido()
 {
   this.elPedido.detalle= this.productosPedido;
   this.elPedido.idMesa=this.mesaSeleccionada;
   this.elPedido.id= this.crearID(5);
  //  console.log(this.elPedido);
   
  await this.baseService.addItem('comanda/Pedidos', this.elPedido); 

  // await this.baseService.getItems("comanda/Mesas").then( async mesas => {
   
    
    // let listadoMesas = mesas;
    console.log(this.listadoMesas);
    let mesaporusar = this.listadoMesas.find(elem => (elem.idMesa == this.elPedido.idMesa));

    console.log(this.elPedido);

    let mesaporusarenviar= {
      key: mesaporusar.key,
      idMesa: mesaporusar.idMesa,
      estado:"con cliente esperando pedido",
      imgMesa: ""
    }
    console.log(mesaporusarenviar );
    
    this.baseService.updateItem('comanda/Mesas',mesaporusar.key,mesaporusarenviar); 
    this.TraerMesasDisp();

  // });
 
 
 }

 
 
//  async IngresarPedidoPromise()
//  {
//    this.elPedido.detalle= this.productosPedido;
 
//    console.log(this.mesaSeleccionada);
//    this.elPedido.idMesa=this.mesaSeleccionada;
   

 
//  }
 processFile(imageInput){

  this.imagenNueva = imageInput;
  this.checkagregoimagen = true; 
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

 descarga(){
  // this.eliminOK = false;
  const documentDefinition = { content: [
      {
          text: 'Facturacion',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 20]
      },
      this.getListaUsuariosPDF(),
  
    ],
        styles: {
          name: {
            fontSize: 14,
          },
          jobTitle: {
            fontSize: 16,
            bold: true,
            italics: true
          }
        }
      }

  
  pdfMake.createPdf(documentDefinition).download('Facturacion.pdf');

}
getListaUsuariosPDF(){
  console.log(this.elPedido);

  const exs = [];
  // this.listaProductos.forEach(element => {
    exs.push(
      [{
        columns: [
          [{
            text: "Descripcion: "+ this.elPedido.detalle,
            style: 'jobTitle'
          },
          {
            text:  "Mesa: "+ this.elPedido.idMesa,
            style: 'name'
          },
          // {
          //   text:  "Perfil: "+ elPedido.perfil,
          //   style: 'name'
          // },
          // {
          //   text:  "Sexo: "+ element.sexo,
          //   style: 'name'
          // },
          // {
          //   text:  "Firebase Key: "+ element.key,
          //   style: 'name'
          // },
        ]
        ]
      }]
    );
  // });
  return {
    table: {
      widths: ['*'],
      body: [
        ...exs
      ]
    }
  };

}
 

}
