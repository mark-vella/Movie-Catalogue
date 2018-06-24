import { Component, OnInit, Input } from '@angular/core';
import { GenreType, Movie } from './movie.model';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  @Input() filteredQuery: string;
  i: number;

  movieElements: Movie[] = this.movieElements = this.movieService.getMovies();

  constructor(private movieService: MovieService) {
    // this.movieElements = this.movieService.getMovies();
  }

  ngOnInit() {
  }

}
