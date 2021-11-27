import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-muestroganador',
  templateUrl: './muestroganador.component.html',
  styleUrls: ['./muestroganador.component.css']
})
export class MuestroganadorComponent implements OnInit {
 
  // listaResultados:any;
  listaResultados = [{
    nombre: '1',
    cantidad: 1
  }];
  flagTrajores = false;



  constructor(private baseService:FirebaseService) {
 

   }

  ngOnInit() {
    // this.listaResultados = [] ;
    this.traerResultadosGenerales();
    this.flagTrajores = true;
  }

  async traerResultadosGenerales() {
    
   await this.baseService.getItems("votar/Votostp").then(resultados => {

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
