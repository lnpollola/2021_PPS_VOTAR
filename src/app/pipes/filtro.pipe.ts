import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(productos: Array<any>, nombre?: any): any {
    if( nombre)
    {
      return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre) );
    }
    else
    {
      return productos;
    }
   
  }

}
