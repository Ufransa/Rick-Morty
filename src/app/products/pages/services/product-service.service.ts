import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Result } from '../../../interfaces/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiService: string = 'https://rickandmortyapi.com/api'

  public getResults: Result[] = []

  constructor( private http: HttpClient ) { }

  getCharacter( query= '', page = 200): Observable<Result[]> {
    return this.http.get<Result[]>(`${ this.apiService }/character/?name=${ query }&page=${ page }`)
  }

  getDetails(id: number) {
    return this.http.get<Result>(`${ this.apiService }/character/${ id }`)
  }
    
}
