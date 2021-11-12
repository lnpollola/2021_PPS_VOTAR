import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { Votante } from "../../clases/votante";

import * as firebase from "firebase";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioUtilizado: boolean = false;
  contraError: boolean = false;
  agregado: boolean = false;
  faltancampos: boolean = false;
  dniincompleto: boolean = false;
  listadoUsuarios:any=[];
  isLoading: boolean = false;

  public cuentaRegistro  =
  {
    "DNI" : "",
    "SEXO" : "",
    "NOMBRE": "",
    "IDMESA": 0,
    "IDESCUELA":0 ,
    "ORDEN": 0
    // "DVALIDADOR" : 0
  }

  sexoElegido:string = "hombre";
  radioSelected:string;
  

  constructor(private baseService:FirebaseService ) { }

  ngOnInit() {
  }

  registrarme(){
    this.agregado = false;
    this.usuarioUtilizado = false;
    this.dniincompleto = false;
    if(!this.validateDNI(this.cuentaRegistro.DNI))
    {
      this.dniincompleto = true;
    }
    else{
      this.dniincompleto = false;
    }

    if (
        this.cuentaRegistro.DNI == "" || 
        // this.cuentaRegistro.SEXO == "" ||
        // this.cuentaRegistro.NOMBRE == "" ||
        this.cuentaRegistro.NOMBRE == "") 
        {
          this.faltancampos = true;  
        }
    else{
      this.faltancampos = false;
    }

  
    if(this.faltancampos == false &&  this.dniincompleto == false )
    {
      this.isLoading = true;
    
      this.baseService.getItems("votar/Votantes").then(users => {
     
        this.listadoUsuarios = users;
  
        let usuarioLogueado = this.listadoUsuarios.find(elem => (elem.DNI == this.cuentaRegistro.DNI));
     
        if (usuarioLogueado !== undefined) {
          this.usuarioUtilizado = true;
          this.isLoading = false;
          
        }
        else{
          {
            this.usuarioUtilizado = false;
         
            let usuarioNuev = new Votante(
                                          this.cuentaRegistro.DNI         ,
                                          this.sexoElegido              ,     
                                          this.cuentaRegistro.NOMBRE      , 
                                          this.cuentaRegistro.IDMESA      , 
                                          this.cuentaRegistro.IDESCUELA   , 
                                          this.cuentaRegistro.ORDEN        
                                          );
          this.baseService.addItem('votar/Votantes', usuarioNuev); 
          this.cuentaRegistro.DNI= "";
          this.cuentaRegistro.SEXO= "";
          this.cuentaRegistro.NOMBRE= "";
          this.cuentaRegistro.IDMESA= 0;
          this.cuentaRegistro.IDESCUELA= 0;
          this.cuentaRegistro.ORDEN= 0;
          // this.cuentaRegistro.DVALIDADOR= 0;
          this.isLoading = false;
          this.agregado = true;

          }
 
          
        }
    
    
    });
    }
    
  
  }
  // agregarImagen()
  // {
  //   let storageRef = firebase.storage().ref();
  //   let errores: number = 0;
  //   let usuarioLogueado: any = JSON.parse(sessionStorage.getItem('Usuarios'));
  //   let filename: string = this.cuentaRegistro.username;
  //   const file: File = this.imagenNueva.files[0];
  //   const reader = new FileReader();
  //   const imageRef = storageRef.child(`votar/Usuarios/${filename}.jpg`);
  //   let enviarFotoB64;

  //   reader.onloadend = function() {
  //     enviarFotoB64= reader.result;
  //     localStorage.setItem("ImagenSeleccionada",enviarFotoB64);
      
  //     imageRef.putString(enviarFotoB64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
       
  //     })
  //       .catch(() => {
  //         errores++;
  //       });
  //   }
    
  //   reader.readAsDataURL(file);
  // }

  // processFile(imageInput){

  //   this.imagenNueva = imageInput;
  //   this.checkagregoimagen = true; 
  // }


  validateDNI(DNI) {
   if( DNI.toString().length == 8 )
    {
      return 1;
    }  
    else {
      return 0;
    }
  }

onItemChange(value)
{
  this.sexoElegido=value;
}

}
