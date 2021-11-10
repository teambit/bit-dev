import React, { ComponentType, useMemo } from 'react';
import { ComponentID } from '@teambit/component-id';
import classNames from 'classnames';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import { Edge as DefaultEdge } from '@teambit/community.ui.graph.edge';
import { graphNodeLayout, Sizes } from '@teambit/base-react.ui.layout.graph-node';
import { DefaultNode } from './default-node';
import { positions, getValidId } from './utils';
import type { PositionsType } from './utils';
import styles from './grid-graph.module.scss';

export type GridItemProps = {
  id?: string;
  dependencies?: ComponentID[];
  icon?: string;
  row?: number;
  col?: number;
  position?: PositionsType;
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
  nodeLayout?: (breakpoints?: Sizes) => string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function GridGraph({
  children,
  nodeClassName,
  nodes,
  Node = DefaultNode,
  Edge = DefaultEdge,
  nodeLayout,
  className,
  ...rest
}: GridGraphProps) {
  return (
    <div className={classNames(styles.gridGraph, className)} {...rest}>
      {nodes.map((node) => {
        const id = getValidId(node.id.toString({ ignoreVersion: true }));
        return (
          <GraphNode
            key={id}
            Edge={Edge}
            Node={Node}
            nodeContent={node}
            className={nodeClassName}
            nodeLayout={nodeLayout}
          />
        );
      })}
      {children}
    </div>
  );
}

export type GridGraphNodeProps<T> = {
  nodeContent: GridNode<T>;
} & Omit<GridGraphProps, 'nodes' | 'nodeTypes'>;

function GraphNode<T>({
  nodeContent,
  className,
  Node = DefaultNode,
  Edge = DefaultEdge,
  nodeLayout = graphNodeLayout,
}: GridGraphNodeProps<T>) {
  const position = useMemo(() => nodeContent.position && positions[nodeContent.position], [nodeContent.position]);
  const cellLayout = useMemo(() => {
    return nodeLayout(nodeContent.sizes);
  }, [nodeContent.sizes]);

  return (
    <div key={nodeContent.id.toString()} className={classNames(className, cellLayout)} style={{ ...position }}>
      <Node id={nodeContent.attrId} node={nodeContent} />

      {nodeContent.dependencies.map((dependency) => {
        return <Edge key={`${nodeContent.attrId}->${dependency.attrId}`} node={nodeContent} dependency={dependency} />;
      })}
    </div>
  );
}
