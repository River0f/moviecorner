import { FC } from "react";
import styled from "styled-components";
import { Genre } from "../../types/types";


interface MultiselectItemProps {
    genre: Genre;
    addActiveItem: (item: Genre) => void
    active: boolean;
}

interface StyledItemProps {
    active: boolean;
}

export const MultiselectItem:FC<MultiselectItemProps> = ({genre, addActiveItem, active}) => {

    const onAddingGenre = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        addActiveItem(genre);
    }

    return (
        <StyledItem active={active} onClick={onAddingGenre}>{genre.name}</StyledItem>
    );
}

const StyledItem = styled.div<StyledItemProps>`
    padding: 5px 8px;
    margin: 5px;
    border: 1px ${props => props.active ? "#1b89de" : "#444"} solid;
    background-color: ${props => props.active ? "#1b89de" : "none"};
    color: ${props => props.active ? "#fff" : "#222"};
    font-family: sans-serif;
    border-radius: 12px;
    font-size: 0.8em;
    cursor: pointer;
`