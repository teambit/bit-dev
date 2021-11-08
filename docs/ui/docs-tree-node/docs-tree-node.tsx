import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { CollapsableTreeNode } from '@teambit/base-ui.graph.tree.collapsable-tree-node';
import type { TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import { getCustomIcon } from './get-custom-icon';
import styles from './docs-tree-node.module.scss';

export type FolderPayload = {
  icon?: string | ReactNode;
  open?: boolean;
  config?: string;
};

export type DocsTreeNodeProps = {} & TreeNodeProps<FolderPayload>;

export function DocsTreeNode({ node, depth }: DocsTreeNodeProps) {
  const [open, setOpen] = useState(node.payload?.open ?? true);

  useEffect(() => {
    // allow node model to override open state
    if (node?.payload?.open !== undefined) setOpen(node?.payload?.open);
  }, [node?.payload?.open]);

  const displayName = node.id.replace(/\/$/, '').split('/').pop();
  const CustomIcon = getCustomIcon(node.payload?.icon);
  const ConfigSectionIcon = node.payload?.config && (
    <Link href={node.payload?.config} external={node.payload?.config.startsWith('http')} className={styles.configLink}>
      <Icon className={styles.configIcon} of="settings" />
    </Link>
  );
  const Title = node.id && (
    <div className={classNames(indentClass, styles.folder)} onClick={() => setOpen(!open)}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Icon className={classNames(styles.icon, !open && styles.collapsed)} of="fat-arrow-down" />
          {CustomIcon}
          <span className={styles.name}>{displayName}</span>
        </div>
        {ConfigSectionIcon}
      </div>
    </div>
  );

  return <CollapsableTreeNode title={Title} isOpen={open} node={node} depth={depth} />;
}
