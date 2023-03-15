import { Component, OnInit } from '@angular/core';

import { Info, Result } from '../../interfaces/episodes.interface';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit {

  public episodes: Result[] = []
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
    this.productService.getEpisodes( this.pageNum )
      .subscribe( (res: any) =>{
        const { info, results } = res
        this.episodes = [...this.episodes, ...results]
        this.info = info

        //Here we´ll check if there is more pages, if there are then reload until there is no more.
        if(this.info.next) {
          this.pageNum++
          this.getDataFromService()
        }
      })
  }

}
