import { FC } from "react";
import { MovieList } from "../MovieList";

export const MoviesPopularPage: FC = () => {

    return (
        <div>
            <h1>PopularMovies</h1>
            <MovieList/>
        </div>
    );
}