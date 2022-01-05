import React, { ReactNode, useEffect, useState } from 'react';
import { CollapsableTreeNode } from '@teambit/base-ui.graph.tree.collapsable-tree-node';
import type { TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { NodeTitle } from '@teambit/docs.ui.sidebar.node-title';

export type FolderPayload = {
  icon?: string | ReactNode;
  open?: boolean;
  configPath?: string;
  overviewPath?: string;
};

export type DocsTreeNodeProps = {} & TreeNodeProps<FolderPayload>;

export function DocsTreeNode({ node, depth }: DocsTreeNodeProps) {
  const [open, setOpen] = useState(node.payload?.open ?? true);

  useEffect(() => {
    // allow node model to override open state
    if (node?.payload?.open !== undefined) setOpen(node?.payload?.open);
  }, [node?.payload?.open]);

  const Title = node.id && (
    <NodeTitle
      id={node.id}
      icon={node.payload?.icon}
      open={open}
      configPath={node.payload?.configPath}
      overviewPath={node.payload?.overviewPath}
      setOpen={setOpen}
    />
  );

  return <CollapsableTreeNode title={Title} isOpen={open} node={node} depth={depth} />;
}