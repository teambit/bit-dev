import React from 'react';
import classNames from 'classnames';
import { GridGraph, GridGraphProps } from '@teambit/community.ui.graph.grid-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { BubbleNode, BubblePayload } from './bubble-node';
import styles from './bubble-graph.module.scss';

export type BubbleGraphProps = {
  nodes: GridNode<BubblePayload>[];
} & GridGraphProps;

export function BubbleGraph({ nodes, Node = BubbleNode, children, nodeClassName, ...rest }: BubbleGraphProps) {
  return (
    <GridGraph Node={Node} nodes={nodes} nodeClassName={classNames(styles.bubbleContainer, nodeClassName)} {...rest}>
      {children}
    </GridGraph>
  );
}
