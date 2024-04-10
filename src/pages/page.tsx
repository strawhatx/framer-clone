// src/pages/page.tsx
import React, { useState } from 'react';
import PageElement from '../components/page-element';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title }) => {
  const [elements, setElements] = useState<any[]>([]);

  const addElement = (elementType: string) => {
    const newElement = { id: Date.now().toString(), type: elementType, content: '' };
    setElements([...elements, newElement]);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button onClick={() => addElement('text')}>Add Text</button>
        <button onClick={() => addElement('image')}>Add Image</button>
        <button onClick={() => addElement('button')}>Add Button</button>
      </div>
      {elements.map(element => (
        <PageElement key={element.id} id={element.id} type={element.type} />
      ))}
    </div>
  );
};

export default Page;
