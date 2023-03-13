import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { Error404Component } from './components/error404/error404.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    CardComponent
  ]
})
export class SharedModule { }
