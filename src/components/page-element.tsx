// src/components/page-element.tsx
import React, { useState } from 'react';

interface PageElementProps {
  id: string;
  type: string;
}

const PageElement: React.FC<PageElementProps> = ({ id, type }) => {
  const [content, setContent] = useState<string>(''); // State to store element content

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <p>Element ID: {id}</p>
      {type === 'text' && (
        <textarea value={content} onChange={handleChange} rows={4} cols={50} placeholder="Enter text"></textarea>
      )}
      {type === 'image' && (
        <div>
          <input type="file" accept="image/*" onChange={handleChange} />
          <img src={content} alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
      {type === 'button' && (
        <div>
          <input type="text" value={content} onChange={handleChange} placeholder="Button text" />
          <button>{content || 'Button'}</button>
        </div>
      )}
    </div>
  );
};

export default PageElement;

