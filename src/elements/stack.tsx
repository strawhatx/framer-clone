// src/elements/stack.tsx

import React from 'react';
import styled, { css } from 'styled-components';

interface StackProps {
  children: React.ReactNode;
  gap?: string;
  direction?: string;
   // Add a new prop for media queries
   mediaQueries?: { [key: string]: any };
}



const Stack: React.FC<StackProps> = ({ children, gap, direction, mediaQueries}) => {
   const StyledStack = styled.div`
  display: flex;
  flex-direction: ${direction || 'row'};
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
  <StyledStack>
    {children}
  </StyledStack>
)};

export default Stack;
