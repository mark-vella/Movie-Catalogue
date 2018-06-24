import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Movie[], filterQuery: string): Movie[] {
    filterQuery = filterQuery ? filterQuery.toLocaleLowerCase() : null;
    return filterQuery ? value.filter((movie: Movie) => movie.name.toLocaleLowerCase().indexOf(filterQuery) !== -1) : value;
  }
}

/*     if (value.length === 0 || filterQuery === '') {
      return value;
    }

    const queryResult = [];

    for (const item of value) {
      if (item.name === filterQuery) {
        queryResult.push(item);
      }
    }
    return queryResult;
  } */
