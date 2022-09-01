import { FC } from "react";
import styled from "styled-components";
import { Genre } from "../../types/types";
import { MultiselectItem } from "./MultiselectItem";

interface GenresMultiselectProps {
    genres: Genre[];
    activeGenres: Genre[];
    setActiveGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
}

export const GenresMultiselect:FC<GenresMultiselectProps> = ({genres, activeGenres, setActiveGenres}) => {

    const addActiveItem = (item: Genre) => {
        if(!activeGenres.some((genre) => item.id === genre.id)) {
            setActiveGenres([...activeGenres, item]);
        }
        else {
            setActiveGenres(activeGenres.filter((genre) => item.id === genre.id ? false : true))
        }
    }

    const isActive = (id: number): boolean => {
        return activeGenres.some((item: Genre) => item.id === id);
    }

    const genresElementList = genres.map((elm) => <MultiselectItem key={elm.id} genre={elm} addActiveItem={addActiveItem} active={isActive(elm.id)}/>);

    return (
     <StyledMultiselect>
        {genresElementList} 
     </StyledMultiselect>
    );
}

const StyledMultiselect = styled.div`
    display: flex;
    flex-wrap: wrap;
`