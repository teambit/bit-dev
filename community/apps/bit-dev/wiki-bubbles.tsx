import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

export const wikiBubbles = createBubbleGraph([
  {
    id: 'teambit.wiki/wiki',
    payload: {
      icon: 'https://static.bit.dev/Community/icons/reactjs-puzzle.svg',
    },
    row: 1,
    col: 1,
  },
]);
