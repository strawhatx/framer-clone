import { ComponentStyle, ComponentContent, ComponentLayout } from './components';

export type ComponentType =
  // Layout Components
  | 'container'
  | 'grid'
  | 'stack'
  | 'section'
  | 'divider'
  // Content Components
  | 'text'
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'quote'
  // Media Components
  | 'image'
  | 'video'
  | 'icon'
  | 'avatar'
  // Input Components
  | 'button'
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'toggle'
  | 'slider'
  // Navigation Components
  | 'link'
  | 'menu'
  | 'tabs'
  | 'breadcrumbs'
  // Feedback Components
  | 'alert'
  | 'toast'
  | 'progress'
  | 'spinner';

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