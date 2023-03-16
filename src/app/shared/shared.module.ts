import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { Error404Component } from './components/error404/error404.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    Error404Component,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
