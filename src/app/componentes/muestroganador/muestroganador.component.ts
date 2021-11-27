import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-muestroganador',
  templateUrl: './muestroganador.component.html',
  styleUrls: ['./muestroganador.component.css']
})
export class MuestroganadorComponent implements OnInit {
  listaGrupos: any;

  constructor(private baseService:FirebaseService) {
    this.baseService.getItems("votar/Votostp").then(grupos => {
      

      this.listaGrupos = grupos;
      console.log(this.listaGrupos);

      this.listaGrupos.forEach(element => {
        
      });
      this.listaGrupos.sort(function(a, b) {
        return a - b;
      });

      Math.max
     
      // this.partidoBuscado = this.listaCandidatos.find(elem => (elem.key == this.candidatoConfirmado ));
     
     

     
    });

   }

  ngOnInit() {
  }

  

}
