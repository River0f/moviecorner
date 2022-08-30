import axios from "axios";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieGenres } from "../async/fetchGenres";
import { useTypedDispatch, useTypedSelector } from "../hooks/useTypeSelctor";
import { IMovieList } from "../types/types";
import { ListItem } from "./listItem";
import { SortForm } from "./sortForm";
import { List } from "./ui/List";

const API_KEY = "09671f893e89a3d219d0bad73ba9e631";

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
    const [movieList, setMovieList] = useState<IMovieList>({});
    const [sort, setSort] = useState<sortParams>(sortParams.popularityDesc);

    useEffect(() => {
        const fetchData = async () => {
            axios.get<IMovieList>(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort}`)
                .then((responce) => {
                    setMovieList(responce.data);
                })
        }
        fetchData();
    }, [sort, setSort]);

    useEffect(() => {
        dispatch(fetchMovieGenres());
    }, [dispatch]);

    const movieElementsList = movieList.results ? movieList.results.map((element) => {
        return <ListItem key={element.id} movieData={element} />
    }) : [];

    return (
        <StyledContainer>
            <SortForm sort={sort} sortCallback={setSort} genresList={genres}/>
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
