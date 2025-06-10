import { ComponentStyle, ComponentContent, ComponentLayout } from './types/components';

export type ComponentType = 'container' | 'grid' | 'stack' | 'section' | 'divider' | 
                          'text' | 'heading' | 'paragraph' | 'list' | 'quote' |
                          'image' | 'video' | 'icon' | 'avatar' |
                          'button' | 'input' | 'textarea' | 'checkbox' | 'radio' | 
                          'select' | 'toggle' | 'slider' | 'link' | 'menu' | 
                          'tabs' | 'breadcrumbs' | 'alert' | 'toast' | 'progress' | 'spinner';

export interface ComponentElement {
  id: string;
  type: ComponentType;
  name: string;
  children?: ComponentElement[];
  properties: {
    style: ComponentStyle;
    content: ComponentContent;
    layout: {
      position: { x: number; y: number };
      size: ComponentLayout;
    };
  };
}

export interface DragItem {
  type: string;
  name: string;
  icon: string;
}

export interface BuilderState {
  elements: ComponentElement[];
  selectedElement: string | null;
  draggedElement: DragItem | null;
  canvasZoom: number;
  deviceView: 'desktop' | 'tablet' | 'mobile';
}