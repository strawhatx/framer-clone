import React from 'react';
import styled from 'styled-components';

interface EditorCanvasProps {
  elements: { id: string; type: string; content: React.ReactNode; x: number; y: number }[];
  onElementDrop: (type: string, x: number, y: number) => void; // Callback for dropping element onto the canvas
}

const StyledArea = styled.div`
      width: 500px;
        height: 400px;
        background-color: blue;
        `

const EditorCanvas: React.FC<EditorCanvasProps> = ({ elements, onElementDrop }) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default drop behavior
    const type = event.dataTransfer.getData('text/plain');
    const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
    onElementDrop(type, x, y);
  };

  return (
    <StyledArea
      className="editor-canvas"
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => event.preventDefault()} // Allow drop
      
    >
      {elements.map((element) => (
        <div key={element.id} className="canvas-element" style={{ left: element.x, top: element.y }}>
          {element.content}
        </div>
      ))}
    </StyledArea>
  );
};

export default EditorCanvas;

