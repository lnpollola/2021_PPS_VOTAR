import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fondoEstado'
})
export class FondoEstadoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
