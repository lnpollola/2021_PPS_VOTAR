import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as firebase from "firebase";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resultados-generales',
  templateUrl: './resultados-generales.component.html',
  styleUrls: ['./resultados-generales.component.css']
})
export class ResultadosGeneralesComponent implements OnInit {

  listaResultados = [{
    logo: "1",
    key: "1",
    nombre: '1',
    cantidad: 1
  }];

  
  flagTrajores = false;



  constructor( private baseService:FirebaseService) { 
  }

  ngOnInit() {
    // this.listaResultados = [] ;
    this.traerResultadosGenerales();
    this.flagTrajores = true;
  }

  traerResultadosGenerales() {

    this.baseService.getItems("votar/Votos").then(resultados => {

      this.listaResultados = resultados;
      this.listaResultados.sort( 
          function (a,b)  {
            if (a.cantidad < b.cantidad) {
              return 1;
            }
            if (a.cantidad > b.cantidad) {
              return -1;
            } 
            return 0;
      }) ;
     
    });
  
  }

}
