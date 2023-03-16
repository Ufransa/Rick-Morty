import { Pipe, PipeTransform } from '@angular/core';
import { Result } from "../interfaces/location.interface";

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {

    transform(characters: Result[], sortBy?: keyof Result | ''): Result[] {

        switch( sortBy ) {
            case 'name':
              return characters.sort( (a,b) => (a.name > b.name ) ? 1 : -1)
      
            case 'type':
              return characters.sort( (a,b) => (a.type > b.type ) ? 1 : -1)
      
            default:
              return characters
      
          }
    }
  
  }


