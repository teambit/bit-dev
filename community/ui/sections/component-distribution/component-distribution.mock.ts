import { GridNode } from '@teambit/community.ui.graph.component-card-graph';
import { Direction } from '@teambit/community.entity.graph.grid-graph';

export const top = GridNode.fromPlain({
  id: 'learn-bit-react.connecter/top',
  dependencies: [
    {
      id: 'learn-bit-react.shoe-store/ui/pages/home',
      edge: {
        end: 'top',
        direction: Direction.NONE,
      },
    },
    {
      id: 'learn-bit-react.ecommerce/ui/store-hero',
      edge: {
        end: 'top',
      },
    },
  ],
});

export const bottom = GridNode.fromPlain({
  id: 'learn-bit-react.connecter/bottom',
  dependencies: [
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'bottom',
        direction: Direction.NONE,
      },
    },
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card',
      edge: {
        end: 'bottom',
      },
    },
  ],
});