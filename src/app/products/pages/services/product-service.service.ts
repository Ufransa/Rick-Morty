import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Result, CharacterResponse } from '../../interfaces/character.interface';
import { Result as LocationResult } from '../../interfaces/location.interface';
import { Result as EpisodesResult } from '../../interfaces/episodes.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiService: string = 'https://rickandmortyapi.com/api'

  public getResults: Result[] = []
  public getLocationResults: LocationResult[] = []
  public getEpisodesResult: EpisodesResult[] = []

  constructor( private http: HttpClient ) { }

  getCharacter( query: string = '', page:number = 200): Observable<Result[]> {
    return this.http.get<Result[]>(`${ this.apiService }/character/?name=${ query }&page=${ page }`)
  }

  getDetails(id: number) {
    return this.http.get<Result>(`${ this.apiService }/character/${ id }`)
  }

  getLocations( page = 200 ): Observable<LocationResult[]> {
    return this.http.get<LocationResult[]>(`${ this.apiService }/location/?page=${ page }`)
  }

  getEpisodes( page = 200 ): Observable<EpisodesResult[]> {
    return this.http.get<EpisodesResult[]>(`${ this.apiService }/episode/?page=${ page }`)
  }
    
}
