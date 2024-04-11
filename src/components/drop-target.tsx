// src/components/drop-target.tsx
import React from 'react';

interface DropTargetProps {
  onDrop: (type: string) => void; // Callback for dropped element
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void; // Mouse move event handler
  onMouseUp: () => void; // Mouse up event handler
  children: React.ReactNode; // Element content
}

const DropTarget: React.FC<DropTargetProps> = ({ children, onDrop, onMouseMove, onMouseUp }) => {
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('text/plain');
      onDrop(type);
    };
  
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()} // Prevent default behavior for drag over
        onMouseMove={onMouseMove} // Pass mouse move event handler
        onMouseUp={onMouseUp} // Pass mouse up event handler
      >
        {children}
      </div>
    );
  };
  
  export default DropTarget;