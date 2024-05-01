import React, { useState } from 'react';
import Toolbox from '../components/toolbox';
import EditorCanvas from '../components/editor-canvas';

const App: React.FC = () => {
  const [elements, setElements] = useState<{ id: string; type: string; content: React.ReactNode; x: number; y: number }[]>([]);

  const handleElementDrop = (type: string, x: number, y: number) => {
    // Add the dropped element to the canvas
    const newElement = { id: `element-${elements.length}`, type, content: getTypeContent(type), x, y };
    setElements([...elements, newElement]);
  };

  const getTypeContent = (type: string): React.ReactNode => {
    switch (type) {
      case 'text':
        return 'Text Element';
      case 'image':
        return <img src="example.png" alt="Image Element" />;
      // Add cases for other element types
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Toolbox onElementDrop={handleElementDrop} />
      <EditorCanvas elements={elements} onElementDrop={handleElementDrop} />
    </div>
  );
};

export default App;
