import { Component, OnInit, Input, Output } from '@angular/core';
import { GenreType, Movie } from './movie.model';
import { MovieService } from './movies.service';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  filteredQuery: string;
  genreQuery: string;
  movieElements: Movie[] = this.movieService.getMovies();
  genres = this.movieService.getGenres();

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  onChangeGenre(genre: string) {
    this.genreQuery = genre;
  }

  onClear() {
    this.onChangeGenre('');
    this.filteredQuery = '';
  }

  onBadSearch() {
    if (this.filteredQuery && this.movieElements === []) {
      return true;
    } else {
      return false;
    }
  }

}
