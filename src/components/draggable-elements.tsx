// src/components/draggable-element.tsx

import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableElementProps {
  type: string; // Drag type (e.g., "BUTTON", "IMAGE")
  children: React.ReactNode; // Element content
}

const DraggableElement: React.FC<DraggableElementProps> = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DraggableElement;


