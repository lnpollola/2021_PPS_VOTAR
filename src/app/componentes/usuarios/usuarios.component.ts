import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';
// import { UsuariosService } from "../services/usuarios.service";
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service';
// import fire = require('firebase/empty-import');

// import { MessageService } from 'primeng/api';
// import {Message} from 'primeng/components/common/api';

// export interface DetalleUsuarios {
//   usuario: string;
//   perfil: string;
//   estado: string;
//   accionesSusp: any;
//   accionesDel: any;
// }

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  
})

export class UsuariosComponent implements OnInit {

  @Input() dataSource;

  listaUsuarios:Array<any>;
  usuarioRegistrado: boolean = false;
  agregOK:boolean = false;
  perfiles = [
    {name: 'admin'},
    {name: 'mozo'},
    {name: 'cocina'},
    {name: 'cochera'},
    {name: 'barra'},
    {name: 'candy'}

  ];


  displayedColumns: string[] = ['usuario', 'perfil', 'estado','accionesSusp','accionesDel'];


  // private msjServ: MessageService
  // private usrService: UsuariosService, private httpUsuarios:UsuariosService
  constructor( private builder: FormBuilder,
    private baseService:FirebaseService, ) {
    this.TraerTodosLosUsuarios();
   }

   email = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  clave = new FormControl('', [
    Validators.required
  ]);

  perfil = new FormControl(null, [
    // null
    // Validators.required
  ]);
  

  sexo = new FormControl('');

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    sexo: this.sexo,
    perfil: this.perfil
   
  });


   TraerTodosLosUsuarios()
   {

//    this.httpUsuarios.TraerUsuarios().subscribe(data=>{
//     this.listaUsuarios= JSON.parse(data._body);
//    // console.log(this.listaUsuarios);
    
//  });

this.baseService.getItems("comanda/Usuarios").then(users => {
  // setTimeout(() => this.spinner = false, 2000);
  
  this.listaUsuarios = users;
  

});
   }


   IngresarUsuario()
   {
 
      
  
        let usuario= this.registroForm.get('email').value;
        let clave= this.registroForm.get('clave').value;
        let perfil= this.registroForm.get('perfil').value;
        let sexo= this.registroForm.get('sexo').value;
        console.log(this.registroForm);                            


       let usuarioNuev = new Usuario(this.registroForm.get('email').value,this.registroForm.get('clave').value,
                                     this.registroForm.get('perfil').value,this.registroForm.get('sexo').value);
        console.log(usuarioNuev);                            
        let usuarioNuevo = 
        {
          usuario : this.registroForm.get('email').value,
          clave: this.registroForm.get('clave').value,
          perfil: this.registroForm.get('perfil').value,
          sexo: this.registroForm.get('sexo').value
        }

        let usuarioLogueado = this.listaUsuarios.find(elem => (elem.username == usuarioNuev.username));
        if (usuarioLogueado != undefined) {

          this.usuarioRegistrado = true;
        }
        else{
         
          this.baseService.addItem('comanda/Usuarios', usuarioNuevo); 
          this.usuarioRegistrado = false;
          this.agregOK = true;
        }


      
        // this.httpUsuarios.CargarUsuario(usuario, clave, sexo, perfil)
        // .subscribe((data)=>{
        //  // console.log(data);
        //   this.TraerTodosLosUsuarios();
        // })
        // ;
        
  
      

       
   }
   


  ngOnInit() {
    this.TraerTodosLosUsuarios();
  }

}
