# Movies Application
Name: 		Mov.io
Author: 	Mark Vella
Language: 	TypeScript 2

- - - -
## Application Overview

Upon making a request to http://localhost:4200, the user is greeted with a landing page with the ability to navigate towards the “Movie Catalogue”.

The “Movie Catalogue” features a collection of movies, featuring the movie’s cover-art, name and year of release. The user is able to search for movies either by name through an input field within the navigation bar and/or by filtering by the movie’s genre. The subsequent clicking on a movie will result in a “Movie Detail” page, which displays all of the related movie information.

- - - -

## Application’s Component Structure
APP COMPONENT
	* HOME
	* MOVIES
		* MOVIE ITEM
		* MOVIE DETAIL

- - - -

## Routing Configuration

```
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
];
```

- - - -

## Installing the Application
By unzipping and downloading the source code, one may install the necessary dependencies by running the command `npm install` within the application’s directory. The application is then able to be run through the `ng serve —port 4200` command within the application’s directory.