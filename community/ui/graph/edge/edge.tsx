import React from 'react';
import XArrow from 'react-xarrows';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import { getDirection } from './get-direction';

export type EdgeProps = {
  node: GridNode<unknown>;
  dependency: DependencyEdge;
} & React.HTMLAttributes<HTMLDivElement>;

export function Edge({ node, dependency, ...rest }: EdgeProps) {
  const anchors: any = {};
  const direction = getDirection(dependency.edge?.direction) || {}; // not sure if we should memoize this

  if (dependency.edge?.start) anchors.startAnchor = dependency.edge.start;
  if (dependency.edge?.end) anchors.endAnchor = dependency.edge.end;

  return (
    <div {...rest}>
      <XArrow
        start={node.attrId}
        end={dependency.attrId}
        animateDrawing={!!dependency.edge?.animate}
        strokeWidth={dependency.edge?.strokeWidth || 2}
        color={dependency.edge?.color || 'var(--surface-hover-color)'}
        {...anchors}
        {...direction}
      />
    </div>
  );
}
