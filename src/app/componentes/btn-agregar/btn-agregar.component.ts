import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from "../../clases/producto";

@Component({
  selector: 'app-btn-agregar',
  templateUrl: './btn-agregar.component.html',
  styleUrls: ['./btn-agregar.component.css']
})
export class BtnAgregarComponent implements OnInit {

  @Input() producto:Producto;
  @Output() enviar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  Agregar()
  {
    //console.log("se agrega el producto: " + this.producto.nombre);
    this.enviar.emit(this.producto);
    
  }

}
