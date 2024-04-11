// src/components/editor/editor-canvas.tsx

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropTarget from './drop-target'; // Import the DropTarget component
import { Element } from '../interfaces/element';


interface EditorCanvasProps {
  elements: Element[]; // Elements to render on the canvas
  onElementDrop: (type: string) => void; // Callback for dropped element
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void; // Mouse move event handler
  onMouseUp: () => void; // Mouse up event handler
  onElementClick: (id: string) => void; // Callback for element click
  selectedElement: string | null; // ID of the selected element
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({ elements, onElementDrop, onMouseMove, onMouseUp, onElementClick, selectedElement }) => {
  const handleElementClick = (id: string) => {
    onElementClick(id);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DropTarget onDrop={onElementDrop} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
        <div style={{ width: '100%', height: '500px', border: '1px solid #ddd', padding: '20px' }}>
          {elements.map((element) => (
            <div
              key={element.id}
              onClick={() => handleElementClick(element.id)} // Call handleElementClick when element is clicked
              style={{
                position: 'absolute',
                top: element.position.y,
                left: element.position.x,
                border: selectedElement === element.id ? '2px solid blue' : 'none',
              }}
            >
              {element.content}
            </div>
          ))}
        </div>
      </DropTarget>
    </DndProvider>
  );
};

export default EditorCanvas;