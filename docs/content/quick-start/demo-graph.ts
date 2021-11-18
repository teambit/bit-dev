import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';

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
  // {
  //   id: 'learn-bit.innovators/apps/innovators@1.0.0',
  //   dependencies: ['learn-bit.innovators/ui/innovator-list@1.0.0'],
  //   payload: {
  //     icon: 'https://static.bit.dev/brands/logo-react.svg',
  //     forceActive: true,
  //     showScope: false,
  //   },
  //   row: 3,
  //   col: 1,
  // },
  {
    id: 'learn-bit.innovators/ui/innovator-card@1.0.0',
    dependencies: [
      'teambit.design/ui/cards/card@1.0.0',
      'teambit.design/ui/content/heading@1.0.0',
      'learn-bit.innovators/entities/innovator@1.0.0',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 3,
    col: 3,
  },
  {
    id: 'learn-bit.innovators/ui/innovator-grid@1.0.2',
    dependencies: [
      {
        id: 'learn-bit.innovators/ui/innovator-card@1.0.2',
        edge: {
          start: 'right',
          end: {
            position: 'bottom',
            offset: {
              x: 50,
            },
          },
        },
      },
      'learn-bit.innovators/entities/innovator@1.0.0',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 4,
    col: 2,

    position: 'right',
  },
  // {
  //   id: 'learn-bit.innovators/services/innovators@1.0.0',
  //   dependencies: [],
  //   payload: {
  //     icon: 'https://static.bit.dev/brands/logo-react.svg',
  //     forceActive: true,
  //     showScope: false,
  //   },
  //   row: 5,
  //   col: 3,
  //   position: 'right',
  // },
  {
    id: 'learn-bit.innovators/blocks/top-innovators@1.0.0',
    dependencies: [
      // 'learn-bit.innovators/entities/innovator@1.0.0',
      'learn-bit.innovators/ui/innovator-grid@1.0.2',
      // 'learn-bit.innovators/services/innovators@1.0.0',
      {
        id: 'teambit.bubble-graph/ui/connecter',
        edge: {
          start: 'top',
          end: 'left',
        },
      },
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
      showScope: false,
    },
    row: 3,
    col: 1,
  },
  {
    id: 'learn-bit.innovators/entities/innovator@1.0.0',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      forceActive: true,
      showScope: false,
    },
    row: 5,
    col: 3,
    position: 'top',
  },
]);
