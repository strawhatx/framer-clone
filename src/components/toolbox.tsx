// src/components/editor/toolbar.tsx
import React from 'react';
import DraggableElement from './draggable-element'; // Import the ToolboxItem component

interface ToolboxProps {
  items: { type: string; content: React.ReactNode }[]; // Array of toolbox items
}

const Toolbox: React.FC<ToolboxProps> = ({ items }) => {
  return (
    <div style={{ padding: '10px' }}>
      {items.map((item, index) => (
        <DraggableElement
          key={index}
          type={item.type}
          children={item.content}
        />
      ))}
    </div>
  );
};

export default Toolbox;



