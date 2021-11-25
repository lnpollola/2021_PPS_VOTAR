import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "../../clases/producto";
import { Pedido } from "../../clases/pedido";
import { FirebaseService } from '../../servicios/firebase.service';
import { Mesa } from "../../clases/mesa";
import * as firebase from "firebase";
import { Pedidodetalle } from "../../clases/pedidodetalle";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
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
  totalPedidoFactura:number = 0;
  @Input() mesaSeleccionada:number;
  elPedido:Pedido;
  busqueda:string;
  respuestaAsync: any;
  // listaMesas: any;
  @Input() mesasDisponibles:any;
  // listadoMesas:Array<Mesa>;
  listadoMesas: any;
  elDetallePedido: Pedidodetalle;
  agregOK:boolean = false;
  eliminOK:boolean = false;
  selectedFile: ImageSnippet;
  imagenNueva: any;
  checkagregoimagen: boolean = false;
  agregoimagenErrorMsg: boolean = false;
  msjDisponible: boolean = false;
  pedidoConfirmado: boolean = false;
  detalleDescarga = [];
  totalPedidoParaDescarga : number;

  dish: boolean=true;
  promotion: boolean=true;
  imagesNacion = [  
    { img: "./assets/images/boletaDIPUTADOSPCIA_FDI.jpg" },
    { img: "./assets/images/boletaDIPUTADOSPCIA_FDT.jpg" },
    { img: "./assets/images/boletaDIPUTADOSPCIA_JUNTOS.jpg" },
    { img: "./assets/images/boletaDIPUTADOSPCIA_VCV.jpg" },
    { img: "./assets/images/boletaDIPUTADOSPCIA_AV.jpg" }

  ];  
  muestroCandidato: boolean= false;
  candidatoSeleccionadoLabel: string;
  candidatoConfirmado: string;
  listaCandidatos: any;
  partidoBuscado: any;
  yaVoto: boolean = false;
  isLoading: boolean = false;
  candidatosCard: boolean = true;




  // CAROUSEL IMG CFG
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    // "autoplay": true,
    // "infinite": true  
  };  
  listaVotantes: any;
  usuario: any;
  votante: any;


  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  afterChange(e) {
    this.muestroCandidato = false;

  }
  
  beforeChange(e) {
    this.muestroCandidato = false;

  }  

  candidatoElegido(image){
    // console.log("clicked img " + image);

    switch (image) {
      case "./assets/images/boletaDIPUTADOSPCIA_FDI.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "NICOLAS DEL CAÑO - Frente de Izquierda";
        this.candidatoConfirmado = "FDI";
        break;

      case "./assets/images/boletaDIPUTADOSPCIA_FDT.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "VICTORIA TOLOSA PAZ - Frente de Todos";
        this.candidatoConfirmado = "FDT";
        break;

      case "./assets/images/boletaDIPUTADOSPCIA_JUNTOS.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "DIEGO CESAR SANTILLI - Juntos";
        this.candidatoConfirmado = "JUNTOS";
        break;

      case "./assets/images/boletaDIPUTADOSPCIA_VCV.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "FLORENCIO RANDAZZO - Vamos con Vos";
        this.candidatoConfirmado = "VCV";

        break;

      case "./assets/images/boletaDIPUTADOSPCIA_AV.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "CYNTHIA LILIANA HOTTON - Alianza + Valores";
        this.candidatoConfirmado = "AV";
        break;
    
      default:
        break;
    }
 
  }

  confirmoCandidato(){
    console.log(this.candidatoConfirmado);
    
    this.isLoading = true;
    setTimeout(() => this.muestroCandidato = false, 8000);
    this.usuario = JSON.parse(sessionStorage.getItem('Votantes')) ;

    this.baseService.getItems("votar/Votantes").then(usuarios => {
      this.listaVotantes = usuarios;
    
     
      this.votante = this.listaVotantes.find(elem => (elem.dni == this.usuario.dni ));
      
      var agregoVotante = {
       dni: this.votante.dni,
      //  dvalidador: this.votante.dvalidador,
       flagvoto: true,
       validoauxiliar: true,
       idEscuela: this.votante.idEscuela,
       idMesa: this.votante.idMesa,
       nombre: this.votante.nombre,
       orden: this.votante.orden,
       sexo: this.votante.sexo,
       validovotar: true
        
      }
      
      this.baseService.updateItem('votar/Votantes',this.votante.key,agregoVotante); 

     
     
    });
      
  
    this.baseService.getItems("votar/Votos").then(candidatos => {
      

      this.listaCandidatos = candidatos;
      console.log(this.listaCandidatos);
     
      this.partidoBuscado = this.listaCandidatos.find(elem => (elem.key == this.candidatoConfirmado ));
     
      console.log(this.partidoBuscado);

      var agregovoto = {
        cantidad: this.partidoBuscado.cantidad+1
      }

      this.baseService.updateItem('votar/Votos',this.partidoBuscado.key,agregovoto); 
    


    });

    

    this.isLoading = false;
    this.candidatosCard = false;
    this.yaVoto = true;

    this.descarga();

    

  }
  

  constructor( private baseService:FirebaseService,private router: Router) {

   }

   descarga(){
    this.usuario = JSON.parse(sessionStorage.getItem('Votantes')) ;
    this.eliminOK = false;
    const documentDefinition = { content: [
        {
            text: 'Comprobante de Voto',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            decoration: 'underline',
            margin: [0, 0, 0, 20]
        },
        this.datosVotante(this.usuario),
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

    
    pdfMake.createPdf(documentDefinition).download('Comprobante de Voto.pdf');

    this.yaVoto = true;
    setTimeout(() => this.router.navigateByUrl('/encuesta'), 5000);
    
  

   }
   datosVotante(agregoVotante){
    const exs = [];
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(Date.now() , 'dd-MMM-yyyy HH:mm:ss')
      exs.push(
        [{
          columns: [
            [{
              text: "DNI Votante: "+ agregoVotante.dni,
              style: 'jobTitle'
            },
            {
              text:  "Fecha y Hora: "+  formattedDate,
              style: 'name'
            },
            {
              text:  "Nombre: "+ agregoVotante.nombre,
              style: 'name'
            },
            {
              text:  "Sexo: "+ agregoVotante.sexo,
              style: 'name'
            },
            {
              text:  "Orden: "+ agregoVotante.orden,
              style: 'name'
            },
            {
              text:  "ID Escuela: "+ agregoVotante.idEscuela,
              style: 'name'
            },
            {
              text:  "ID Mesa: "+ agregoVotante.idMesa,
              style: 'name'
            },
         
          ]
          ]
        }]
      );

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    }
    ;
  
  }
   
   AgregarAlPedido(producto:Producto)
   {
     this.pedidoConfirmado = false;
     this.productosPedido ? this.productosPedido.push(producto) : this.productosPedido= new Array<Producto>(producto);
     
    this.totalPedido = this.totalPedido + producto.precio;
   // console.log(this.totalPedido);
     
   }
 
   QuitarAlPedido(producto:Producto){
    this.pedidoConfirmado = false;
   
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
   this.elPedido.estado = "pendiente"
   let ticketPedido = this.crearID(5);

   for (let i = 0; i < this.productosPedido.length; i++) {

    this.elDetallePedido = new Pedidodetalle();
    this.elDetallePedido.id = i+1;
    this.elDetallePedido.idPedido = ticketPedido;
    this.elDetallePedido.nombre = this.productosPedido[i].nombre;
    this.elDetallePedido.precio = this.productosPedido[i].precio,
    this.elDetallePedido.sector = this.productosPedido[i].sector,
    this.elDetallePedido.tiempoPreparacion = 0;
    this.elDetallePedido.estado = "pendiente";
    this.detalleDescarga.push(this.elDetallePedido);
  
  

    await this.baseService.addItem('comanda/PedidosDetalle', this.elDetallePedido); 
     
   }

  //  this.elPedido.detalle= this.productosPedido;
   this.elPedido.idMesa=this.mesaSeleccionada;
   this.elPedido.id= ticketPedido;
   this.elPedido.montoTotal = this.totalPedido;
   this.totalPedidoFactura = this.totalPedido;

   
  await this.baseService.addItem('comanda/Pedidos', this.elPedido); 


  // await this.baseService.getItems("comanda/Mesas").then( async mesas => {
   
    
    // let listadoMesas = mesas;
    // console.log(this.listadoMesas);
    let mesaporusar = this.listadoMesas.find(elem => (elem.idMesa == this.elPedido.idMesa));
    this.agregarImagen();
    let imagen:string = localStorage.getItem("ImagenMesaSeleccionada");
 


    let mesaporusarenviar= {
      idMesa: mesaporusar.idMesa,
      estado:"con cliente esperando pedido",
      imgMesa: imagen,
      montoTotal: this.totalPedido
    }
    
    this.baseService.updateItem('comanda/Mesas',mesaporusar.key,mesaporusarenviar); 
    this.productosPedido = [];
    this.totalPedido = 0;
    this.pedidoConfirmado = true;
    localStorage.removeItem("ImagenMesaSeleccionada");

    // this.TraerMesasDisp();

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
  console.log(this.imagenNueva)
  this.checkagregoimagen = true; 
}

agregarImagen()
{
  // let storageRef = firebase.storage().ref();
  // let errores: number = 0;
  // let usuarioLogueado: any = JSON.parse(sessionStorage.getItem('Usuarios'));
  // let filename: string = this.cuentaRegistro.username;
  const file: File = this.imagenNueva.files[0];
  const reader = new FileReader();
  // const imageRef = storageRef.child(`comanda/Mesas/${filename}.jpg`);
  let enviarFotoB64;

  reader.onloadend = function() {
    enviarFotoB64= reader.result;
    localStorage.setItem("ImagenMesaSeleccionada",enviarFotoB64);
    
    // imageRef.putString(enviarFotoB64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
     
    // })
    //   .catch(() => {
    //     errores++;
    //   });
  }
  
  reader.readAsDataURL(file);
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
