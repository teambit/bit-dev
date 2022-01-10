import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { NavLink } from '@teambit/base-react.navigation.link';
import styles from './sidebar-node.module.scss';

import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { TreeNodeProps, TreeNode as TreeNodeType } from '@teambit/base-ui.graph.tree.recursive-tree';

export type WidgetProps<Payload> = {
  node: TreeNodeType<Payload>;
};

export type TreeNodeComponentProps<Payload = any> = {
  widgets?: ComponentType<WidgetProps<Payload>>[];
  isActive?: boolean;
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
} & TreeNodeProps<Payload>;

export function TreeNode<T>(props: TreeNodeComponentProps<T>) {
  const { node, isActive = false, icon, onClick, widgets, href } = props;
  return (
    <NavLink
      href={href || node.id}
      active={isActive}
      exact
      strict
      className={classNames(indentClass, styles.fileNode)}
      activeClassName={styles.active}
      onClick={onClick}
    >
      <div className={styles.left}>
        {icon && <img className={styles.icon} src={icon} />}
        <span>{node.id.split('/').pop()}</span>
      </div>

      <div className={styles.right}>
        {widgets?.map((Widget, index) => (
          <Widget key={index} node={node} />
        ))}
      </div>
    </NavLink>
  );
}
