import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class TitleCase implements PipeTransform {
    transform(value: string, args?: string) {
        
        if(value) {
            let prepositions = {on: 'on', in: 'in', at: 'at', is: 'is'}
            let newString = value[0].toUpperCase();

            for(let i = 1; i < value.length; i++) {
                if(value[i-1] == ' ') {
                    
                    if((value.substr(i, 3).toLowerCase() == 'the' && value[i+3] == ' ') || (prepositions[value.substr(i, 2).toLowerCase()] && value[i+2] == ' ') ) {
                        newString += value[i].toLowerCase();
                    }
                    else {
                        newString += value[i].toUpperCase();
                    }
    
                } 
                else {
                    newString += value[i];
                }
            }
            return newString;
        }
    }
}