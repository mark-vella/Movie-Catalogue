import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './movies/navigation/navigation.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './movies/filter.pipe';
import { AlphabeticalPipe } from './movies/alphabetical.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesComponent,
    HomeComponent,
    FilterPipe,
    AlphabeticalPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
