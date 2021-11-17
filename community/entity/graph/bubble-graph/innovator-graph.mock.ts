import { Direction } from '@teambit/community.entity.graph.grid-graph';
import { createBubbleGraph } from './bubble-graph';

export function innovaorsBubbleGraph() {
  return createBubbleGraph([
    {
      id: 'teambit.design/ui/cards/card@1.0.0',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
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
      },
      row: 1,
      col: 5,
      position: 'left',
    },
    {
      id: 'learn-bit.innovators/apps/innovators@1.0.0',
      dependencies: ['learn-bit.innovators/ui/innovator-list@1.0.0'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
        forceActive: true,
      },
      row: 3,
      col: 1,
    },
    {
      id: 'learn-bit.innovators/ui/innovator@1.0.0',
      dependencies: ['teambit.design/ui/cards/card@1.0.0', 'teambit.design/ui/content/heading@1.0.0'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
        forceActive: true,
      },
      row: 3,
      col: 3,
    },
    {
      id: 'learn-bit.innovators/ui/innovator-list@1.0.0',
      dependencies: [
        {
          id: 'learn-bit.innovators/ui/innovator@1.0.0',
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
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
        forceActive: true,
      },
      row: 4,
      col: 2,

      position: 'right',
    },
    {
      id: 'learn-bit.innovators/services/innovators@1.0.0',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
        forceActive: true,
      },
      row: 5,
      col: 3,
      position: 'right',
    },
    {
      id: 'learn-bit.innovators/mini-app/demo@1.0.0',
      dependencies: [
        'learn-bit.innovators/entities/innovator@1.0.0',
        'learn-bit.innovators/ui/innovator-list@1.0.0',
        'learn-bit.innovators/services/innovators@1.0.0',
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
        forceActive: true,
      },
      row: 5,
      col: 1,
    },
    /**
     * Aspect graph
     * TODO: prepare icons for main aspects with amir
     */
    {
      id: 'learn-bit.innovators/entities/innovator@1.0.0',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/workspace-edit.svg',
        forceActive: true,
      },
      row: 6,
      col: 2,
      position: 'top',
    },
  ]);
}
