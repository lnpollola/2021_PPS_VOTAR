import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as firebase from "firebase";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mesa } from 'src/app/clases/mesa';



@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.css']
})
export class ListadoMesasComponent implements OnInit {

  listaMesas;
  listaEscuelas;
  importe;
  display: boolean = false;
  perfilLog;
  noIMGcargada: boolean = false;
  // mesa = new Mesa();
 

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
    // Validators.minLength(5)
  ]);
  
  // clave = new FormControl('', [
  //   Validators.required
  // ]);

  perfil = new FormControl(null, [
    Validators.required,
    // Validators.required
    
    
  ]);
  


  // sexo = new FormControl('');


  registroForm: FormGroup = this.builder.group({
    num: this.num,
    // clave: this.clave,
    // sexo: this.sexo,
    perfil: this.perfil
   
  });








  constructor( private builder: FormBuilder,
    private baseService:FirebaseService) {
      
    this.perfilLog=   JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
 
    this.TraerLasMesas();
    this.TraerLasEscuelas();
   }
   
  TraerLasEscuelas() {
    this.baseService.getItems("votar/Escuelas").then(escuelas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaEscuelas = escuelas;
      console.log(this.listaEscuelas[0].nombre);
      var long = [];
      
      for (let index = 0; index < this.listaEscuelas.length; index++) {
        this.perfiles[index] = this.listaEscuelas[index].nombre;
        
      }
     
      
     
      console.log(this.perfiles);

      
    
    });
  }

  ngOnInit() {
  }
  TraerLasMesas()
  {
    this.baseService.getItems("votar/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      this.listaMesas = mesas;

   

      
    
    });

 
  }


  Abrir(idMesa)
  {
    

    this.baseService.getItems("votar/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      let listadoMesas = mesas;
      console.log(idMesa);
      let mesaACobrar = listadoMesas.find(elem => (elem.idMesa == idMesa ));
      console.log(mesaACobrar);

      let mesaAEnviar = {
        idMesa: mesaACobrar.idMesa,
        estado: "con cliente pagando",
        imgMesa: mesaACobrar.imgMesa,
        montoTotal: mesaACobrar.montoTotal
      }
      
      this.baseService.updateItem('comanda/Mesas',mesaACobrar.key,mesaAEnviar); 

      this.TraerLasMesas();
      
    
    });
   
  }

  Cerrar(idMesa)
  {

    this.baseService.getItems("comanda/Mesas").then(mesas => {
      // setTimeout(() => this.spinner = false, 2000);
      
      let listadoMesas = mesas;
      console.log(idMesa);
      let mesaACobrar = listadoMesas.find(elem => (elem.idMesa == idMesa ));
      console.log(mesaACobrar);

      let mesaAEnviar = {
        idMesa: mesaACobrar.idMesa,
        estado: "vacia",
        imgMesa: "",
        montoTotal: 0
      }
      
      this.baseService.updateItem('comanda/Mesas',mesaACobrar.key,mesaAEnviar); 

      this.TraerLasMesas();
      
    
    });
   
  }

  borrarMesa(mesa){
    console.log(mesa);
    this.baseService.removeItem('votar/Mesas', mesa.key );

    this.agregOK = false;
    this.eliminOK = true;
    this.TraerLasMesas();
  }

  IngresarMesa()
   {
 

            let mesaNuev = new Mesa(
                              this.registroForm.get('num').value,
                              "cerrada",
                              this.registroForm.get('perfil').value
                              );
           
            this.baseService.addItem('votar/Mesas', mesaNuev); 
          
            this.eliminOK = false;
            this.agregOK = true;
          
            this.registroForm.reset();
    
            this.TraerLasMesas();

}}
