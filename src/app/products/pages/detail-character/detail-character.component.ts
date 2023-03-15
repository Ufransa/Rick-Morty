import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Observable, take } from 'rxjs';

import { Result } from '../../interfaces/character.interface';

import { ProductService } from '../services/product-service.service';



@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html'
})
export class DetailCharacterComponent implements OnInit {

  public character?: Observable<Result> 

  constructor(
    private productService: ProductService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( take(1))
        .subscribe( (params) => {
          const id = params['id']
          this.character = this.productService.getDetails( id )
        })
  }

  //GOBACK button
  onGoBack(): void {
    this.location.back()
  }

}
