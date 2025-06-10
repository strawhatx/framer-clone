import { 
  Box, 
  Type, 
  Image, 
  Square, 
  Circle,
  MousePointer,
  LucideIcon
} from 'lucide-react';
import { ComponentType } from '@/lib/types';

export interface ComponentTemplate {
  name: string;
  icon: LucideIcon;
  category: string;
  type: ComponentType;
  canHaveChildren: boolean;
}

export const useComponentTemplates = () => {
  const componentTemplates: ComponentTemplate[] = [
    // Layout Components
    { name: 'Container', icon: Box, category: 'Layout', type: 'container', canHaveChildren: true },
    { name: 'Grid', icon: Box, category: 'Layout', type: 'grid', canHaveChildren: true },
    { name: 'Stack', icon: Box, category: 'Layout', type: 'stack', canHaveChildren: true },
    { name: 'Section', icon: Box, category: 'Layout', type: 'section', canHaveChildren: true },
    { name: 'Divider', icon: Box, category: 'Layout', type: 'divider', canHaveChildren: false },

    // Content Components
    { name: 'Text', icon: Type, category: 'Content', type: 'text', canHaveChildren: false },
    { name: 'Heading', icon: Type, category: 'Content', type: 'heading', canHaveChildren: false },
    { name: 'Paragraph', icon: Type, category: 'Content', type: 'paragraph', canHaveChildren: false },
    { name: 'List', icon: Type, category: 'Content', type: 'list', canHaveChildren: true },
    { name: 'Quote', icon: Type, category: 'Content', type: 'quote', canHaveChildren: false },

    // Media Components
    { name: 'Image', icon: Image, category: 'Media', type: 'image', canHaveChildren: false },
    { name: 'Video', icon: Image, category: 'Media', type: 'video', canHaveChildren: false },
    { name: 'Icon', icon: Image, category: 'Media', type: 'icon', canHaveChildren: false },
    { name: 'Avatar', icon: Image, category: 'Media', type: 'avatar', canHaveChildren: false },

    // Input Components
    { name: 'Button', icon: Square, category: 'Input', type: 'button', canHaveChildren: false },
    { name: 'Input', icon: MousePointer, category: 'Input', type: 'input', canHaveChildren: false },
    { name: 'Textarea', icon: MousePointer, category: 'Input', type: 'textarea', canHaveChildren: false },
    { name: 'Checkbox', icon: Square, category: 'Input', type: 'checkbox', canHaveChildren: false },
    { name: 'Radio', icon: Circle, category: 'Input', type: 'radio', canHaveChildren: false },
    { name: 'Select', icon: MousePointer, category: 'Input', type: 'select', canHaveChildren: false },
    { name: 'Toggle', icon: MousePointer, category: 'Input', type: 'toggle', canHaveChildren: false },
    { name: 'Slider', icon: MousePointer, category: 'Input', type: 'slider', canHaveChildren: false },

    // Navigation Components
    { name: 'Link', icon: MousePointer, category: 'Navigation', type: 'link', canHaveChildren: true },
    { name: 'Menu', icon: MousePointer, category: 'Navigation', type: 'menu', canHaveChildren: true },
    { name: 'Tabs', icon: MousePointer, category: 'Navigation', type: 'tabs', canHaveChildren: true },
    { name: 'Breadcrumbs', icon: MousePointer, category: 'Navigation', type: 'breadcrumbs', canHaveChildren: true },

    // Feedback Components
    { name: 'Alert', icon: MousePointer, category: 'Feedback', type: 'alert', canHaveChildren: true },
    { name: 'Toast', icon: MousePointer, category: 'Feedback', type: 'toast', canHaveChildren: true },
    { name: 'Progress', icon: MousePointer, category: 'Feedback', type: 'progress', canHaveChildren: false },
    { name: 'Spinner', icon: MousePointer, category: 'Feedback', type: 'spinner', canHaveChildren: false },
  ];

  const categories = ['Layout', 'Content', 'Media', 'Input', 'Navigation', 'Feedback'];

  return {
    componentTemplates,
    categories,
  };
}; 