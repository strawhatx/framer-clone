// src/components/editor/toolbar.tsx
import React from 'react';

interface ToolboxProps {
  elements: { type: string; content: React.ReactNode }[]; // Pre-built elements
  onElementDrop: (type: string) => void; // Callback for dropped element
}

const Toolbox: React.FC<ToolboxProps> = ({ elements, onElementDrop }) => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
    {elements.map((element) => (
      <div key={element.type} onClick={() => onElementDrop(element.type)} style={{ cursor: 'pointer' }}>
        {element.content}
      </div>
    ))}
  </div>
);

export default Toolbox;

