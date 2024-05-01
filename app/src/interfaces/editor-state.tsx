// src/interfaces/editor-state.tsx
export interface EditorState {
    canvas: {
      width: number;
      height: number;
    };
    elements: {
      id: string;
      type: string;
      position: { x: number; y: number };
      properties: { [key: string]: any };
    }[];
    history: EditorState[];
    currentHistoryIndex: number;
  }