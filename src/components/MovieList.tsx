import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieGenres } from "../api/asyncActions/fetchGenres";
import { fetchMovies } from "../api/fetchMovies";
import { useTypedDispatch, useTypedSelector } from "../hooks/useTypeSelctor";
import { IMovieList } from "../types/types";
import { ListItem } from "./listItem";
import { SortForm } from "./sortForm";
import { List } from "./ui/List";

export enum sortParams {
    popularityAsc = "popularity.asc",
    popularityDesc = "popularity.desc",
    primaryReleaseDateAsc = "primary_release_date.asc",
    primaryReleaseDateDesc = "primary_release_date.desc",
    titleAsc = "original_title.asc",
    titleDesc = "original_title.desc",
    voteAverageDesc = "vote_average.desc",
    voteAverageAsc = "vote_average.asc",
}

export const MovieList:FC = () => {

    const dispatch = useTypedDispatch();
    const genres = useTypedSelector(state => state.genres.movieGenresList);
    const [movie, setMovie] = useState<IMovieList>({});

    const [sort, setSort] = useState<sortParams>(sortParams.popularityDesc);
    const [withGenres, setWithGenres] = useState("");
    const [withoutGenres, setWithoutGenres] = useState("");

    useEffect(() => {
        fetchMovies(sort,withGenres, withoutGenres).then((movies) => setMovie(movies))
    }, [sort, setSort, withGenres, setWithGenres, withoutGenres, setWithoutGenres]);

    useEffect(() => {
        dispatch(fetchMovieGenres());
    }, [dispatch]);

    const movieElementsList = movie.results ? movie.results.map((element) => {
        return <ListItem key={element.id} movieData={element} />
    }) : [];

    return (
        <StyledContainer>
            <SortForm sort={sort} sortCallback={setSort} genres={genres} setWithGenres={setWithGenres} setWithoutGenres={setWithoutGenres}/>
            <List maxColumnCount={5} minElementWidth={"240px"}>
                {movieElementsList}
            </List>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`
