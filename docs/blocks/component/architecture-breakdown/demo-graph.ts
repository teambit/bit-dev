import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { Direction } from '@teambit/community.entity.graph.grid-graph';

export const demoGraph = createBubbleGraph([
  {
    id: 'teambit.design/ui/cards/card@1.0.0',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      showScope: false,
    },
    row: 1,
    col: 6,
    position: 'bottom-left',
  },
  {
    id: 'teambit.design/ui/content/heading@1.0.0',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      showScope: false,
    },
    row: 1,
    col: 5,
    position: 'left',
  },

  {
    id: 'learn-bit.inventions/ui/invention-card@1.0.0',
    dependencies: [
      'teambit.design/ui/cards/card@1.0.0',
      'teambit.design/ui/content/heading@1.0.0',
      'learn-bit.inventions/entities/invention@1.0.0',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 5,
    col: 3,
    position: 'top-right',
  },
  {
    id: 'learn-bit.inventions/ui/invention-grid@1.0.2',
    dependencies: [
      'learn-bit.inventions/ui/invention-card@1.0.2',
      {
        id: 'learn-bit.inventions/entities/invention@1.0.0',
        edge: {
          start: 'bottom',
        },
      },
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 4,
    col: 1,
  },
  {
    id: 'learn-bit.inventions/blocks/top-inventions@1.0.0',
    dependencies: [
      'learn-bit.inventions/ui/invention-grid@1.0.2',
      {
        id: 'teambit.bubble-graph/ui/connecter',
        edge: {
          start: 'left',
          end: 'bottom',
          direction: Direction.TAIL,
        },
      },
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 5,
    col: 1,
    position: 'bottom',
  },
  {
    id: 'learn-bit.inventions/entities/invention@1.0.0',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      forceActive: true,
      showScope: false,
    },
    row: 6,
    col: 3,
    position: 'top',
  },
]);
