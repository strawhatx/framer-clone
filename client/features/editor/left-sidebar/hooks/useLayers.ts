import { useState, useCallback } from 'react';
import { useBuilderStore } from '@/lib/store';
import { ComponentElement } from '@/lib/types';
import { ComponentTemplate } from './useComponentTemplates';
import { componentConfigs } from '@/lib/config/components';

export const useLayers = () => {
    const { elements, addElement, selectElement, updateElement } = useBuilderStore();
    const [expandedLayers, setExpandedLayers] = useState<Set<string>>(new Set(['root']));
    const [searchTerm, setSearchTerm] = useState('');
    const [draggedElement, setDraggedElement] = useState<ComponentElement | null>(null);

    // Layer management
    const toggleLayer = useCallback((id: string) => {
        setExpandedLayers(prev => {
            const newExpanded = new Set(prev);
            newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
            return newExpanded;
        });
    }, []);

    // Element creation
    const createNewElement = useCallback((template: ComponentTemplate) => {
        const config = componentConfigs[template.type];
        const newElement: ComponentElement = {
            id: `${template.type}-${Date.now()}`,
            type: template.type,
            name: template.name,
            children: template.canHaveChildren ? [] : undefined,
            properties: {
                style: config.defaultStyle,
                content: config.defaultContent,
                layout: {
                    position: { x: 50, y: 50 },
                    size: config.defaultLayout,
                },
            },
        };

        addElement(newElement);
        selectElement(newElement.id);
    }, [addElement, selectElement]);

    // Drag and drop helpers
    const findParent = useCallback((targetId: string): ComponentElement | null => {
        const find = (elements: ComponentElement[]): ComponentElement | null => {
            for (const element of elements) {
                if (element.children?.some(child => child.id === targetId)) return element;
                if (element.children) {
                    const found = find(element.children);
                    if (found) return found;
                }
            }
            return null;
        };
        return find(elements);
    }, [elements]);

    const removeFromParent = useCallback((elementId: string) => {
        const parent = findParent(elementId);
        if (parent?.children) {
            const newChildren = parent.children.filter(child => child.id !== elementId);
            updateElement(parent.id, { children: newChildren });
        } else {
            const newElements = elements.filter(el => el.id !== elementId);
            updateElement('root', { children: newElements });
        }
    }, [elements, findParent, updateElement]);

    const addToParent = useCallback((element: ComponentElement, parent: ComponentElement | null, position: 'before' | 'after' | 'inside', targetId?: string) => {
        // Add to parent element
        if (position === 'inside') {
            const newChildren = [...(parent?.children || []), element];
            updateElement(parent!.id, { children: newChildren });
            setExpandedLayers(prev => new Set(Array.from(prev).concat(parent!.id)));
        }
        // Add to parent element
        else if (parent?.children) {
            const index = parent.children.findIndex(child => child.id === targetId);
            const newChildren = [...parent.children];
            newChildren.splice(position === 'before' ? index : index + 1, 0, element);
            updateElement(parent.id, { children: newChildren });
        }
        // Add to root element
        else {
            const newElements = [...elements, element];
            updateElement('root', { children: newElements });
        }
    }, [elements, updateElement]);

    // Drag and drop handlers
    const handleDragStart = useCallback((element: ComponentElement) => {
        setDraggedElement(element);
    }, []);

    const handleDragEnd = useCallback(() => {
        setDraggedElement(null);
    }, []);

    const handleDrop = useCallback((targetElement: ComponentElement, position: 'before' | 'after' | 'inside') => {
        if (!draggedElement || draggedElement.id === targetElement.id) return;

        removeFromParent(draggedElement.id);
        addToParent(draggedElement, position === 'inside' ? targetElement : findParent(targetElement.id), position, targetElement.id);
    }, [draggedElement, findParent, removeFromParent, addToParent]);

    // Filtered elements
    const filteredElements = elements.filter(element =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        expandedLayers,
        searchTerm,
        setSearchTerm,
        toggleLayer,
        createNewElement,
        filteredElements,
        handleDragStart,
        handleDragEnd,
        handleDrop,
        draggedElement,
    };
}; 