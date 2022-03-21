import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Xwrapper, useXarrow } from 'react-xarrows';
import { GridGraph, GridGraphProps } from '@teambit/community.ui.graph.grid-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { BubbleNode, BubblePayload } from './bubble-node';
import styles from './bubble-graph.module.scss';

export type BubbleGraphProps = {
  nodes: GridNode<BubblePayload>[];
} & GridGraphProps;

export function BubbleGraph({ nodes, Node = BubbleNode, children, nodeClassName, ...rest }: BubbleGraphProps) {
  return (
    <Xwrapper>
      <ReloadArrows />
      <GridGraph Node={Node} nodes={nodes} nodeClassName={classNames(styles.bubbleContainer, nodeClassName)} {...rest}>
        {children}
      </GridGraph>
    </Xwrapper>
  );
}

// this will be fixed in react-xarrows v3.0.0
function ReloadArrows() {
  const updateXarrow = useXarrow();

  useEffect(() => {
    updateXarrow();
  }, []);

  return null;
}
