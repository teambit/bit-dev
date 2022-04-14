import React from 'react';
import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';

const extendedEnvNodes = createBubbleGraph([
  {
    id: 'my-org.my-scope/envs/my-react@new',
    dependencies: ['teambit.react/react'],
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
    id: 'teambit.react/react',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/extensions-icons/default.svg',
      forceActive: true,
      showScope: true,
    },
    row: 2,
    col: 3,
    position: 'bottom-right',
    isLinkable: true,
  },
]);

export const ExtendedEnv = () => <BubbleGraph nodes={extendedEnvNodes} />;
