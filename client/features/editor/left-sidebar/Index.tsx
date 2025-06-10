'use client';

import React, { useState, useCallback, memo } from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Layers, Box, Search } from 'lucide-react';
import { ComponentElement } from '@/lib/types';
import { useComponentTemplates, ComponentTemplate } from './hooks/useComponentTemplates';
import { useLayers } from './hooks/useLayers';
import { LayerItem } from './components/LayerItem';
import { ComponentGrid } from './components/ComponentGrid';

interface LeftSidebarProps {
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
}

export const LeftSidebar = memo(function LeftSidebar({ selectedElement, onSelectElement }: LeftSidebarProps) {
  const { componentTemplates, categories } = useComponentTemplates();
  const {
    expandedLayers,
    searchTerm,
    setSearchTerm,
    toggleLayer,
    createNewElement,
    filteredElements,
    handleDragStart,
    handleDragEnd,
    handleDrop,
  } = useLayers();
  const [componentSearchTerm, setComponentSearchTerm] = useState('');

  const handleComponentDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, template: ComponentTemplate) => {
    e.dataTransfer.setData('application/json', JSON.stringify(template));
  }, []);

  const renderLayer = useCallback((element: ComponentElement, depth = 0) => {
    const isExpanded = expandedLayers.has(element.id);
    const isSelected = selectedElement === element.id;
    const template = componentTemplates.find(t => t.type === element.type);

    return (
      <LayerItem
        key={element.id}
        element={element}
        depth={depth}
        isExpanded={isExpanded}
        isSelected={isSelected}
        template={template}
        onToggle={toggleLayer}
        onSelect={onSelectElement}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrop={handleDrop}
        renderChildren={renderLayer}
      />
    );
  }, [componentTemplates, expandedLayers, selectedElement, toggleLayer, onSelectElement, handleDragStart, handleDragEnd, handleDrop]);

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
              {categories.map(category => (
                <div key={category}>
                  <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                    {category}
                  </h4>
                  <ComponentGrid
                    components={filteredComponents.filter(comp => comp.category === category)}
                    onDragStart={handleComponentDragStart}
                    onClick={createNewElement}
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
});