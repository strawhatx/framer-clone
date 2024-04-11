import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface DraggableElementProps {
  type: string;
  children: React.ReactNode; // Element content
}

const DraggableElement: React.FC<DraggableElementProps> = ({ children, type }) => {
  const [{ isDragging }, drag] = useDrag({
    type: type, // Specify the type of the draggable item
    item: { type: 'TOOLBOX_ITEM' }, // Specify the type of the item being dragged
    collect: (monitor: DragSourceMonitor) => ({ // Specify the type of monitor as DragSourceMonitor
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableElement;
