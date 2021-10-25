import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect

  nombre: string = 'Jairo Membreño';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPrural

  clientes: string[] = ['Maria', 'carlos', 'jairo', 'rafael', 'martha', 'karen'];

  clientesmapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': `tenemos # cliente esperando`,
    'other': `tenemos # clientes esperando`

  }

  cambiarcliente() {

    this.nombre = 'sara Membreño';
    this.genero = 'femenino'


  }

  borrarcliente() {

    this.clientes.pop();//Borra el ultimo elemento

  }

  //KeyValue Pipe

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'

  }

  //JsonPipe

  heroes =[

    {
      nombre:'Superman',
      value:true
    },
    {
      nombre:'Robin',
      value:false
    },
    {
      nombre:'Aquaman',
      value:true
    }
    

  ]





}



