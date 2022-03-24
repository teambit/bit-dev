import React, { ComponentType, useMemo } from 'react';
import { ComponentID } from '@teambit/component-id';
import classNames from 'classnames';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import { Edge as DefaultEdge, ArrowAutoReloader } from '@teambit/community.ui.graph.edge';
import { graphNodeLayout, Sizes } from '@teambit/base-react.ui.layout.graph-node';
import { DefaultNode } from './default-node';
import { getValidId } from './utils';
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
  /**
   * elements passed to the graph
   */
  nodes: GridNode<TN>[];
  /**
   * override node styles
   */
  nodeClassName?: string;
  /**
   * the node element to be rendered in the graph
   */
  Node?: ComponentType<GraphNodeProps<TN>>;
  /**
   * the edge element that creates the arrows between nodes
   */
  Edge?: ComponentType<GraphEdgeProps<TE>>;
  /**
   * a function that calculates the positions for each node in the graph and outputs the correct css and classes to be used in each node
   */
  nodeLayout?: (breakpoints?: Sizes, row?: number, col?: number) => string[];
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
      <ArrowAutoReloader>
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
      </ArrowAutoReloader>
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
  const { id, attrId, dependencies, position = '', sizes, col, row } = nodeContent || {};
  const cellLayout = useMemo(() => {
    return nodeLayout(sizes, row, col);
  }, [sizes]);

  return (
    <div
      key={id.toString()}
      data-position={position}
      className={classNames(className, cellLayout, styles.displacement)}
    >
      <Node id={attrId} node={nodeContent} />

      {dependencies.map((dependency) => {
        return <Edge key={`${attrId}->${dependency.attrId}`} node={nodeContent} dependency={dependency} />;
      })}
    </div>
  );
}
