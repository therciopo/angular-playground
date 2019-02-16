import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> a864aa9956c11d7d57f63f7d01e84e4fdeea9f7c
