import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Result } from '../../../interfaces/character.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

  public characters: Result[] = []

  private pageNum: number = 1
  private query: string = ''
  private hideScrollHeight = 200
  private showScrollHeight = 500

  constructor ( private productService: ProductService) { }

  ngOnInit(): void {
    this.getDataFromService()
  }

  private getDataFromService(): void {
    this.productService.getCharacter( this.query, this.pageNum )
      .pipe(
        take(1)
      ).subscribe( (res:any) => {
        const { info, results } = res
        this.characters = [...this.characters, ...results ]
      })
  }

  

}
