import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string='fErNaNdO hErReRa';
  valor:number=1000;

  obj = {
    nombre:'Fernando'
  }


  mostrarnombre(){

 
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
