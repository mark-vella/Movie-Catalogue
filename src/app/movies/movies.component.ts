import { Component, OnInit, HostListener } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  filteredQuery: string;
  genreQuery: string;
  movieElements: Movie[] = this.movieService.getMovies();
  genres = this.movieService.getGenres();
  state = 'normal';
  genreSelector = false;
  innerWidth;
  mobile: boolean;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkMobile();
  }

  onChangeGenre(genre: string) {
    this.genreQuery = genre;
  }

  onClear() {
    this.onChangeGenre('');
    this.filteredQuery = '';
  }

  onDisplayGenre() {
    this.genreSelector = !this.genreSelector;
  }

  checkMobile() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 991) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  }

}
