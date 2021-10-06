import React from 'react';
import { mockBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { Hero } from './hero';

export const BasicHero = () => (
  <Hero bubbles={mockBubbleGraph()} />
);
