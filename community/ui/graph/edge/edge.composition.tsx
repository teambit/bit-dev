import React from 'react';
import { Bubble } from '@teambit/community.ui.graph.bubble';
import { Edge } from './edge';

export const BasicBubbleEdge = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Bubble id="a" />
      <Bubble id="b" />
      <Edge start="a" end="b" />
    </div>
  );
};
