// src/components/resizable-component.tsx
import React, { useState } from 'react';

const ResizableElement: React.FC = () => {
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(100);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);

  const minSize = 50; // Minimum width and height for the resizable element

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isResizing) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    const newWidth = Math.max(width + deltaX, minSize);
    const newHeight = Math.max(height + deltaY, minSize);

    setWidth(newWidth);
    setHeight(newHeight);

    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div
      className="resizable-element"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="resize-handle bottom-right"></div>
    </div>
  );
};

export default ResizableElement;
