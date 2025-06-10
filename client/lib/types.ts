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
    style: {
      backgroundColor?: string;
      color?: string;
      fontSize?: number;
      fontWeight?: string;
      padding?: string;
      margin?: string;
      borderRadius?: number;
      border?: string;
      width?: string;
      height?: string;
    };
    content?: {
      text?: string;
      src?: string;
      alt?: string;
      placeholder?: string;
    };
    layout: {
      position: { x: number; y: number };
      size: { width: number; height: number };
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