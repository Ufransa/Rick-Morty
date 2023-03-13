
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'character',
        component: CharacterComponent
    },
    {
        path: 'by/:id',
        component: DetailCharacterComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'episodes',
        component: EpisodesComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }