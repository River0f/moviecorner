import { FC } from 'react';
import styled from 'styled-components';

interface VoteRateProps {
    rateCount: number;
}

enum VoteRateColors {
    good = '#0ba35c',
    middle = '#d4c819',
    bad = '#db321b',

}

export const VoteRate:FC<VoteRateProps> = ({rateCount}) => {

    const fRateCount = rateCount * 10;
    let strokeColor:VoteRateColors = VoteRateColors.good;
    if(fRateCount < 70) {
        strokeColor = VoteRateColors.middle;
    }
    if(fRateCount < 40) {
        strokeColor = VoteRateColors.bad;
    }
    const radius = 20;
    const circumference = radius * 2 * Math.PI;
    const offcet = circumference - fRateCount / 100 * circumference;

    return (    
        <StyledContainer>
            <StyledBar>
                <StyledBarCircle>
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
                <StyledBarText>{fRateCount ? `${fRateCount}%` : "NR"}</StyledBarText>
            </StyledBar>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
position: absolute;
top: -25px;
right: 15px;
`
const StyledBar = styled.div`
position: relative;
`
const StyledBarCircle = styled.svg`
width: 50px;
height: 50px;
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
const StyledBarText = styled.div`
position: absolute;
top: 15px;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
color: #ccc;
display: flex;
justify-content: center;
font-size: 0.8em;
font-family: sans-serif;
`