import React from 'react';
import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';

const nodes = createBubbleGraph([
  {
    id: 'my-org.my-scope/envs/my-env@new',
    dependencies: ['teambit.compilation/compiler'],
    payload: {
      icon: 'https://static.bit.dev/extensions-icons/default.svg',
      forceActive: true,
    },
    row: 2,
    col: 1,
    position: 'bottom-left',
    isLinkable: false,
  },
  {
    id: 'teambit.compilation/compiler',
    dependencies: ['teambit.compilation/babel'],
    payload: {
      icon: 'https://static.bit.dev/extensions-icons/default.svg',
      forceActive: true,
      showScope: true,
    },
    row: 2,
    col: 2,
    position: 'bottom-right',
    isLinkable: true,
  },
  {
    id: 'teambit.compilation/babel',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/extensions-icons/default.svg',
      forceActive: true,
      showScope: true,
    },
    row: 2,
    col: 4,
    position: 'bottom-right',
    isLinkable: true,
  },
]);

export const CompilerEnvService = () => <BubbleGraph nodes={nodes} />;
