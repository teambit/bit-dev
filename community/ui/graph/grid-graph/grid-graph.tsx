import React, { ComponentType } from 'react';
import { ComponentID } from '@teambit/component-id';
import classNames from 'classnames';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import { Edge as DefaultEdge } from '@teambit/community.ui.graph.edge';
import { DefaultNode } from './default-node';
import styles from './grid-graph.module.scss';

export type GridItemProps = {
  id?: string;
  dependencies?: ComponentID[];
  icon?: string;
  row?: number;
  col?: number;
  position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
} & React.HTMLAttributes<HTMLDivElement>;

export type GraphNodeProps<T> = {
  node: GridNode<T>;
} & React.HTMLAttributes<HTMLDivElement>;

export type GraphEdgeProps<T> = {
  node: GridNode<T>;
  dependency: DependencyEdge;
};

export type GridGraphProps<TN = {}, TE = {}> = {
  nodes: GridNode<TN>[];
  nodeClassName?: string;
  Node?: ComponentType<GraphNodeProps<TN>>;
  Edge?: ComponentType<GraphEdgeProps<TE>>;
} & React.HTMLAttributes<HTMLDivElement>;

export function GridGraph({
  children,
  nodeClassName,
  nodes,
  Node = DefaultNode,
  Edge = DefaultEdge,
  className,
  ...rest
}: GridGraphProps) {
  return (
    <div className={classNames(styles.gridGraph, className)} {...rest}>
      {nodes.map((node) => {
        const id = getValidId(node.id.toString({ ignoreVersion: true }));
        const cell = getCell(node.row, node.col);
        const bubblePosition = node.position && positions[node.position];
        return (
          <div key={node.id.toString()} className={nodeClassName} style={{ ...cell, ...bubblePosition }}>
            <Node id={node.attrId} key={id} node={node} />

            {node.dependencies.map((dependency) => {
              return <Edge key={`${node.attrId}->${dependency.attrId}`} node={node} dependency={dependency} />;
            })}
          </div>
        );
      })}
      {children}
    </div>
  );
}

export const positions = {
  top: {
    alignSelf: 'start',
    justifySelf: 'center',
  },
  'top-right': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
  right: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'bottom-right': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  bottom: {
    alignSelf: 'end',
    justifySelf: 'center',
  },
  'bottom-left': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  left: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'top-left': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
};

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}

export function getCell(row?: number, col?: number) {
  return {
    gridColumnStart: col,
    gridColumnEnd: col,
    gridRowStart: row,
    gridRowEnd: row,
  };
}
