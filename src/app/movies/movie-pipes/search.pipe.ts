import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Movie[], filterQuery: string): Movie[] {
    filterQuery = filterQuery ? filterQuery.toLocaleLowerCase() : null;
    // * = condition ? codeIfTrue : codeIfFalse
    return filterQuery ? value.filter((movie: Movie) => movie.name.toLocaleLowerCase().indexOf(filterQuery) !== -1) : value;
  }
}
