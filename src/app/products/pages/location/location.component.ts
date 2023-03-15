import { Component, OnInit } from '@angular/core';

import { Info, Result } from '../../interfaces/location.interface';

import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  public locations: Result[] = []
  public info: Info = {
    pages: 0,
    next: null,
    prev: null,
  }
  
  public pageNum: number = 1

  constructor( private productService: ProductService ) {}


  ngOnInit(): void {
    this.getDataFromService()
   }


  private getDataFromService(): void {
    this.productService.getLocations( this.pageNum )
      .subscribe( (res: any) => {
        const { info, results } = res
        this.locations = [...this.locations, ...results]
        this.info = info
        
        console.log('Processed page:', this.pageNum - 1);

        //Here we´ll check if there is more pages, if there are then reload until there is no more.
        if(this.info.next) {
          this.pageNum++
          this.getDataFromService()
        }
      })
  }
}
