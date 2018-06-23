import { Component, OnInit } from '@angular/core';
import { movies } from './movie.mock-data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieElements = movies;

  constructor() { }

  ngOnInit() {
  }

}
