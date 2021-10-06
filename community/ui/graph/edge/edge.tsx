import React from 'react';
import { GridNode, DependencyEdge } from '@teambit/community.entity.graph.grid-graph';
import XArrow, {xarrowPropsType as XArrowProps} from 'react-xarrows';

export type EdgeProps = {
  node: GridNode<unknown>;
  dependency: DependencyEdge
} & React.HTMLAttributes<HTMLDivElement>;

export function Edge({ node, dependency, ...rest }: EdgeProps) {
  const anchors: any = {};
  if (dependency.edge?.start) anchors.startAnchor = dependency.edge.start;
  if (dependency.edge?.end) anchors.endAnchor = dependency.edge.end;
  if (dependency.edge?.showHead !== undefined) anchors.showHead = dependency.edge.showHead;

  return (
    <div {...rest}>
      <XArrow 
        start={node.attrId}
        end={dependency.attrId}
        animateDrawing={!!dependency.edge?.animate}
        strokeWidth={dependency.edge?.strokeWidth || 2} 
        color={dependency.edge?.color || '#ECEAFF'}
        {...anchors}
      >
      </XArrow>
    </div>
  );
}
