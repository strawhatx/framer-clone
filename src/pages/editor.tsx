import React from 'react';
import EditorCanvas from '../components/editor-canvas';
import Toolbox from '../components/toolbox';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface CanvasElement {
  id: string;
  type: string;
  // Add more properties as needed
  x: number;
  y: number;
}

const App: React.FC = () => {
  // Define toolbox items
  const toolboxItems = [
    { type: 'BUTTON', content: <button>Button</button> },
    { type: 'IMAGE', content: <img src="image.png" alt="Image" /> },
    // Add more toolbox items as needed
  ];

  // Define state for elements on the canvas
  const [canvasElements, setCanvasElements] = React.useState<CanvasElement[]>([]);

 // Define drop handler for the canvas
const handleDrop = (type: string, x: number, y: number) => {
  // Generate a unique id for the dropped element
  const id = Math.random().toString(36).substr(2, 9);
  // Add the dropped element to the canvas elements state with position
  setCanvasElements([...canvasElements, { id, type, x, y }]);
};

  return (
    <div>
      <h1>Page Builder</h1>
      <div style={{ display: 'flex' }}>
        <DndProvider backend={HTML5Backend}>
          <Toolbox items={toolboxItems} />
          <EditorCanvas elements={canvasElements} onDrop={handleDrop} />
        </DndProvider>
        
      </div>
    </div>
  );
};

export default App;
