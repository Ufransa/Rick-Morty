import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Info, Result } from '../../../interfaces/character.interface';
import { take } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

  public characters: Result[] = []
  public info: Info = {
    next: null,
  }

  public pageNum: number = 1
  public hideScrollHeight = 200
  public showScrollHeight = 500
  public showGoUpButton = false
  
  private query: string = ''

  constructor ( 
    @Inject (DOCUMENT) private document:Document,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getDataFromService()
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const yOffSet = window.pageYOffset
    if(( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.hideScrollHeight ){
      this.showGoUpButton = true
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.hideScrollHeight ) {
      this.showGoUpButton = false
    }
  }


  onScrollDown(): void{
    if(this.info.next){
      this.pageNum++
      this.getDataFromService()
    }
  }

  //Send to the top of the web the content
  onScrollTop(): void{
    this.document.body.scrollTop = 0 //Safari
    this.document.documentElement.scrollTop = 0 // Other
  }

  private getDataFromService(): void {
    this.productService.getCharacter( this.query, this.pageNum )
      .pipe(
        take(1)
      ).subscribe( (res:any) => {
        const { info, results } = res
        this.characters = [...this.characters, ...results ]
        this.info = info
      })
  }
}
