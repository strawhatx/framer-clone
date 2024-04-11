// src/components/editor.tsx
import React, { useState } from 'react';
import EditorCanvas from '../components/editor-canvas';
import Toolbox from '../components/toolbox';
import { Element } from '../interfaces/element';

const Editor: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const handleElementDrop = (type: string) => {
    // Add the dropped element to the canvas
    const newElement = {
      id: `${type}-${elements.length + 1}`,
      type: type,
      content: `New ${type}`,
      position: { x: 0, y: 0 } // Default position
    };
    setElements(prevElements => [...prevElements, newElement]);
  };

  const handleElementClick = (id: string) => {
    // Select the clicked element
    setSelectedElement(id);
  };

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Handle mouse move on the canvas
    // Add your logic for handling mouse movement here
  };

  const handleCanvasMouseUp = () => {
    // Handle mouse up on the canvas
    // Add your logic for handling mouse release here
  };

  return (
    <div style={{ display: 'flex' }}>
      <Toolbox elements={[ /* Define elements for the toolbox */ ]} onElementDrop={handleElementDrop} />
      <EditorCanvas
        elements={elements}
        onElementDrop={handleElementDrop}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onElementClick={handleElementClick} // Pass the handleElementClick function as a prop
        selectedElement={selectedElement}
      />
    </div>
  );
};

export default Editor;

