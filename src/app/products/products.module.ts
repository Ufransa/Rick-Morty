import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CharacterComponent } from './pages/character/character.component';
import { CountPipe } from './pipes/count.pipe';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { SortByPipe } from './pipes/sort-by.pipe';




@NgModule({
  declarations: [
    CharacterComponent,
    DetailCharacterComponent,
    EpisodesComponent,
    HomeComponent,
    LocationComponent,

    //Pipes
    CountPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    PrimeNgModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
