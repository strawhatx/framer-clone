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

export function Dropzone({ selectedElement, onSelectElement }: CanvasProps) {
  

  return (
    <></>
}