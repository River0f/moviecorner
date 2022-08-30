import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from "../../types/types";

interface GenreState {
    movieGenresList: Genre[];
    tvGenreList: Genre[];
}

const initalState: GenreState= {
    movieGenresList: [],
    tvGenreList: []
}

export const genreSlice = createSlice({
    name: "genres",
    initialState: initalState,
    reducers: {
        setMovieGenres: (state, action:PayloadAction<Genre[]>) => {
            state.movieGenresList = action.payload;
        },
        setTVGenres: (state, action) => {
            state.movieGenresList = action.payload;
        },
    }
});

export const { setMovieGenres, setTVGenres } = genreSlice.actions;

export default genreSlice.reducer;