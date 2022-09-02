import { StoreDispatch } from "../../store";
import { setMovieGenres } from "../../store/reducers/genreReducer";
import { Genre } from "../../types/types"
import { mdbCLient } from "../instances";

interface GenreFetch {
    genres: Genre[]
}

export const fetchMovieGenres = () => {
    return (dispatch: StoreDispatch) => {
        mdbCLient.get<GenreFetch>("genre/movie/list")
        .then((responce) => {
            const genreList = responce.data.genres;
            dispatch(setMovieGenres(genreList));
        })
    };
}