import React from 'react';
import { HeroGraph } from '@teambit/community.entity.hero-graph';
import { BubbleGraph } from './bubble-graph';

const content = HeroGraph.fromPlainBubbles([
  {
    id: 'teambit.mdx/mdx@3.1.2',
    dependencies: [
      'teambit.mdx/modules/mdx-compiler',
    ],
    icon: 'https://static.bit.dev/extensions-icons/mdx-icon-small.svg',
    row: 2,
    col: 1,
    position: 'bottom-left'
  },
  {
    id: 'teambit.mdx/babel/mdx-loader@3.1.2',
    dependencies: [
      'teambit.mdx/modules/mdx-compiler'
    ],
    icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
    row: 1,
    col: 1,
    position: 'bottom-right'
  },
  {
    id: 'teambit.mdx/modules/mdx-compiler@1.0.12',
    dependencies: [],
    icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
    row: 1,
    col: 2,
    position: 'bottom-right'
  }
]);

export const BasicBubbleGraph = () => (
  <BubbleGraph list={content.bubbles} />
);
