import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-botonservir',
  templateUrl: './botonservir.component.html',
  styleUrls: ['./botonservir.component.css']
})
export class BotonservirComponent implements OnInit {

  @Input() idDetalle:number;
 
  @Output() lanzador=new EventEmitter();

  constructor() { }

  Servir()
  {
    // this.httpPedido.ServirPedido(this.idDetalle)
    // .subscribe((data)=>{
    //   this.lanzador.emit();
    // })

  }

  ngOnInit() {
  }

}
