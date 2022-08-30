import { Formik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { sortParams } from "./MovieList";
import { GenresMultiselect } from "./genresMultiselect/genresMultiselect";
import { Genre } from "../types/types";

interface SortFormProps {
    sortCallback: Dispatch<SetStateAction<sortParams>>;
    genresList: Genre[];
    sort: sortParams;
}

export const SortForm:FC<SortFormProps> = ({sortCallback, sort, genresList}) => {

    return (
        <Formik
            initialValues={{
                sort: sort,
                genresList: [],
            }}
            onSubmit={(values, { setSubmitting }) => {
                sortCallback(values.sort);
                setSubmitting(false);
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
                <GenresMultiselect genresList={genresList}/>
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