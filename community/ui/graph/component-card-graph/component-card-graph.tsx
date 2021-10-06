import React from 'react';
import classNames from 'classnames';
import {
  GridGraph,
  GridGraphProps,
} from '@teambit/community.ui.graph.grid-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { ComponentCardNode } from './component-card-node';

import styles from './component-card-graph.module.scss';
import { Component } from '@teambit/community.entity.compnent-distribution-graph';

export type ComponentCardGraphProps = {
  nodes: GridNode<Component>[];
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
