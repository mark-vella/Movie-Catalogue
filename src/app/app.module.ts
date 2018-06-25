import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './movies/search.pipe';
import { AlphabeticalPipe } from './movies/alphabetical.pipe';
import { GenrePipe } from './movies/genre.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesComponent,
    HomeComponent,
    SearchPipe,
    AlphabeticalPipe,
    GenrePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
