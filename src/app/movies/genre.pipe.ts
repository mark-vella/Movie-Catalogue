import { Pipe, PipeTransform } from '@angular/core';
import { GenreType, Movie } from './movie.model';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: Movie[], genreQuery: GenreType): Movie[] {
    genreQuery = genreQuery ? genreQuery : null;
    return genreQuery ? value.filter((movie: Movie) => movie.genres.indexOf(genreQuery) !== -1) : value;
  }

}
