import React from 'react';

interface ToolboxProps {
  onElementDrop: (type: string, x: number, y: number) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({ onElementDrop }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, type: string) => {
    event.dataTransfer.setData('text/plain', type);
  };

  return (
    <div className="toolbox">
      <div className="toolbox-item" draggable onDragStart={(event) => handleDragStart(event, 'text')}>
        Text
      </div>
      <div className="toolbox-item" draggable onDragStart={(event) => handleDragStart(event, 'image')}>
        Image
      </div>
      {/* Add more toolbox items as needed */}
    </div>
  );
};

export default Toolbox;
