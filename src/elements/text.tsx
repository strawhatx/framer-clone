// src/elements/text.tsx

import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const Text: React.FC<TextProps> = ({ children, fontSize, fontWeight, color }) => {
  const StyledText = styled.p`
  font-size: ${fontSize || '16px'};
  font-weight: ${fontWeight || 'normal'};
  color: ${color || 'black'};
`;

  return (
    <StyledText>
      {children}
    </StyledText>
  );
}

export default Text;
