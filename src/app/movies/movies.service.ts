import { movies } from "./movie.mock-data";
import { Movie } from "./movie.model";

export class MovieService {
    private movieList: Movie[] = movies;

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
}
