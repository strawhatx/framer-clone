import { useState, useCallback } from 'react';
import { useBuilderStore } from '@/lib/store';
import { ComponentElement } from '@/lib/types';
import { ComponentTemplate } from './useComponentTemplates';
import { componentConfigs } from '@/lib/config/components';

export const useLayers = () => {
    const { elements, addElement, selectElement, updateElement } = useBuilderStore();
    const [searchTerm, setSearchTerm] = useState('');

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

    // Filtered elements
    const filteredElements = elements.filter(element =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        searchTerm,
        setSearchTerm,
        createNewElement,
        filteredElements,
    };
}; 