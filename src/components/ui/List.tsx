import { FC } from 'react';
import styled from 'styled-components';

interface ListContainerProps {
    maxColumnCount?: number;
    minElementWidth?: string;
    children?: React.ReactNode;
}

export const List: FC<ListContainerProps> = ({children, maxColumnCount, minElementWidth}) => {
    return (
        <StyledList maxColumnCount={maxColumnCount} minElementWidth={minElementWidth}>
            {children}
        </StyledList>
    );
}  

const StyledList = styled.div<ListContainerProps>`
    --grid-layout-gap: 2em;
    --grid-column-count: ${props => props.maxColumnCount ? props.maxColumnCount : 4};
    --grid-item--min-width: ${props => props.minElementWidth ? props.minElementWidth : '200px'};

    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
    grid-gap: var(--grid-layout-gap);
    flex-grow: 4;
`;