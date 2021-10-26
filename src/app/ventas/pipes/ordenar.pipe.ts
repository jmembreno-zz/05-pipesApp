import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = 'sin valor', orden: number = 1): Heroe[] {

    switch (ordenarPor) {

      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? orden : -orden);

      case 'vuela':

        return heroes.sort((a, b) => (a.vuela > b.vuela) ? orden : -orden);

      case 'color':

        return heroes.sort((a, b) => (a.color > b.color) ? orden : -orden);



      default:
        return heroes;
    }


    /* if (ordenarPor === 'sin valor') {
       return heroes;
     } else {
       heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
     }
     return heroes;*/


  }

}
