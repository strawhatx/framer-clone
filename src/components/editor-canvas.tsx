// src/components/editor-canvas.tsx

import React, { useRef, ForwardedRef, forwardRef } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface CanvasElement {
  id: string;
  type: string;
  x: number;
  y: number;
}

interface EditorCanvasProps {
  elements: CanvasElement[];
  onDrop: (type: string, x: number, y: number) => void;
}

const EditorCanvas = forwardRef<HTMLDivElement, EditorCanvasProps>((props, ref) => {
  const { elements, onDrop } = props;

  const dropRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'TOOLBOX_ITEM',
    drop: (item: { type: string }, monitor: DropTargetMonitor) => {
      const offset = monitor.getClientOffset();
      if (offset && dropRef.current) {
        const x = offset.x - dropRef.current.offsetLeft;
        const y = offset.y - dropRef.current.offsetTop;
        onDrop(item.type, x, y);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // Attach the ref to the div element
  drop(dropRef);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid #ddd',
        padding: '20px',
        position: 'relative',
        backgroundColor: isOver ? '#f0f0f0' : 'transparent', // Change background color when isOver is true
      }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: element.x,
            top: element.y,
          }}
        >
          {element.type}
        </div>
      ))}
    </div>
  );
});

export default EditorCanvas;