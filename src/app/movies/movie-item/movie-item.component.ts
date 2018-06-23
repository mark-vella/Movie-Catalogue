import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  imgPath = '/betsson-movies/src/assets/images/movie-covers/';
  @Input() element: { img: string, key: string, name: string, id: number };


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSelectMovie() {
    this.router.navigate(['movies', this.element.id]);
  }

}
