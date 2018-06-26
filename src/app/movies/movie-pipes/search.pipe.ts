import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Movie[], filterQuery: string): Movie[] {
    filterQuery = filterQuery ? filterQuery.toLocaleLowerCase() : null;
    // * = condition ? codeIfTrue : codeIfFalse
    // indexOf() method returns the position of the first occurence of a specified value in a string.
    // If the method returns -1, that means that the query is never present in the searched array.
    return filterQuery ? value.filter((movie: Movie) => movie.name.toLocaleLowerCase().indexOf(filterQuery) !== -1) : value;
  }
}
