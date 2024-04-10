// Input.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text' }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledInput type={type} value={inputValue} onChange={handleChange} placeholder={placeholder} />
  );
};

export default Input;
