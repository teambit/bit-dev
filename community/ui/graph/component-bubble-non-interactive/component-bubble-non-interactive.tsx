import React from 'react';
import type { BubbleNodeProps } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';

export type ComponentBubbleNonInteractiveProps = BubbleNodeProps;

export function ComponentBubbleNonInteractive({ node, ...rest }: ComponentBubbleNonInteractiveProps) {
  return <ComponentBubble {...rest} {...node.payload} showVersion={false} allowHover={false} />;
}
