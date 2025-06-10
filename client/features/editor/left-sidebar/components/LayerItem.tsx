import React, { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, Eye, Lock } from 'lucide-react';
import { ComponentElement } from '@/lib/types';
import { ComponentTemplate } from '../hooks/useComponentTemplates';

interface LayerItemProps {
  element: ComponentElement;
  depth: number;
  isExpanded: boolean;
  isSelected: boolean;
  template: ComponentTemplate | undefined;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
  renderChildren: (element: ComponentElement, depth: number) => React.ReactNode;
}

export const LayerItem = memo(function LayerItem({
  element,
  depth,
  isExpanded,
  isSelected,
  template,
  onToggle,
  onSelect,
  renderChildren,
}: LayerItemProps) {
  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(element.id);
  }, [element.id, onToggle]);

  const handleSelect = useCallback(() => {
    onSelect(element.id);
  }, [element.id, onSelect]);

  return (
    <div className="select-none">
      <div 
        className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer hover:bg-slate-800 transition-colors group ${
          isSelected ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300'
        }`}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
        onClick={handleSelect}
      >
        {template?.canHaveChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="w-4 h-4 p-0 hover:bg-slate-700"
            onClick={handleToggle}
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
          {element.children.map((child) => renderChildren(child, depth + 1))}
        </div>
      )}
    </div>
  );
}); 