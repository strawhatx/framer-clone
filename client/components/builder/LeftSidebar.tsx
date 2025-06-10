'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useBuilderStore } from '@/lib/store';
import { ComponentElement } from '@/lib/types';
import { 
  Layers, 
  Box, 
  Type, 
  Image, 
  Square, 
  Circle,
  Search,
  Eye,
  EyeOff,
  Lock,
  ChevronRight,
  ChevronDown,
  MousePointer,
  LucideIcon
} from 'lucide-react';

type ComponentType = 'container' | 'grid' | 'stack' | 'section' | 'divider' | 
                    'text' | 'heading' | 'paragraph' | 'list' | 'quote' |
                    'image' | 'video' | 'icon' | 'avatar' |
                    'button' | 'input' | 'textarea' | 'checkbox' | 'radio' | 
                    'select' | 'toggle' | 'slider' | 'link' | 'menu' | 
                    'tabs' | 'breadcrumbs' | 'alert' | 'toast' | 'progress' | 'spinner';

interface ComponentTemplate {
  name: string;
  icon: LucideIcon;
  category: string;
  type: ComponentType;
  canHaveChildren: boolean;
}

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

interface LeftSidebarProps {
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
}

export function LeftSidebar({ selectedElement, onSelectElement }: LeftSidebarProps) {
  const { elements, addElement, selectElement } = useBuilderStore();
  const [expandedLayers, setExpandedLayers] = useState<Set<string>>(new Set(['root']));
  const [searchTerm, setSearchTerm] = useState('');
  const [componentSearchTerm, setComponentSearchTerm] = useState('');

  const toggleLayer = (id: string) => {
    const newExpanded = new Set(expandedLayers);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedLayers(newExpanded);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, template: ComponentTemplate) => {
    e.dataTransfer.setData('application/json', JSON.stringify(template));
  };

  const createNewElement = (template: ComponentTemplate) => {
    const newElement: ComponentElement = {
      id: `${template.type}-${Date.now()}`,
      type: template.type,
      name: template.name,
      children: template.canHaveChildren ? [] : undefined,
      properties: {
        style: {
          backgroundColor: template.type === 'button' ? '#2563eb' : undefined,
          color: template.type === 'button' ? '#ffffff' : '#000000',
          padding: '12px',
          borderRadius: 4,
          fontSize: 14,
        },
        content: {
          text: template.type === 'text' ? 'New Text' : 
                template.type === 'button' ? 'Button' : undefined,
          placeholder: template.type === 'input' ? 'Enter text...' : undefined,
        },
        layout: {
          position: { x: 50, y: 50 },
          size: { width: 150, height: 40 },
        },
      },
    };

    addElement(newElement);
    selectElement(newElement.id);
  };

  const renderLayer = (element: ComponentElement, depth = 0) => {
    const hasChildren = element.children && element.children.length > 0;
    const isExpanded = expandedLayers.has(element.id);
    const isSelected = selectedElement === element.id;
    const template = componentTemplates.find(t => t.type === element.type);

    return (
      <div key={element.id} className="select-none">
        <div 
          className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer hover:bg-slate-800 transition-colors group ${
            isSelected ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300'
          }`}
          style={{ paddingLeft: `${8 + depth * 16}px` }}
          onClick={() => onSelectElement(element.id)}
        >
          {template?.canHaveChildren && (
            <Button
              variant="ghost"
              size="sm"
              className="w-4 h-4 p-0 hover:bg-slate-700"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                toggleLayer(element.id);
              }}
            >
              {isExpanded ? 
                <ChevronDown className="w-3 h-3" /> : 
                <ChevronRight className="w-3 h-3" />
              }
            </Button>
          )}
          <span className="flex-1 text-sm truncate">{element.name}</span>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <Button variant="ghost" size="sm" className="w-4 h-4 p-0 hover:bg-slate-700">
              <Eye className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm" className="w-4 h-4 p-0 hover:bg-slate-700">
              <Lock className="w-3 h-3" />
            </Button>
          </div>
        </div>
        {template?.canHaveChildren && element.children && isExpanded && (
          <div>
            {element.children.map((child) => renderLayer(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const filteredElements = elements.filter((element: ComponentElement) =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredComponents = componentTemplates.filter(component =>
    component.name.toLowerCase().includes(componentSearchTerm.toLowerCase())
  );

  return (
    <div className="h-full bg-slate-900 border-r border-slate-800 flex flex-col">
      <Tabs defaultValue="layers" className="flex-1 flex flex-col">
        <div className="p-3 border-b border-slate-800">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="layers" className="text-xs data-[state=active]:bg-slate-700">
              <Layers className="w-3 h-3 mr-1" />
              Layers
            </TabsTrigger>
            <TabsTrigger value="components" className="text-xs data-[state=active]:bg-slate-700">
              <Box className="w-3 h-3 mr-1" />
              Components
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="layers" className="flex-1 flex flex-col mt-0">
          <div className="p-3">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Search layers..." 
                className="pl-8 bg-slate-800 border-slate-700 text-slate-300 placeholder:text-slate-500"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <ScrollArea className="flex-1 px-3">
            <div className="space-y-1 pb-4">
              {filteredElements.map((element: ComponentElement) => renderLayer(element))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="components" className="flex-1 flex flex-col mt-0">
          <div className="p-3">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Search components..." 
                className="pl-8 bg-slate-800 border-slate-700 text-slate-300 placeholder:text-slate-500"
                value={componentSearchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComponentSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3">
            <div className="space-y-4 pb-4">
              {['Layout', 'Content', 'Media', 'Input', 'Navigation', 'Feedback'].map(category => (
                <div key={category}>
                  <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {filteredComponents
                      .filter(comp => comp.category === category)
                      .map(component => (
                        <div
                          key={component.name}
                          className="flex flex-col items-center gap-2 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors group"
                          draggable
                          onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, component)}
                          onClick={() => createNewElement(component)}
                        >
                          <component.icon className="w-5 h-5 text-slate-400 group-hover:text-slate-300" />
                          <span className="text-xs text-slate-400 group-hover:text-slate-300">
                            {component.name}
                          </span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}