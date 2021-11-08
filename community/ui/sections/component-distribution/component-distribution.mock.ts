import { GridNode } from '@teambit/community.ui.graph.component-card-graph';
import { Direction } from '@teambit/community.entity.graph.grid-graph';

export const image = GridNode.fromPlain({
  id: 'teambit.image/image',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/pages/home',
      edge: {
        end: 'right',
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'right',
      },
    },
  ],
});

export const top = GridNode.fromPlain({
  id: 'teambit.connecter/top',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/pages/home',
      edge: {
        end: 'top',
        direction: Direction.NONE,
      },
    },
    {
      id: 'teambit.ecommerce/ui/store-hero',
      edge: {
        end: 'top',
      },
    },
  ],
});

export const bottom = GridNode.fromPlain({
  id: 'teambit.connecter/bottom',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'bottom',
        direction: Direction.NONE,
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card',
      edge: {
        end: 'bottom',
      },
    },
  ],
});
