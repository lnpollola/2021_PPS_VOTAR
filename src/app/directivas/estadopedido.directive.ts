import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appEstadopedido]'
})
export class EstadopedidoDirective {

  @Input() estado: string;

  constructor(private element : ElementRef, private renderer : Renderer) { }
  ngOnInit()
  {
    switch(this.estado)
    {
      
      case "pendiente": 
      this.renderer.setElementStyle( this.element.nativeElement, "color", "orangered");
      break;
      
      case "preparacion": 
      this.renderer.setElementStyle( this.element.nativeElement, "color", "orange");
      break;
      
      case "servido": 
      this.renderer.setElementStyle( this.element.nativeElement, "color", "greenyellow");
      break;
      
      
    }

}

}
