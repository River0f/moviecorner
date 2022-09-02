import { FC } from "react";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelctor";
import { IMovie } from "../types/types";
import { VoteRate } from "./ui/voteRate";
import defaultPoster from "../assets/img/defaultMovie.png";

interface ListItemProps {
    movieData: IMovie;
}

export const ListItem:FC<ListItemProps> = ({movieData}) => {

    const date = new Date(movieData.release_date);
    const formatDate = date.toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });

    const {base_url, poster_sizes} = useTypedSelector(state => state.config.apiConfig.images);

    const posterurl = movieData.poster_path ? `${base_url}/${poster_sizes[3]}/${movieData.poster_path}`: defaultPoster;

    return (
        <StyledCntainer>
            <StyledPoster
                src={posterurl} title={movieData.original_title}
            ></StyledPoster>
            <StyledInfo>
                <StyledTitle>{movieData.original_title}</StyledTitle>
                <StyledDate>{formatDate}</StyledDate>
                <StyledVoteContainer>
                    <VoteRate size={25} textSize={16} rateCount={movieData.vote_average}/>
                </StyledVoteContainer>
            </StyledInfo>
        </StyledCntainer>
    );
}

const StyledCntainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 1em;
box-shadow: 1px  2px 3px #ccc;
`
const StyledPoster = styled.img`
display: block;
height: auto;
width: 100%;
border-radius: 1em 1em 0 0;
`
const StyledInfo = styled.div`
padding: 2em 1em 1em 1em;
position: relative;
`
const StyledTitle = styled.h1`
font-size: 1.3em;
font-family: sans-serif;
color: #222;
&:hover {
    color: rgb(57, 141, 219);
    cursor: pointer;
}
`
const StyledDate = styled.span`
font-size: 1em;
font-family: sans-serif;
color: #777;
`
const StyledVoteContainer = styled.div`
position: absolute;
top: -25px;
right: 15px;
`