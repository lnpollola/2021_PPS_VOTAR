import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tEspera'
})
export class TEsperaPipe implements PipeTransform {

  transform(tEspera: any, args?: any): any  {
    return tEspera == "00:00" ? "Terminado" : tEspera;
  }

}
