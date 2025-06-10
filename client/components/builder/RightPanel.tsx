'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { useBuilderStore } from '@/lib/store';
import { 
  Settings, 
  Palette, 
  Type, 
  Layout,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from 'lucide-react';

interface RightPanelProps {
  selectedElement: string | null;
}

export function RightPanel({ selectedElement }: RightPanelProps) {
  const { elements, updateElementStyle, updateElementContent } = useBuilderStore();
  const [localValues, setLocalValues] = useState<any>({});

  const selectedElementData = elements.find(el => el.id === selectedElement);

  useEffect(() => {
    if (selectedElementData) {
      setLocalValues({
        backgroundColor: selectedElementData.properties.style.backgroundColor || '#ffffff',
        color: selectedElementData.properties.style.color || '#000000',
        fontSize: selectedElementData.properties.style.fontSize || 16,
        padding: selectedElementData.properties.style.padding || '12px',
        borderRadius: selectedElementData.properties.style.borderRadius || 0,
        text: selectedElementData.properties.content?.text || '',
        placeholder: selectedElementData.properties.content?.placeholder || '',
        width: selectedElementData.properties.layout.size.width,
        height: selectedElementData.properties.layout.size.height,
      });
    }
  }, [selectedElementData]);

  const handleStyleChange = (property: string, value: any) => {
    if (!selectedElement) return;
    
    setLocalValues((prev: any) => ({ ...prev, [property]: value }));
    updateElementStyle(selectedElement, { [property]: value });
  };

  const handleContentChange = (property: string, value: any) => {
    if (!selectedElement) return;
    
    setLocalValues((prev: any) => ({ ...prev, [property]: value }));
    updateElementContent(selectedElement, { [property]: value });
  };

  const colors = [
    '#3B82F6', '#8B5CF6', '#EF4444', '#10B981', 
    '#F59E0B', '#EC4899', '#6366F1', '#84CC16',
    '#ffffff', '#000000', '#6B7280', '#F3F4F6'
  ];

  if (!selectedElement || !selectedElementData) {
    return (
      <div className="h-full bg-slate-900 border-l border-slate-800 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <Settings className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-sm">Select an element to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-slate-900 border-l border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <h3 className="text-sm font-semibold text-white">Properties</h3>
        <p className="text-xs text-slate-400 mt-1">
          {selectedElementData.name} ({selectedElementData.type})
        </p>
      </div>

      <Tabs defaultValue="style" className="flex-1 flex flex-col">
        <div className="px-4 pt-2">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="style" className="text-xs data-[state=active]:bg-slate-700">
              <Palette className="w-3 h-3 mr-1" />
              Style
            </TabsTrigger>
            <TabsTrigger value="layout" className="text-xs data-[state=active]:bg-slate-700">
              <Layout className="w-3 h-3 mr-1" />
              Layout
            </TabsTrigger>
            <TabsTrigger value="content" className="text-xs data-[state=active]:bg-slate-700">
              <Type className="w-3 h-3 mr-1" />
              Content
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1">
          <TabsContent value="style" className="p-4 space-y-6 mt-0">
            {/* Background Color */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Background</Label>
              <div className="grid grid-cols-4 gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded border-2 transition-all ${
                      localValues.backgroundColor === color ? 'border-white scale-110' : 'border-slate-600 hover:border-slate-500'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleStyleChange('backgroundColor', color)}
                  />
                ))}
              </div>
              <Input 
                value={localValues.backgroundColor || ''}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                className="bg-slate-800 border-slate-700 text-slate-300"
                placeholder="#ffffff"
              />
            </div>

            <Separator className="bg-slate-800" />

            {/* Text Color */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Text Color</Label>
              <div className="grid grid-cols-4 gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded border-2 transition-all ${
                      localValues.color === color ? 'border-white scale-110' : 'border-slate-600 hover:border-slate-500'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleStyleChange('color', color)}
                  />
                ))}
              </div>
              <Input 
                value={localValues.color || ''}
                onChange={(e) => handleStyleChange('color', e.target.value)}
                className="bg-slate-800 border-slate-700 text-slate-300"
                placeholder="#000000"
              />
            </div>

            <Separator className="bg-slate-800" />

            {/* Border Radius */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Border Radius</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{localValues.borderRadius || 0}px</span>
                </div>
                <Slider
                  value={[localValues.borderRadius || 0]}
                  onValueChange={([value]) => handleStyleChange('borderRadius', value)}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            <Separator className="bg-slate-800" />

            {/* Font Size */}
            {(selectedElementData.type === 'text' || selectedElementData.type === 'button') && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-slate-300">Font Size</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{localValues.fontSize || 16}px</span>
                  </div>
                  <Slider
                    value={[localValues.fontSize || 16]}
                    onValueChange={([value]) => handleStyleChange('fontSize', value)}
                    min={8}
                    max={72}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="layout" className="p-4 space-y-6 mt-0">
            {/* Dimensions */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Size</Label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-slate-400">Width</Label>
                  <Input 
                    type="number"
                    value={localValues.width || ''}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setLocalValues((prev: any) => ({ ...prev, width: value }));
                      // Update element size through store
                      const element = elements.find(el => el.id === selectedElement);
                      if (element) {
                        updateElementStyle(selectedElement, {
                          ...element.properties.style,
                        });
                      }
                    }}
                    className="bg-slate-800 border-slate-700 text-slate-300"
                    placeholder="150"
                  />
                </div>
                <div>
                  <Label className="text-xs text-slate-400">Height</Label>
                  <Input 
                    type="number"
                    value={localValues.height || ''}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setLocalValues((prev: any) => ({ ...prev, height: value }));
                    }}
                    className="bg-slate-800 border-slate-700 text-slate-300"
                    placeholder="40"
                  />
                </div>
              </div>
            </div>

            <Separator className="bg-slate-800" />

            {/* Padding */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Padding</Label>
              <Input 
                value={localValues.padding || ''}
                onChange={(e) => handleStyleChange('padding', e.target.value)}
                className="bg-slate-800 border-slate-700 text-slate-300"
                placeholder="12px"
              />
            </div>
          </TabsContent>

          <TabsContent value="content" className="p-4 space-y-6 mt-0">
            {/* Text Content */}
            {(selectedElementData.type === 'text' || selectedElementData.type === 'button') && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-slate-300">Text</Label>
                <Input 
                  value={localValues.text || ''}
                  onChange={(e) => handleContentChange('text', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-300"
                  placeholder="Enter text..."
                />
              </div>
            )}

            {/* Input Placeholder */}
            {selectedElementData.type === 'input' && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-slate-300">Placeholder</Label>
                <Input 
                  value={localValues.placeholder || ''}
                  onChange={(e) => handleContentChange('placeholder', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-300"
                  placeholder="Enter placeholder..."
                />
              </div>
            )}

            {/* Image Source */}
            {selectedElementData.type === 'image' && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-slate-300">Image URL</Label>
                <Input 
                  value={localValues.src || ''}
                  onChange={(e) => handleContentChange('src', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-300"
                  placeholder="https://example.com/image.jpg"
                />
                <Label className="text-sm font-medium text-slate-300">Alt Text</Label>
                <Input 
                  value={localValues.alt || ''}
                  onChange={(e) => handleContentChange('alt', e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-300"
                  placeholder="Image description"
                />
              </div>
            )}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}