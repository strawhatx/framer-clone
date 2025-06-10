'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useBuilderStore } from '@/lib/store';
import { 
  Save, 
  Play, 
  Monitor, 
  Tablet, 
  Smartphone,
  Undo,
  Redo,
  Eye,
  Settings,
  Share
} from 'lucide-react';

interface TopBarProps {
  onToggleBottomPanel: () => void;
}

export function TopBar({ onToggleBottomPanel }: TopBarProps) {
  const { deviceView, setDeviceView } = useBuilderStore();

  const handleSave = () => {
    // Implement save functionality
    console.log('Saving project...');
  };

  const handlePreview = () => {
    // Implement preview functionality
    console.log('Opening preview...');
  };

  const handleShare = () => {
    // Implement share functionality
    console.log('Sharing project...');
  };

  return (
    <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-white font-semibold">Visual Builder</span>
        </div>
        
        <Separator orientation="vertical" className="h-6 bg-slate-700" />
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
            <Undo className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
            <Redo className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Center Section - Device Views */}
      <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`${deviceView === 'desktop' ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          onClick={() => setDeviceView('desktop')}
        >
          <Monitor className="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`${deviceView === 'tablet' ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          onClick={() => setDeviceView('tablet')}
        >
          <Tablet className="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`${deviceView === 'mobile' ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          onClick={() => setDeviceView('mobile')}
        >
          <Smartphone className="w-4 h-4" />
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={handlePreview}
        >
          <Eye className="w-4 h-4" />
          <span className="ml-1">Preview</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={onToggleBottomPanel}
        >
          <Settings className="w-4 h-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 bg-slate-700" />
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-slate-700 text-slate-300 hover:bg-slate-800"
          onClick={handleShare}
        >
          <Share className="w-4 h-4 mr-1" />
          Share
        </Button>
        
        <Button 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleSave}
        >
          <Save className="w-4 h-4 mr-1" />
          Save
        </Button>
      </div>
    </div>
  );
}