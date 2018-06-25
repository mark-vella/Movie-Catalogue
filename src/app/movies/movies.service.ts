import { movies } from "./movie.mock-data";
import { Movie } from "./movie.model";

export class MovieService {
    private movieList: Movie[] = movies;

    private genres = ['action',
        'adventure',
        'biography',
        'comedy',
        'crime',
        'drama',
        'history',
        'mystery',
        'scifi',
        'sport',
        'thriller'];

    getMovies() {
        return this.movieList.slice();
    }

    getSpecificMovie(id: number) {
        const movie = this.movieList.find(
            (m) => {
                return m.id === id;
            }
        );
        return movie;
    }

    getGenres() {
        return this.genres.slice();
    }
}
