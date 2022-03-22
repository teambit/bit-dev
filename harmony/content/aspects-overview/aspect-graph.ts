import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

export const aspectGraph = createBubbleGraph([
  {
    id: 'teambit.workspace/workspace@1.0.0',
    payload: {
      icon: 'https://static.bit.dev/Community/icons/workspace-edit.svg',
      forceActive: true,
    },
    dependencies: ['teambit.scope/scope', 'teambit.harmony/logger', 'teambit.component/component'],
    // row: 3,
    col: 3,
    position: 'top-left',
  },
  {
    id: 'teambit.scope/scope@1.0.1',
    dependencies: ['teambit.component/component'],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/collection.svg',
      forceActive: true,
    },
    // row: 3,
    col: 8,
    position: 'top-left',
  },
  {
    id: 'teambit.component/component@1.0.1',
    dependencies: ['teambit.harmony/logger'],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/workspace.svg',
      forceActive: true,
    },
    row: 5,
    col: 8,
    position: 'top-left',
  },
  {
    id: 'teambit.harmony/logger@1.0.1',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/aspect.svg',
      forceActive: true,
    },
    row: 5,
    col: 3,
    position: 'top-left',
  },
]);
