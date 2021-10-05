import React from 'react'
import { Card } from '@teambit/design.ui.cards.card';
import { GraphNodeProps } from './grid-graph';

export function DefaultNode({ node, children, ...rest }: GraphNodeProps<{}>) {
  return <Card {...rest}>{node.id.toString()}</Card>;
}
