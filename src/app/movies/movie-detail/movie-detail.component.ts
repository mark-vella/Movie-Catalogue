import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreType, Movie } from '../movie.model';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  imgPath = '/assets/images/movie-covers';
  movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.movieService.getSpecificMovie(+this.route.snapshot.params['id']);
  }
}
