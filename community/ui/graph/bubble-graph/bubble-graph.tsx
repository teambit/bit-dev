import React from 'react';
import { GridGraph, GridGraphProps } from '@teambit/community.ui.graph.grid-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { BubbleNode, BubblePayload } from './bubble-node';
import styles from './bubble-graph.module.scss';

export type BubbleGraphProps = {
  nodes: GridNode<BubblePayload>[];
} & GridGraphProps;

export function BubbleGraph({ nodes, Node = BubbleNode, children, ...rest }: BubbleGraphProps) {
  return (
    <GridGraph Node={Node} nodes={nodes} nodeClassName={styles.bubbleContainer} {...rest}>
      {children}
    </GridGraph>
  );
}
