import React from 'react';
import { GraphNodeProps } from '@teambit/community.ui.graph.grid-graph';
import { ComponentBubble, ComponentBubbleProps } from '@teambit/community.ui.graph.component-bubble';

export type BubblePayload = ComponentBubbleProps;

export function BubbleNode({ node }: GraphNodeProps<BubblePayload>) {
  return <ComponentBubble componentId={node.id} {...node.payload} />
}
