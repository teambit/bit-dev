import React from 'react';
import classNames from 'classnames';
import {
  GridGraph,
  GridGraphProps,
} from '@teambit/community.ui.graph.grid-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { ComponentCardNode } from './component-card-node';
// import type { ComponentCardNode as ComponentCardNodeType } from '@teambit/community.entity.compnent-distribution-graph';

// TODO - @oded unify with payload on @teambit/community.entity.compnent-distribution-graph
export type ComponentCardPayload = {
  preview?: string;
  description?: string;
  envIcon?: string;
};

import styles from './component-card-graph.module.scss';

export type ComponentCardGraphProps = {
  nodes: GridNode<ComponentCardPayload>[];
} & GridGraphProps;

export function ComponentCardGraph({
  nodes,
  children,
  className,
  ...rest
}: ComponentCardGraphProps) {
  return (
    <GridGraph
      nodes={nodes}
      {...rest}
      nodeClassName={styles.cardWrapper}
      Node={ComponentCardNode}
      className={classNames(styles.componentGrid, className)}
    >
      {children}
    </GridGraph>
  );
}
