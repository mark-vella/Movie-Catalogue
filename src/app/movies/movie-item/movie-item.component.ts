import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movies.service';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'filter': 'blur(0px)',
      })),
      state('interested', style({
        'filter': 'blur(2.5px)',
      })),
      transition('normal <=> interested', [
        animate(300)
      ])
    ]),
    trigger('icon', [
      state('normal', style({
        'display': 'none',
      })),
      state('interested', style({
        'display': 'flex',
      })),
      transition('normal <=> interested', [
        animate(150)
      ])
    ])
  ]
})
export class MovieItemComponent implements OnInit {
  imgPath = '/betsson-movies/src/assets/images/movie-covers/';
  state = 'normal';
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

  onHoverMovie() {
    this.state === 'normal' ? this.state = 'interested' : this.state = 'normal';
  }
}
