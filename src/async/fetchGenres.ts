import axios from "axios"
import { StoreDispatch } from "../store";
import { setMovieGenres } from "../store/reducers/genreReducer";
import { Genre } from "../types/types"


const API_KEY = "09671f893e89a3d219d0bad73ba9e631";

interface GenreFetch {
    genres: Genre[]
}

export const fetchMovieGenres = () => {
    return (dispatch: StoreDispatch) => {
        axios.get<GenreFetch>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then((responce) => {
            const genreList = responce.data.genres;
            dispatch(setMovieGenres(genreList));
        })
    };
}