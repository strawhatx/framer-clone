// src/elements/image.tsx

import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => (
  <img src={src} alt={alt || ''} width={width} height={height} />
);

export default Image;
