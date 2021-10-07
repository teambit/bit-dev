import React from 'react';
import { GraphNodeProps } from '@teambit/community.ui.graph.grid-graph';
import { ComponentBubble, ComponentBubbleProps } from '@teambit/community.ui.graph.component-bubble';
import styles from './bubble-graph.module.scss';

export type BubblePayload = ComponentBubbleProps;
export type BubbleNodeProps = GraphNodeProps<BubblePayload>;

export function BubbleNode({ node, ...rest }: BubbleNodeProps) {
  return (
    <ComponentBubble className={styles.bubble} id={node.attrId} componentId={node.id} {...node.payload} {...rest} />
  );
}
