import { sortParams } from "../components/MovieList";
import { IMovieList } from "../types/types";
import { mdbCLient } from "./instances";

export const fetchMovies = async (sort: sortParams, withGenres: string, withoutGenres: string) => {
    return await mdbCLient.get<IMovieList>(`/discover/movie?sort_by=${sort}&with-genres=${withGenres}&without_genres=${withoutGenres}`)
        .then((responce) => {
            return responce.data;
        })
}