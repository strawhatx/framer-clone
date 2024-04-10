// src/elements/box.tsx

// Box.tsx (updated)

import React from 'react';
import styled, { css } from 'styled-components';

interface BoxProps {
    children?: React.ReactNode;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    // Add a new prop for media queries
    mediaQueries?: { [key: string]: any };
}

const Box: React.FC<BoxProps> = ({ children, backgroundColor, padding, margin, mediaQueries }) => {
    const StyledBox = styled.div`
        background-color: ${backgroundColor || 'white'};
        padding: ${padding || '0px'};
        margin: ${margin || '0px'};

        ${mediaQueries && css`
            @media (max-width: 768px) {
                /* Styles for screens smaller than 768px */
                ${mediaQueries.mobile}
            }

            @media (min-width: 768px) and (max-width: 1024px) {
                /* Styles for screens between 768px and 1024px */
                ${mediaQueries.tablet}
            }

            @media (min-width: 1024px) {
                /* Styles for screens larger than 1024px */
                ${mediaQueries.desktop}
            }
            `}
        `;
    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
};

export default Box;

