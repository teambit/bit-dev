import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { Ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { classes } from '@teambit/design.ui.surfaces.menu.item';
import { getFileIcon } from '@teambit/code.ui.utils.get-file-icon';
import { TreeNodeProps as BaseTreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { indentClass, indentStyle } from '@teambit/base-ui.graph.tree.indent';
import styles from './tree-node.module.scss';

export type TreeNodePayload = {
  widgets?: (() => JSX.Element)[];
  isActive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeNodeProps = BaseTreeNodeProps<TreeNodePayload>;

export function TreeNode({ node, depth, ...rest }: TreeNodeProps) {
  const icon = getFileIcon(undefined, node.id);
  return (
    <div
      style={{ ...indentStyle(depth) }}
      onClick={node.payload?.onClick}
      className={classNames(styles.node, classes.interactive, indentClass, node.payload?.isActive && classes.active)}
    >
      <div className={classNames(classes.menuItem, styles.nodeTitle)}>
        <img className={styles.icon} src={icon} />

        <Ellipsis>{node.id}</Ellipsis>
      </div>
      {node.payload?.widgets &&
        node.payload?.widgets.map((Widget, index) => {
          return <Widget key={index} />;
        })}
    </div>
  );
}
