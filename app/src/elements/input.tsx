// Input.tsx

import React, { useState, useRef, useEffect } from 'react';

const Text: React.FC<{ initialText: string }> = ({ initialText }) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Exit editing mode when Enter key is pressed
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    // Prevent text selection when clicking inside the input field
    event.preventDefault();
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          autoFocus
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            width: '100%',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            padding: '4px',
            color: '#000',
          }}
        />
      ) : (
        <span style={{ cursor: 'text' }}>{text}</span>
      )}
    </div>
  );
};

export default Text;

