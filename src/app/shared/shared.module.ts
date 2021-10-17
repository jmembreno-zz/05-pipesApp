import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiprimeNgModule } from '../miprime-ng/miprime-ng.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ]
  ,
  exports: [
    MenuComponent
  ]
  ,
  imports: [
    CommonModule,
    MiprimeNgModule

  ]
})
export class SharedModule { }
