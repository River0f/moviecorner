import { Formik } from "formik";
import { Dispatch, FC, SetStateAction, useState } from "react";
import styled from "styled-components";
import { sortParams } from "./MovieList";
import { GenresMultiselect } from "./genresMultiselect/genresMultiselect";
import { Genre } from "../types/types";

const formatWithGenres = (activeGenres:Genre[]):string => {
    return activeGenres.map((genre) => genre.id).join(",");
}

const formatWithoutGenres = (genres: Genre[], activeGenres: Genre[]): string => {
    if(!activeGenres.length) return "";
    const otherGenres = genres.filter((genre) => !activeGenres.includes(genre));
    return otherGenres.map((genre) => genre.id).join(",");
}

interface SortFormProps {
    sortCallback: Dispatch<SetStateAction<sortParams>>;
    genres: Genre[];
    setWithGenres: React.Dispatch<React.SetStateAction<string>>;
    setWithoutGenres: React.Dispatch<React.SetStateAction<string>>;
    sort: sortParams;
}

export const SortForm:FC<SortFormProps> = ({sortCallback, sort, genres, setWithGenres, setWithoutGenres}) => {

    const [activeGenres, setActiveGenres] = useState<Genre[]>([]);

    return (
        <Formik
            initialValues={{
                sort: sort,
            }}
            onSubmit={(values, { setSubmitting }) => {
                sortCallback(values.sort);
                setSubmitting(false);
                setWithoutGenres(formatWithoutGenres(genres, activeGenres));
                setWithGenres(formatWithGenres(activeGenres));
            }}
        >
        {({values, handleChange, isSubmitting, handleSubmit}) => (
            <StyledSortForm onSubmit={handleSubmit}>
                <label htmlFor="sort">Sort</label>
                <select name="sort" value={values.sort} onChange={handleChange}>
                    <option value={sortParams.popularityDesc}>Popularity Descending</option>
                    <option value={sortParams.popularityAsc}>Popularity Ascending</option>
                    <option value={sortParams.voteAverageDesc}>Rating Descending</option>
                    <option value={sortParams.voteAverageAsc}>Rating Ascending</option>
                    <option value={sortParams.primaryReleaseDateDesc}>Release Date Descending</option>
                    <option value={sortParams.primaryReleaseDateAsc}>Release Date Ascending</option>
                    <option value={sortParams.titleAsc}>Title (A-Z)</option>
                    <option value={sortParams.titleDesc}>Title (Z-A)</option>
                </select>
                <label>Genres</label>
                <GenresMultiselect genres={genres} activeGenres={activeGenres} setActiveGenres={setActiveGenres}/>
                <button type="submit" disabled={isSubmitting}>Apply</button>
            </StyledSortForm>
        )}
        </Formik>
    );
}

const StyledSortForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 200px;
`