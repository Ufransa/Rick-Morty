import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'count'
})

export class CountPipe implements PipeTransform {

    transform(value: any): number {

        const items = value.split(',')
        return items.length
        
    }    
}