import React from 'react';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
// import { Edge } from './edge';

export const BasicBubbleEdge = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <ComponentBubble id="a" />
      <ComponentBubble id="b" />
      {/* <Edge start="a" end="b" /> */}
    </div>
  );
};
