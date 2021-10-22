import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  nombre: string = 'fErNaNdO hErReRa';
  valor: number = 1000;

  obj = {
    nombre: 'Fernando'
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


}
