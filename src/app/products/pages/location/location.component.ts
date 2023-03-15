import { Component, OnInit } from '@angular/core';

import { Result } from '../../../interfaces/location.interface';
import { ProductService } from '../services/product-service.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [
  ]
})
export class LocationComponent implements OnInit {

  public locations: Result[] = []

  constructor( private productService: ProductService ) {}


  ngOnInit(): void {
    this.getDataFromService()
   }


  private getDataFromService(): void {
    this.productService.getLocations()
      .subscribe( (res: any) => {
        const { results } = res
        this.locations = [...this.locations, ...results]
      })
  }
}
