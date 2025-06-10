'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Play, 
  Terminal,
  Copy,
  Download,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  X
} from 'lucide-react';

const sampleCode = `import React from 'react';
import { Button } from '@/components/ui/button';

export function MyComponent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
          <span className="font-semibold text-gray-800">Your App</span>
        </div>
      </div>
      
      <div className="text-center space-y-4 p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Visual Builder
        </h1>
        <p className="text-gray-600">
          Drag and drop components to build your app
        </p>
      </div>
      
      <div className="flex justify-center">
        <Button className="px-6 py-3 bg-blue-600 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
}`;

const logs = [
  { id: 1, type: 'success', time: '14:32:15', message: 'Component rendered successfully' },
  { id: 2, type: 'info', time: '14:32:10', message: 'Style properties updated' },
  { id: 3, type: 'warning', time: '14:31:45', message: 'Missing alt text for image component' },
  { id: 4, type: 'info', time: '14:31:30', message: 'Canvas zoom level changed to 100%' },
  { id: 5, type: 'success', time: '14:31:20', message: 'Element selected: Header' },
  { id: 6, type: 'info', time: '14:31:15', message: 'Project autosaved' },
];

export function BottomPanel() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getLogBadgeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'error':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  return (
    <div className="h-full bg-slate-900 border-t border-slate-800 flex flex-col">
      <Tabs defaultValue="code" className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-slate-800">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="code" className="text-xs data-[state=active]:bg-slate-700">
              <Code2 className="w-3 h-3 mr-1" />
              Code
            </TabsTrigger>
            <TabsTrigger value="preview" className="text-xs data-[state=active]:bg-slate-700">
              <Play className="w-3 h-3 mr-1" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="logs" className="text-xs data-[state=active]:bg-slate-700">
              <Terminal className="w-3 h-3 mr-1" />
              Logs
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>

        <TabsContent value="code" className="flex-1 flex flex-col mt-0">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                React
              </Badge>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                TypeScript
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700">
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-4">
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                <code>{sampleCode}</code>
              </pre>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="preview" className="flex-1 flex flex-col mt-0">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-green-700 text-green-400">
                Live Preview
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700">
                <RefreshCw className="w-4 h-4 mr-1" />
                Refresh
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-4 bg-slate-950">
            <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 space-y-6">
                {/* Live Preview Content */}
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                    <span className="font-semibold text-gray-800">Your App</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                <div className="text-center space-y-4 p-6 border-2 border-dashed border-gray-200 rounded-lg">
                  <h1 className="text-2xl font-bold text-gray-800">Welcome to Visual Builder</h1>
                  <p className="text-gray-600">Drag and drop components to build your app</p>
                </div>

                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="flex-1 flex flex-col mt-0">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                {logs.length} entries
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700">
                Clear
              </Button>
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              {logs.map(log => (
                <div
                  key={log.id}
                  className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {getLogIcon(log.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`text-xs ${getLogBadgeColor(log.type)}`}>
                        {log.type}
                      </Badge>
                      <span className="text-xs text-slate-500 font-mono">
                        {log.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{log.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}