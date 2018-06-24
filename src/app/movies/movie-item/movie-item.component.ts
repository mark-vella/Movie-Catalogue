import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  imgPath = '/betsson-movies/src/assets/images/movie-covers/';
  @Input() movie: Movie;
  @Input() i: number;


  constructor(private movieService: MovieService, private router: Router) {
    this.movie = this.movieService.getSpecificMovie(this.i);
  }

  ngOnInit() {
  }

  onSelectMovie() {
    this.router.navigate(['movies', this.movie.id]);
  }

}
