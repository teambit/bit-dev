import React, { ReactNode, useEffect, useState } from 'react';
import { CollapsableTreeNode } from '@teambit/base-ui.graph.tree.collapsable-tree-node';
import type { TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { DocsNodeTitle } from './docs-node-title';

export type FolderPayload = {
  icon?: string | ReactNode;
  open?: boolean;
  configPath?: string;
};

export type DocsTreeNodeProps = {} & TreeNodeProps<FolderPayload>;

export function DocsTreeNode({ node, depth }: DocsTreeNodeProps) {
  const [open, setOpen] = useState(node.payload?.open ?? true);

  useEffect(() => {
    // allow node model to override open state
    if (node?.payload?.open !== undefined) setOpen(node?.payload?.open);
  }, [node?.payload?.open]);

  const Title = node.id && (
    <DocsNodeTitle
      id={node.id}
      icon={node.payload?.icon}
      open={open}
      configPath={node.payload?.configPath}
      setOpen={setOpen}
    />
  );

  return <CollapsableTreeNode title={Title} isOpen={open} node={node} depth={depth} />;
}
