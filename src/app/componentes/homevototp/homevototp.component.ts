import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { DatePipe } from '@angular/common';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-homevototp',
  templateUrl: './homevototp.component.html',
  styleUrls: ['./homevototp.component.css']
  // outputs: ['cambioclasefooter']


})
export class HomevototpComponent implements OnInit {
 
  imagesNacion = [  
    { img: "./assets/images/Grupo1.jpg" },
    { img: "./assets/images/Grupo2.jpg" },
    { img: "./assets/images/Grupo3.jpg" },
    { img: "./assets/images/Grupo4.jpg" },
    { img: "./assets/images/Grupo5.jpg" },
    { img: "./assets/images/Grupo6.jpg" },
    { img: "./assets/images/Grupo7.jpg" },
    { img: "./assets/images/Grupo8.jpg" },
    { img: "./assets/images/Grupo9.jpg" },
    { img: "./assets/images/Grupo10.jpg" },
    { img: "./assets/images/Grupo11.jpg" }


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
    "infinite": true  
  };  
  listaVotantes: any;
  usuario: any;
  votante: any;



  nombregrupovotante: any;

  selectedOption: string;

  options = [
    { name: "option1", value: "Grupo1" },
    { name: "option2", value: "Grupo2" },
    { name: "option3", value: "Grupo3" },
    { name: "option4", value: "Grupo4" },
    { name: "option5", value: "Grupo5" },
    { name: "option6", value: "Grupo6" },
    { name: "option7", value: "Grupo7" },
    { name: "option8", value: "Grupo8" },
    { name: "option9", value: "Grupo9" },
    { name: "option10", value: "Grupo10" },
    { name: "option11", value: "Grupo11" }
  ];

 


  constructor(private baseService:FirebaseService, private router: Router) { }

  afterChange(e) {
    this.muestroCandidato = false;

  }
  
  beforeChange(e) {
    this.muestroCandidato = false;

  }  

  candidatoElegido(image){
    // console.log("clicked img " + image);

    switch (image) {
      case "./assets/images/Grupo1.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 1";
        this.candidatoConfirmado = "grupo1";
        break;

      case "./assets/images/Grupo2.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 2";
        this.candidatoConfirmado = "grupo2";
        break;

      case "./assets/images/Grupo3.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 3";
        this.candidatoConfirmado = "grupo3";
        break;

      case "./assets/images/Grupo4.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 4";
        this.candidatoConfirmado = "grupo4";

        break;

      case "./assets/images/Grupo5.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 5";
        this.candidatoConfirmado = "grupo5";
        break;
      case "./assets/images/Grupo6.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 6";
        this.candidatoConfirmado = "grupo6";
        break;
      case "./assets/images/Grupo7.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 7";
        this.candidatoConfirmado = "grupo7";
        break;
      case "./assets/images/Grupo8.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 8";
        this.candidatoConfirmado = "grupo8";
        break;
      case "./assets/images/Grupo9.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 9";
        this.candidatoConfirmado = "grupo9";
        break;
      case "./assets/images/Grupo10.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 10";
        this.candidatoConfirmado = "grupo10";
        break;
      case "./assets/images/Grupo11.jpg":
        this.muestroCandidato = true;
        this.candidatoSeleccionadoLabel = "GRUPO 11";
        this.candidatoConfirmado = "grupo11";
        break;
    
      default:
        break;
    }
 
  }

  confirmoCandidato(){
    console.log(this.candidatoConfirmado);
    console.log(this.nombregrupovotante);
    console.log(this.selectedOption)
    this.isLoading = true;
    setTimeout(() => this.muestroCandidato = false, 8000);
    // this.usuario = JSON.parse(sessionStorage.getItem('Votantes')) ;

    // this.baseService.getItems("votar/Votantes").then(usuarios => {
    //   this.listaVotantes = usuarios;
    
     
    //   this.votante = this.listaVotantes.find(elem => (elem.dni == this.usuario.dni ));
      
    //   var agregoVotante = {
    //    dni: this.votante.dni,
    //   //  dvalidador: this.votante.dvalidador,
    //    flagvoto: true,
    //    validoauxiliar: true,
    //    idEscuela: this.votante.idEscuela,
    //    idMesa: this.votante.idMesa,
    //    nombre: this.votante.nombre,
    //    orden: this.votante.orden,
    //    sexo: this.votante.sexo,
    //    validovotar: true
        
    //   }
      
    //   this.baseService.updateItem('votar/Votantes',this.votante.key,agregoVotante); 

     
     
    // });
      
  
    this.baseService.getItems("votar/Votostp").then(candidatos => {
      

      this.listaCandidatos = candidatos;
      console.log(this.listaCandidatos);
     
      this.partidoBuscado = this.listaCandidatos.find(elem => (elem.key == this.candidatoConfirmado ));
     
      console.log(this.partidoBuscado);

      var agregovoto = {
        cantidad: this.partidoBuscado.cantidad+1
      }
      this.descarga(this.partidoBuscado);

      this.baseService.updateItem('votar/Votostp',this.partidoBuscado.key,agregovoto); 


    });

    

    this.isLoading = false;
    this.candidatosCard = false;
    this.yaVoto = true;

    

    

  }

  descarga(tpelegido){
    // this.usuario = JSON.parse(sessionStorage.getItem('Votantes')) ;
    // this.eliminOK = false;
    console.log(tpelegido)
    const documentDefinition = { content: [
        {
            text: 'Comprobante de Voto',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            decoration: 'underline',
            margin: [0, 0, 0, 20]
        },
        this.datosVotante(this.nombregrupovotante,this.selectedOption, tpelegido.key),
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
    // setTimeout(() => this.router.navigateByUrl('/encuesta'), 5000);
    
  

   }

   datosVotante(nombre,nombregrupo,tpelegido){
    const exs = [];
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(Date.now() , 'dd-MMM-yyyy HH:mm:ss')
      exs.push(
        [{
          columns: [
            [{
              text: "Nombre del Votante: "+ nombre,
              style: 'jobTitle'
            },
              {
              text: "Grupo del Votante: "+ nombregrupo,
              style: 'jobTitle'
            },
            {
              text:  "Fecha y Hora: "+  formattedDate,
              style: 'name'
            },
            {
              text:  "Trabajo Práctico votado: "+ tpelegido.toUpperCase(),
              style: 'name'
            },
            {
              text:  "Materia: "+ "Practica Superior Supervisada",
              style: 'name'
            },
            {
              text:  "Profesor: "+ "Carlos Ruiz",
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

  ngOnInit() {
   

  }



  

  
}
