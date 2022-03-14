import React from 'react';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { Edge } from './edge';

export const BasicBubbleEdge = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <ComponentBubble id="elem1" allowHover={false} />
      <ComponentBubble id="elem2" allowHover={false} />
      {/* @ts-ignore */}
      <Edge node={{ attrId: 'elem1' }} dependency={{ attrId: 'elem2' }} />
    </div>
  );
};
