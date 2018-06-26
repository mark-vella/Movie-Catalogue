import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieService } from './movies.service';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './movie-pipes/search.pipe';
import { AlphabeticalPipe } from './movie-pipes/alphabetical.pipe';
import { GenrePipe } from './movie-pipes/genre.pipe';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterModule ],
      declarations: [ AppComponent , MoviesComponent, MovieItemComponent, MovieDetailComponent, HomeComponent ],
      providers: [
        SearchPipe,
        AlphabeticalPipe,
        GenrePipe
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should have a movieList from the movie service', () => {
    const movieService = fixture.debugElement.injector.get(MovieService);
    expect(movieService.getMovies()).toEqual(component.movieElements);
  });
});
