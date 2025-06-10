'use client';

import { create } from 'zustand';
import { ComponentElement, BuilderState } from './types';

const initialElements: ComponentElement[] = [
  {
    id: '1',
    type: 'container',
    name: 'Header',
    children: [],
    properties: {
      style: {
        backgroundColor: '#dbeafe',
        padding: '16px',
        borderRadius: 8,
      },
      layout: {
        position: { x: 0, y: 0 },
        size: { width: 100, height: 80 },
      },
    },
  },
  {
    id: '7',
    type: 'container',
    name: 'Hero Section',
    children: [],
    properties: {
      style: {
        padding: '24px',
        border: '2px dashed #d1d5db',
        borderRadius: 8,
      },
      content: {
        text: 'Welcome to Visual Builder',
      },
      layout: {
        position: { x: 0, y: 100 },
        size: { width: 100, height: 120 },
      },
    },
  },
  {
    id: '8',
    type: 'button',
    name: 'CTA Button',
    children: [],
    properties: {
      style: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: 8,
        fontWeight: '600',
      },
      content: {
        text: 'Get Started',
      },
      layout: {
        position: { x: 0, y: 240 },
        size: { width: 150, height: 48 },
      },
    },
  },
];

interface BuilderStore extends BuilderState {
  updateElement: (id: string, updates: Partial<ComponentElement>) => void;
  selectElement: (id: string | null) => void;
  addElement: (element: ComponentElement) => void;
  deleteElement: (id: string) => void;
  setCanvasZoom: (zoom: number) => void;
  setDeviceView: (view: 'desktop' | 'tablet' | 'mobile') => void;
  updateElementStyle: (id: string, style: Partial<ComponentElement['properties']['style']>) => void;
  updateElementContent: (id: string, content: Partial<ComponentElement['properties']['content']>) => void;
  duplicateElement: (id: string) => void;
}

export const useBuilderStore = create<BuilderStore>((set, get) => ({
  elements: initialElements,
  selectedElement: null,
  draggedElement: null,
  canvasZoom: 100,
  deviceView: 'desktop',

  updateElement: (id, updates) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      ),
    })),

  selectElement: (id) => set({ selectedElement: id }),

  addElement: (element) =>
    set((state) => ({
      elements: [...state.elements, element],
    })),

  deleteElement: (id) =>
    set((state) => ({
      elements: state.elements.filter((el) => el.id !== id),
      selectedElement: state.selectedElement === id ? null : state.selectedElement,
    })),

  setCanvasZoom: (zoom) => set({ canvasZoom: zoom }),

  setDeviceView: (view) => set({ deviceView: view }),

  updateElementStyle: (id, style) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id
          ? {
              ...el,
              properties: {
                ...el.properties,
                style: { ...el.properties.style, ...style },
              },
            }
          : el
      ),
    })),

  updateElementContent: (id, content) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id
          ? {
              ...el,
              properties: {
                ...el.properties,
                content: { ...el.properties.content, ...content },
              },
            }
          : el
      ),
    })),

  duplicateElement: (id) =>
    set((state) => {
      const element = state.elements.find((el) => el.id === id);
      if (!element) return state;

      const newElement = {
        ...element,
        id: `${element.id}-copy-${Date.now()}`,
        name: `${element.name} Copy`,
        properties: {
          ...element.properties,
          layout: {
            ...element.properties.layout,
            position: {
              x: element.properties.layout.position.x + 20,
              y: element.properties.layout.position.y + 20,
            },
          },
        },
      };

      return {
        elements: [...state.elements, newElement],
      };
    }),
}));