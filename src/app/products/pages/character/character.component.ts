import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ProductService } from '../services/product-service.service';

import { Info, Result } from '../../interfaces/character.interface';

import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

  @Input() character:Result;

  public characters: Result[] = []
  public info: Info = {
    next: null,
  }
  public showGoUpButton = false
  public sortBy?: keyof Result


  private pageNum: number = 1
  private hideScrollHeight = 200 
  private query: string = ''

  constructor ( 
    @Inject (DOCUMENT) private document:Document,
    private productService: ProductService,
    private route: ActivatedRoute,
    ) { }

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
        this.info = info
      })
  }

  //Infinite scroll funtions

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
}
