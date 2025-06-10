'use client';

import { useState } from 'react';
import { TopBar } from './TopBar';
import { LeftSidebar } from '../../features/editor/left-sidebar/Index';
import { Canvas } from '../canvas/Canvas';
import { RightPanel } from './RightPanel';
import { BottomPanel } from './BottomPanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useBuilderStore } from '@/lib/store';

export function BuilderLayout() {
  const { selectedElement, selectElement } = useBuilderStore();
  const [showBottomPanel, setShowBottomPanel] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <TopBar onToggleBottomPanel={() => setShowBottomPanel(!showBottomPanel)} />
      
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Sidebar */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <LeftSidebar 
              selectedElement={selectedElement}
              onSelectElement={selectElement}
            />
          </ResizablePanel>
          
          <ResizableHandle className="w-1 bg-slate-800 hover:bg-slate-700 transition-colors" />
          
          {/* Main Content Area */}
          <ResizablePanel defaultSize={60} minSize={40}>
            <div className="h-full flex flex-col">
              <div className={`flex-1 ${showBottomPanel ? '' : 'h-full'}`}>
                <Canvas 
                  selectedElement={selectedElement}
                  onSelectElement={selectElement}
                />
              </div>
              
              {showBottomPanel && (
                <>
                  <ResizableHandle className="h-1 bg-slate-800 hover:bg-slate-700 transition-colors" />
                  <div className="h-64">
                    <BottomPanel />
                  </div>
                </>
              )}
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="w-1 bg-slate-800 hover:bg-slate-700 transition-colors" />
          
          {/* Right Panel */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <RightPanel selectedElement={selectedElement} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}