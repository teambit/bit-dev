import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

export const envGraph = createBubbleGraph([
  {
    id: 'myorg.envs/my-react@2.0.1',
    // dependencies: ['teambit.typescript/typescript', 'teambit.tester/jest', 'teambit.tester/eslint'],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/reactjs-puzzle.svg',
    },
    row: 4,
    col: 1,
    position: 'bottom-right',
  },
  {
    id: 'teambit.typescript/typescript@1.3.1',
    dependencies: ['teambit.compilation/compiler'],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/typescript-puzzle.svg',
    },
    row: 2,
    col: 4,
    position: 'top-left',
  },
  {
    id: 'teambit.tester/eslint@1.2.1',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/esling.svg',
    },
    row: 5,
    col: 5,
    position: 'top-right',
  },
  {
    id: 'teambit.tester/jest@3.2.1',
    dependencies: ['teambit.tester/tester'],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    row: 8,
    col: 4,
    position: 'bottom-right',
  },
]);
