import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';

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
  emailincompleto: boolean = false;
  listadoUsuarios:any=[];
  isLoading: boolean = false;

  public cuentaRegistro  =
  {
    "username" : "",
    "password" : "",
    "passwordR" : ""


  }

  sexoElegido:string = "hombre";
  radioSelected:string;

  constructor(private baseService:FirebaseService ) { }

  ngOnInit() {
  }

  registrarme(){
    this.agregado = false;
    this.usuarioUtilizado = false;
    this.emailincompleto = false;
    if(!this.validateEmail(this.cuentaRegistro.username))
    {
      this.emailincompleto = true;
    }
    else{
      this.emailincompleto = false;
    }
    if (this.cuentaRegistro.username == "" || this.cuentaRegistro.password == "" ||
        this.cuentaRegistro.passwordR == "") {
          this.faltancampos = true;
          
    }
    else{
      this.faltancampos = false;
    }

    if(this.cuentaRegistro.password != this.cuentaRegistro.passwordR)
    {
      this.contraError = true;
    }
    else{
      this.contraError = false;
    }
  
    if(this.faltancampos == false && this.contraError == false && this.emailincompleto == false )
    {
      this.isLoading = true;
    
      this.baseService.getItems("comanda/Usuarios").then(users => {
     
        this.listadoUsuarios = users;
  
        let usuarioLogueado = this.listadoUsuarios.find(elem => (elem.username == this.cuentaRegistro.username));
        console.log(usuarioLogueado);
     
        if (usuarioLogueado !== undefined) {
          this.usuarioUtilizado = true;
          this.isLoading = false;
          
        }
        else{
          this.usuarioUtilizado = false;
          let usuarioCargar = {
            "username":this.cuentaRegistro.username,
            "password":this.cuentaRegistro.password,
            "perfil": "cliente",
            "estado": "activo",
            "sexo": this.sexoElegido
          }
          this.baseService.addItem('comanda/Usuarios', usuarioCargar); 
          this.cuentaRegistro.username= "";
          this.cuentaRegistro.password= "";
          this.cuentaRegistro.passwordR= "";
  
          this.isLoading = false;
          this.agregado = true;
        }
    
    
    });
    }
    
  
  }


    validateEmail(email) {
    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
}

onItemChange(value)
{
  this.sexoElegido=value;
}

}
