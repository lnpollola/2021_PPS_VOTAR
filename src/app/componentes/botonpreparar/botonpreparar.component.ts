import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-botonpreparar',
  templateUrl: './botonpreparar.component.html',
  styleUrls: ['./botonpreparar.component.css']
})
export class BotonprepararComponent implements OnInit {

  @Input() id:number;
  @Input() tiempoPreparacion:number;
  @Output() lanzador=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  Preparar()
  {
    // this.httpPedido.PrepararPedido(this.id, this.tiempoPreparacion)
    
    // .subscribe((data)=>{
    //   this.lanzador.emit();
    // })
  
  }

}
