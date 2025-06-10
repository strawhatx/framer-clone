import React, { memo, useCallback, useState } from 'react';
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
  onDragStart: (element: ComponentElement) => void;
  onDragEnd: () => void;
  onDrop: (targetElement: ComponentElement, position: 'before' | 'after' | 'inside') => void;
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
  onDragStart,
  onDragEnd,
  onDrop,
  renderChildren,
}: LayerItemProps) {
  const [dragOverPosition, setDragOverPosition] = useState<'before' | 'after' | 'inside' | null>(null);

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(element.id);
  }, [element.id, onToggle]);

  const handleSelect = useCallback(() => {
    onSelect(element.id);
  }, [element.id, onSelect]);

  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.stopPropagation();
    onDragStart(element);
  }, [element, onDragStart]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const height = rect.height;

    if (template?.canHaveChildren && y < height * 0.25) {
      setDragOverPosition('before');
    } else if (template?.canHaveChildren && y > height * 0.75) {
      setDragOverPosition('after');
    } else {
      setDragOverPosition('inside');
    }
  }, [template?.canHaveChildren]);

  const handleDragLeave = useCallback(() => {
    setDragOverPosition(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragOverPosition) {
      onDrop(element, dragOverPosition);
    }
    setDragOverPosition(null);
  }, [dragOverPosition, element, onDrop]);

  return (
    <div className="select-none">
      <div 
        className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer hover:bg-slate-800 transition-colors group ${
          isSelected ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300'
        } ${
          dragOverPosition === 'before' ? 'border-t-2 border-blue-500' :
          dragOverPosition === 'after' ? 'border-b-2 border-blue-500' :
          dragOverPosition === 'inside' ? 'bg-blue-500/20' : ''
        }`}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
        onClick={handleSelect}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={onDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
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