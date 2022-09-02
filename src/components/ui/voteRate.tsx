import { FC } from 'react';
import styled from 'styled-components';

interface VoteRateProps {
    rateCount: number;
    size: number;
    textSize: number;
}

enum VoteRateColors {
    good = '#0ba35c',
    middle = '#d4c819',
    bad = '#db321b',

}

export const VoteRate:FC<VoteRateProps> = ({rateCount, size, textSize}) => {

    const fRateCount = rateCount * 10;
    let strokeColor:VoteRateColors = VoteRateColors.good;
    if(fRateCount < 70) {
        strokeColor = VoteRateColors.middle;
    }
    if(fRateCount < 40) {
        strokeColor = VoteRateColors.bad;
    }
    const radius = size;
    const circumference = radius * 2 * Math.PI;
    const offcet = circumference - fRateCount / 100 * circumference;
    const barSize = radius * 2 + 10

    return (
        <StyledBar size={barSize}>
            <StyledBarCircle size={barSize}>
                <StyledCircle
                    stroke={'#666'} 
                    cx={radius} 
                    cy={radius} 
                    r={radius}
                    >
                </StyledCircle>
                <StyledCircle
                    cx={radius} 
                    cy={radius} 
                    r={radius} 
                    stroke={strokeColor}
                    strokeDashoffset={offcet} 
                    strokeDasharray={`${circumference}, ${circumference}`}
                    >
                </StyledCircle>
            </StyledBarCircle>
            <StyledBarText size={textSize}><span>{fRateCount ? `${fRateCount}%` : "NR"}</span></StyledBarText>
        </StyledBar>
    );
}

interface StyledCircleProps {
    size: number;
}

const StyledBar = styled.div<StyledCircleProps>`
    position: relative;
    height: ${props => props.size}px;
`

const StyledBarCircle = styled.svg<StyledCircleProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: #333;
    border-radius: 50%;
    transform: rotate(-90deg);
`
const StyledCircle = styled.circle`
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 3px;
    stroke-linecap: round;
    transform: translate(5px, 5px);
`
const StyledBarText = styled.div<StyledCircleProps>`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #ccc;
    font-size: ${props => props.size}px;;
    font-family: sans-serif;
`