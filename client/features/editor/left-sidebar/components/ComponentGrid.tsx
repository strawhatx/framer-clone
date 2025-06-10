import React from 'react';
import { ComponentTemplate } from '../hooks/useComponentTemplates';

interface ComponentGridProps {
  components: ComponentTemplate[];
  onDragStart: (e: React.DragEvent<HTMLDivElement>, template: ComponentTemplate) => void;
  onClick: (template: ComponentTemplate) => void;
}

export function ComponentGrid({ components, onDragStart, onClick }: ComponentGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {components.map(component => (
        <div
          key={component.name}
          className="flex flex-col items-center gap-2 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors group"
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => onDragStart(e, component)}
          onClick={() => onClick(component)}
        >
          <component.icon className="w-5 h-5 text-slate-400 group-hover:text-slate-300" />
          <span className="text-xs text-slate-400 group-hover:text-slate-300">
            {component.name}
          </span>
        </div>
      ))}
    </div>
  );
} 