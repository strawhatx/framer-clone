// src/elements/button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
    padding?: string;
    margin?: string;
}


const Button: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, color, padding, margin }) => {
    const StyledButton = styled.button`
  background-color: ${backgroundColor || 'blue'};
  color: ${color || 'white'};
  padding: ${padding || '10px 20px'};
  margin: ${margin || '0px'};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
};

export default Button;
