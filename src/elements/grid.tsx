// src/elements/grid.tsx

import React from 'react';
import styled, { css } from 'styled-components';

interface GridProps {
  children: React.ReactNode;
  columns?: string; // Number of columns (e.g., "2", "3")
  gap?: string; // Gap between grid items (optional)
   
  mediaQueries?: { [key: string]: any };// Add a new prop for media queries
}


const Grid: React.FC<GridProps> = ({ children, columns, gap, mediaQueries }) => {
  
  const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${columns || '1fr'}, 1fr));
  gap: ${gap || '0px'};

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
  <StyledGrid>
    {children}
  </StyledGrid>
)};

export default Grid;