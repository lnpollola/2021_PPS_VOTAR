import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-eliminar',
  templateUrl: './btn-eliminar.component.html',
  styleUrls: ['./btn-eliminar.component.css']
})
export class BtnEliminarComponent implements OnInit {

  @Input() objeto:any;

  @Output() enviarABorrar = new EventEmitter();

  constructor() { }

  borrarUsuario()
  {
    // console.log("se Borro: " + this.objeto.nombre);
    this.enviarABorrar.emit(this.objeto);
    
  }

  ngOnInit() {
  }

}
