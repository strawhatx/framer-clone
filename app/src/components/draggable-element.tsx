import React from 'react';
import { useSortable } from '@dnd-kit/sortable';

interface DraggableElementProps {
  id: string;
  children: React.ReactNode;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: `translate(${transform?.x || 0}px, ${transform?.y || 0}px)`,
      }}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

export default DraggableElement;
