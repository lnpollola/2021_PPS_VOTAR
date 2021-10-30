import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as firebase from "firebase";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Escuela } from 'src/app/clases/escuela';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-gestion-escuelas',
  templateUrl: './gestion-escuelas.component.html',
  styleUrls: ['./gestion-escuelas.component.css']
})
export class GestionEscuelasComponent implements OnInit {
  
  listaMesas;
  listaEscuelas;
  importe;
  display: boolean = false;

  noIMGcargada: boolean = false;

  listaUsuarios:Array<any>;
  usuarioRegistrado: boolean = false;
  agregOK:boolean = false;
  eliminOK:boolean = false;
  perfiles = [
  ];

  imagenNueva: any;
  checkagregoimagen: boolean = false;
  agregoimagenErrorMsg: boolean = false;
  num = new FormControl('', [
    Validators.required,
  ]);
  
  direccion = new FormControl('', [ ]);
  distrito = new FormControl('', [ ]);
  nombre = new FormControl('', [ ]);
  perfil = new FormControl(null, [ ]);
  

  registroForm: FormGroup = this.builder.group({
    num: this.num,
    direccion: this.direccion,
    distrito: this.distrito,
    nombre: this.nombre
  });

  constructor( private builder: FormBuilder,
    private baseService:FirebaseService) {
    this.perfil=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
  
    this.TraerLasEscuelas();
   }
   
  TraerLasEscuelas() {
    this.baseService.getItems("votar/Escuelas").then(escuelas => {
      
      this.listaEscuelas = escuelas;
      // console.log(this.listaEscuelas[0].nombre);
      var long = [];
      
      for (let index = 0; index < this.listaEscuelas.length; index++) {
        this.perfiles[index] = this.listaEscuelas[index].nombre;
        
      }
     
      console.log(this.perfiles);
    
    });
  }

  ngOnInit() {
  }


  borrarEscuela(Escuela){
    console.log(Escuela);
    this.baseService.removeItem('votar/Escuelas', Escuela.key );

    this.agregOK = false;
    this.eliminOK = true;
    this.TraerLasEscuelas();
  }

  IngresarEscuela()
   {
            let escuelaNuev = new Escuela(this.registroForm.get('num').value,
                                          this.registroForm.get('direccion').value,
                                          this.registroForm.get('distrito').value,
                                          this.registroForm.get('nombre').value,
                                          "cerrada"
                                          );
           
            this.baseService.addItem('votar/Escuelas', escuelaNuev); 
            this.eliminOK = false;
            this.agregOK = true;

            this.registroForm.reset();
                
          this.TraerLasEscuelas();
        // }
      }

  
      descarga(){
        this.eliminOK = false;
        const documentDefinition = { content: [
            {
                text: 'Listado de Escuelas',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                decoration: 'underline',
                margin: [0, 0, 0, 20]
            },
            this.getListaEscuelasPDF(),
        
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
    
        
        pdfMake.createPdf(documentDefinition).download('ListadoEscuelas.pdf');
      
      }
      getListaEscuelasPDF(){
        const exs = [];
        this.listaEscuelas.forEach(element => {
          exs.push(
            [{
              columns: [
                [{
                  text: "Nro Escuela: "+ element.idEscuela,
                  style: 'jobTitle'
                },
                {
                  text:  "Nombre: "+ element.nombre,
                  style: 'name'
                },
                {
                  text:  "Direccion: "+ element.direccion,
                  style: 'name'
                },
                {
                  text:  "Localidad: "+ element.distrito,
                  style: 'name'
                },
                {
                  text:  "Estado: "+ element.estado,
                  style: 'name'
                },
                {
                  text:  "Firebase Key: "+ element.key,
                  style: 'name'
                },
              ]
              ]
            }]
          );
        });
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
