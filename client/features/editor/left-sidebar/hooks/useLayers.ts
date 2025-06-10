import { useState, useCallback } from 'react';
import { useBuilderStore } from '@/lib/store';
import { ComponentElement } from '@/lib/types';
import { ComponentTemplate } from './useComponentTemplates';

export const useLayers = () => {
  const { elements, addElement, selectElement } = useBuilderStore();
  const [expandedLayers, setExpandedLayers] = useState<Set<string>>(new Set(['root']));
  const [searchTerm, setSearchTerm] = useState('');

  const toggleLayer = useCallback((id: string) => {
    setExpandedLayers(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      return newExpanded;
    });
  }, []);

  const createNewElement = useCallback((template: ComponentTemplate) => {
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
  }, [addElement, selectElement]);

  const filteredElements = elements.filter((element: ComponentElement) =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    expandedLayers,
    searchTerm,
    setSearchTerm,
    toggleLayer,
    createNewElement,
    filteredElements,
  };
}; 