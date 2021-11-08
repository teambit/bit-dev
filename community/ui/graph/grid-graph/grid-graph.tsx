import React, { ComponentType, useMemo } from 'react';
import { ComponentID } from '@teambit/component-id';
import classNames from 'classnames';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import { Edge as DefaultEdge } from '@teambit/community.ui.graph.edge';
import { DefaultNode } from './default-node';
import { positions, getValidId } from './utils';
import styles from './grid-graph.module.scss';
import { makeSpans } from './make-span';

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
        return <GraphNode key={id} Edge={Edge} Node={Node} nodeContent={node} className={nodeClassName} />;
      })}
      {children}
    </div>
  );
}

export type GridGraphNodeProps<T> = {
  nodeContent: GridNode<T>;
} & Omit<GridGraphProps, 'nodes' | 'nodeTypes'>;

function GraphNode<T>({ nodeContent, className, Node = DefaultNode, Edge = DefaultEdge }: GridGraphNodeProps<T>) {
  const bubblePosition = useMemo(() => nodeContent.position && positions[nodeContent.position], [nodeContent.position]);
  const cellLayout = useMemo(() => Object.values(makeSpans(nodeContent.sizes)), [nodeContent.sizes]);
  return (
    <div
      key={nodeContent.id.toString()}
      className={classNames(className, cellLayout)}
      style={{ /* ...cell, */ ...bubblePosition }}
    >
      <Node id={nodeContent.attrId} node={nodeContent} />

      {nodeContent.dependencies.map((dependency) => {
        return <Edge key={`${nodeContent.attrId}->${dependency.attrId}`} node={nodeContent} dependency={dependency} />;
      })}
    </div>
  );
}

// function getBreakpoint(size) {
//   if (!size) return 'xxl';
//   // const media = window.matchMedia(`(max-width: ${size}px)`);
//   // console.log("media", media)
//   if (size > 1920) return 'xxl';
//   if (size > 1440) return 'xl';
//   if (size > 1200) return 'lg';
//   if (size > 920) return 'l';
//   if (size > 768) return 'md';
//   if (size > 480) return 'sm';
//   if (size > 360) return 'xs';
// }
