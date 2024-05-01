import React, { useState } from 'react';
import { ChromePicker, CompactPicker } from 'react-color';
import styled from 'styled-components';

const TextStyling: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<string>('Arial, sans-serif');
  const [textColor, setTextColor] = useState<string>('#000');
  const [textAlign, setTextAlign] = useState('start');
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderline, setIsUnderline] = useState<boolean>(false);

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  const handleFontFamilyChange = (value: string) => {
    setFontFamily(value);
  };

  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  };

  const handleTextAlignmentChange = (value: string) => {
    setTextAlign(value);
  };

  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineToggle = () => {
    setIsUnderline(!isUnderline);
  };

  const StyledText = styled.button`
      font-size: ${fontSize}px,
        font-family: ${fontFamily},
        color: ${textColor},
        text-align: ${textAlign},
        font-weight: ${isBold ? 'bold' : 'normal'},
        font-style: ${isItalic ? 'italic' : 'normal'},
        text-decoration: ${isUnderline ? 'underline' : 'none'}`

  return (
    <div className="text-styling-container">
      <div className="slider-container">
        <label>Font Size:</label>
        <input type="range" min="8" max="72" value={fontSize} onChange={(e) => handleFontSizeChange(Number(e.target.value))} />
      </div>
      <div className="picker-container">
        <label>Font Family:</label>
        <select value={fontFamily} onChange={(e) => handleFontFamilyChange(e.target.value)}>
          <option value="Arial, sans-serif">Arial</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Courier New, monospace">Courier New</option>
        </select>
      </div>
      <div className="picker-container">
        <label>Text Color:</label>
        <ChromePicker color={textColor} onChange={handleTextColorChange} />
      </div>
      <div className="picker-container">
        <label>Text Alignment:</label>
        <select value={textAlign} onChange={(e) => handleTextAlignmentChange(e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="toggle-container">
        <label>Text Decorations:</label>
        <button onClick={handleBoldToggle} className={isBold ? 'active' : ''}>B</button>
        <button onClick={handleItalicToggle} className={isItalic ? 'active' : ''}>I</button>
        <button onClick={handleUnderlineToggle} className={isUnderline ? 'active' : ''}>U</button>
      </div>
      {/* Apply styling to text element here */}
      <StyledText>
        This is a sample text. {/* Apply additional styling options here */}
      </StyledText>
    </div>
  );
};

export default TextStyling;
