import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

export const demoGraph = createBubbleGraph([
  {
    id: 'learn-bit.innovators/composites/demo@1.0.0',
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
    dependencies: ['learn-bit.innovators/ui/innovator-list@1.0.0', 'learn-bit.innovators/entities/innovator@1.0.0'],
    row: 8,
    col: 2,
    position: 'top-left',
  },
  {
    id: 'learn-bit.innovators/ui/innovator-list@1.0.0',
    dependencies: ['learn-bit.innovators/ui/innovator@1.0.0'],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
    row: 5,
    col: 5,
    position: 'top-left',
  },
  {
    id: 'learn-bit.innovators/ui/innovator@1.0.0',
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
    row: 3,
    col: 8,
    position: 'top-left',
  },
  {
    id: 'learn-bit.innovators/entities/innovator@1.0.0',
    payload: {
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    row: 10,
    col: 5,
    position: 'top-left',
  },
  {
    id: 'learn-bit.innovators/apps/innovators@2.0.1',
    dependencies: ['learn-bit.innovators/ui/innovator-list@1.0.0'],
    payload: {
      icon: 'https://static.bit.dev/Community/icons/reactjs-puzzle.svg',
    },
    row: 2,
    col: 3,
    position: 'top-left',
  },
]);
