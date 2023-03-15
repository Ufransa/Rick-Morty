import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ProductsRoutingModule } from './products-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { CountPipe } from './pipes/count.pipe';




@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
    LocationComponent,
    EpisodesComponent,
    DetailCharacterComponent,

    //Pipes
    CountPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    PrimeNgModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
