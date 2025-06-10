import React, { useState, useMemo, useCallback } from 'react';
import { Tree, NodeModel } from '@minoru/react-dnd-treeview';
import { ComponentElement } from '@/lib/types';

interface TreeViewProps {
  elements: ComponentElement[];
  onMoveNode: (node: ComponentElement, treeIndex: number, path: number[]) => void;
}

const TreeView: React.FC<TreeViewProps> = ({ elements, onMoveNode }) => {
  const treeData = useMemo(() =>
    elements.map(element => ({
      id: element.id,
      parent: 0, // Assuming root level for simplicity
      text: element.name,
      data: element,
    })), [elements]
  );

  const handleDrop = useCallback((newTree: NodeModel<ComponentElement>[]) => {
    // Update the elements based on the new tree structure
    newTree.forEach((node, index) => {
      if (node.data) { // Ensure node.data is defined
        const path = [Number(node.parent)]; // Convert parent to number
        onMoveNode(node.data, index, path);
      }
    });
  }, [onMoveNode]);

  return (
    <Tree
      tree={treeData}
      rootId={0}
      render={(node, { depth, isOpen, onToggle }) => (
        <div style={{ marginInlineStart: depth * 20 }}>
          <span onClick={onToggle}>{isOpen ? '-' : '+'}</span> {node.text}
        </div>
      )}
      dragPreviewRender={(monitorProps) => <div>{monitorProps.item.text}</div>}
      onDrop={handleDrop}
    />
  );
};

export default TreeView; 