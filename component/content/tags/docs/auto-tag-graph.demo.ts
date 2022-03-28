import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';

export const nodesBeforeTag = createBubbleGraph([
  {
    id: 'my-org.scope/ui/card@0.0.1',
    dependencies: [
      'my-org.scope/ui/text@0.0.1',
      'my-org.scope/ui/heading@0.0.1',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 1,
    col: 1,
    position: 'top-left',
    isLinkable: false,
  },
  {
    id: 'my-org.scope/ui/text@0.0.1',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 1,
    col: 4,
    position: 'bottom-right',
    isLinkable: false,
  },
  {
    id: 'my-org.scope/ui/heading@0.0.1',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 4,
    col: 4,
    position: 'bottom-right',
    isLinkable: false,
  },
]);

export const nodesAfterTag = createBubbleGraph([
  {
    id: 'my-org.scope/ui/card@0.0.2',
    dependencies: [
      'my-org.scope/ui/text@0.0.2',
      'my-org.scope/ui/heading@0.0.1',
    ],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 1,
    col: 1,
    position: 'top-left',
    isLinkable: false,
  },
  {
    id: 'my-org.scope/ui/text@0.0.2',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 1,
    col: 4,
    position: 'bottom-right',
    isLinkable: false,
  },
  {
    id: 'my-org.scope/ui/heading@0.0.1',
    dependencies: [],
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      forceActive: true,
    },
    row: 4,
    col: 4,
    position: 'bottom-right',
    isLinkable: false,
  },
]);
