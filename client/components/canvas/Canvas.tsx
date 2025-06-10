'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useBuilderStore } from '@/lib/store';
import { ComponentElement } from '@/lib/types';
import { 
  ZoomIn, 
  ZoomOut, 
  Move,
  Hand,
  MousePointer,
  Trash2,
  Copy
} from 'lucide-react';

interface CanvasProps {
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
}

export function Canvas({ selectedElement, onSelectElement }: CanvasProps) {
  const { 
    elements, 
    canvasZoom, 
    deviceView, 
    setCanvasZoom, 
    deleteElement, 
    duplicateElement,
    updateElement 
  } = useBuilderStore();
  
  const [tool, setTool] = useState<'select' | 'hand' | 'move'>('select');
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setCanvasZoom(Math.min(canvasZoom + 25, 200));
  const handleZoomOut = () => setCanvasZoom(Math.max(canvasZoom - 25, 25));

  const getDeviceSize = () => {
    switch (deviceView) {
      case 'mobile':
        return { width: 375, height: 667 };
      case 'tablet':
        return { width: 768, height: 1024 };
      default:
        return { width: 1200, height: 800 };
    }
  };

  const handleMouseDown = useCallback((e: React.MouseEvent, elementId: string) => {
    if (tool !== 'select') return;
    
    e.stopPropagation();
    onSelectElement(elementId);
    
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    setDraggedElement(elementId);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [tool, elements, onSelectElement]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggedElement || tool !== 'select') return;

    const canvas = e.currentTarget as HTMLElement;
    const rect = canvas.getBoundingClientRect();
    const scale = canvasZoom / 100;
    
    const x = (e.clientX - rect.left - dragOffset.x) / scale;
    const y = (e.clientY - rect.top - dragOffset.y) / scale;

    updateElement(draggedElement, {
      properties: {
        ...elements.find(el => el.id === draggedElement)?.properties,
        layout: {
          ...elements.find(el => el.id === draggedElement)?.properties.layout,
          position: { x: Math.max(0, x), y: Math.max(0, y) },
        },
      },
    });
  }, [draggedElement, tool, canvasZoom, dragOffset, updateElement, elements]);

  const handleMouseUp = useCallback(() => {
    setDraggedElement(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  const renderElement = (element: ComponentElement) => {
    const isSelected = selectedElement === element.id;
    const { position, size } = element.properties.layout;
    const style = element.properties.style;

    const elementStyle = {
      position: 'absolute' as const,
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: typeof size.width === 'number' ? `${size.width}px` : size.width,
      height: typeof size.height === 'number' ? `${size.height}px` : size.height,
      backgroundColor: style.backgroundColor,
      color: style.color,
      fontSize: style.fontSize ? `${style.fontSize}px` : undefined,
      fontWeight: style.fontWeight,
      padding: style.padding,
      margin: style.margin,
      borderRadius: style.borderRadius ? `${style.borderRadius}px` : undefined,
      border: style.border,
      cursor: tool === 'select' ? 'move' : 'default',
      zIndex: isSelected ? 10 : 1,
    };

    const content = (() => {
      switch (element.type) {
        case 'text':
          return (
            <span className="pointer-events-none">
              {element.properties.content?.text || 'Text Element'}
            </span>
          );
        case 'button':
          return (
            <button className="w-full h-full pointer-events-none">
              {element.properties.content?.text || 'Button'}
            </button>
          );
        case 'image':
          return (
            <img
              src={element.properties.content?.src || 'https://via.placeholder.com/150'}
              alt={element.properties.content?.alt || 'Image'}
              className="w-full h-full object-cover pointer-events-none"
            />
          );
        case 'input':
          return (
            <input
              type="text"
              placeholder={element.properties.content?.placeholder || 'Input field'}
              className="w-full h-full pointer-events-none bg-transparent"
            />
          );
        default:
          return (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 pointer-events-none">
              {element.name}
            </div>
          );
      }
    })();

    return (
      <div
        key={element.id}
        style={elementStyle}
        className={`
          transition-all duration-200 hover:ring-2 hover:ring-blue-400
          ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        `}
        onMouseDown={(e) => handleMouseDown(e, element.id)}
      >
        {content}
        
        {isSelected && (
          <div className="absolute -top-8 left-0 flex gap-1 bg-slate-800 rounded px-2 py-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 text-slate-400 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                duplicateElement(element.id);
              }}
            >
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 text-slate-400 hover:text-red-400"
              onClick={(e) => {
                e.stopPropagation();
                deleteElement(element.id);
              }}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
    );
  };

  const deviceSize = getDeviceSize();

  return (
    <div className="h-full bg-slate-900 flex flex-col">
      {/* Canvas Toolbar */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-700 p-1 rounded">
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 ${tool === 'select' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setTool('select')}
            >
              <MousePointer className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 ${tool === 'hand' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setTool('hand')}
            >
              <Hand className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 ${tool === 'move' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setTool('move')}
            >
              <Move className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white"
            onClick={handleZoomOut}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-slate-300 text-sm font-mono min-w-[3rem] text-center">
            {canvasZoom}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white"
            onClick={handleZoomIn}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
          
          {/* Canvas Content */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `scale(${canvasZoom / 100})` }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="bg-white rounded-lg shadow-2xl relative overflow-hidden"
              style={{ 
                width: `${deviceSize.width}px`, 
                height: `${deviceSize.height}px`,
                minHeight: '400px'
              }}
              onClick={() => onSelectElement(null)}
            >
              {elements.map(renderElement)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}