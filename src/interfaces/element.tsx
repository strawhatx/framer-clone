// src/interfaces/element.tsx
export interface Element {
    id: string;
    type: string;
    content: React.ReactNode;
    position: { x: number; y: number };
  }