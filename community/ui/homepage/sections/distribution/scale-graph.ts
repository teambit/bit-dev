import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

export const scaleGraph = createBubbleGraph([
  {
    id: 'teambit.design/button@1.0.1',
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
    // row: 3,
    // col: 10,
    position: 'top-left'
  },
  {
    id: 'teambit.design/ui/section/do-thing@1.6.1',
    dependencies: [
      'teambit.design/button',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
    row: 3,
    col: 6,
    position: 'top-left'
  },
]);
