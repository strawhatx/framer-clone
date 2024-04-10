// src/pages/page-builder.tsx
import React, { useState } from 'react';
import Page from './page';

const PageBuilder: React.FC = () => {
  const [pages, setPages] = useState<string[]>(['Home']);

  const addPage = () => {
    const newPageTitle = prompt('Enter page title:');
    if (newPageTitle) {
      setPages([...pages, newPageTitle]);
    }
  };

  return (
    <div>
      <h1>Page Builder</h1>
      <button onClick={addPage}>Add Page</button>
      {pages.map((pageTitle, index) => (
        <Page key={index} title={pageTitle} />
      ))}
    </div>
  );
};

export default PageBuilder;
