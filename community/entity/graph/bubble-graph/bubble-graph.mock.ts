import { Direction } from '@teambit/community.entity.graph.grid-graph';
import { createBubbleGraph } from './bubble-graph';

export function mockBubbleGraph() {
  return createBubbleGraph([
    /**
     * Highlighted hero components graph
     */
    {
      id: 'teambit.community/ui/hero@1.17.0',
      dependencies: [
        'teambit.community/entity/hero-graph',
        'teambit.community/ui/heading',
        {
          id: 'teambit.design/ui/content/subtitle',
          edge: {
            start: 'bottom',
            end: 'right',
          },
        },
        {
          id: 'teambit.documenter/ui/copy-box',
          edge: {
            start: 'bottom',
            end: 'right',
          },
        },
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 10,
      sizes: {
        lg: {
          row: 2,
          col: 10,
        },
        md: {
          row: 3,
          col: 11,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.community/ui/pages/homepage@1.17.0',
      dependencies: ['teambit.community/ui/hero'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 2,
      col: 11,
      sizes: {
        lg: {
          row: 1,
          col: 10,
        },
        md: {
          row: 1,
          col: 10,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.community/apps/bit-dev@1.95.7',
      dependencies: ['teambit.community/ui/pages/homepage'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 11,
      sizes: {
        lg: {
          row: 1,
          col: 7,
        },
        md: {
          row: 1,
          col: 7,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.design/ui/content/heading@2.2.1',
      dependencies: [
        {
          id: 'teambit.community/ui/heading',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 1,
      sizes: {
        lg: {
          row: 1,
          col: 1,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'right',
    },
    {
      id: 'teambit.base-react/buttons/button@2.0.3',
      dependencies: [
        'teambit.base-react/navigation/link',
        {
          id: 'teambit.design/ui/buttons/button',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 5,
      col: 2,
      sizes: {
        lg: {
          row: 4,
          col: 2,
        },
        md: {
          row: 5,
          col: 1,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.base-react/navigation/link@1.2.9',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 4,
      col: 1,
      sizes: {
        lg: {
          row: 3,
          col: 1,
        },
        md: {
          row: 5,
          col: 5,
        },
        sm: {
          row: null,
          col: null,
        },
      },
    },
    {
      id: 'teambit.community/entity/hero-graph@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 2,
      col: 9,
      sizes: {
        lg: {
          row: 3,
          col: 11,
        },
        md: {
          row: 5,
          col: 11,
        },
        sm: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    /**
     * Aspect graph
     * TODO: prepare icons for main aspects with amir
     */
    {
      id: 'teambit.workspace/workspace@1.4.1',
      dependencies: [
        'teambit.component/component',
        'teambit.ui-foundation/ui/tree/file-tree',
        'teambit.ui-foundation/ui/top-bar',
      ],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/workspace-edit.svg',
      },
      row: 6,
      col: 11,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.scope/scope@1.3.1',
      dependencies: [
        'teambit.component/component',
        'teambit.ui-foundation/ui/top-bar',
      ],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/collection.svg',
      },
      row: 5,
      col: 10,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom',
    },
    {
      id: 'teambit.component/component@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/workspace.svg',
      },
      row: 5,
      col: 11,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.ui-foundation/ui/tree/file-tree@1.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 7,
      col: 10,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom',
    },
    {
      id: 'teambit.ui-foundation/ui/top-bar@1.0.1',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 6,
      col: 9,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.compilation/compiler@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/compile.svg?123',
      },
      row: 6,
      col: 7,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      // position: 'top-right',
    },
    {
      id: 'teambit.compilation/babel@1.1.0',
      isLinkable: false,
      dependencies: ['teambit.compilation/compiler'],
      // TODO: add babel icon
      payload: {
        icon: 'https://static.bit.dev/Community/icons/babel-puzzle.svg',
      },
      row: 7,
      col: 8,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.typescript/typescript@1.3.1',
      dependencies: ['teambit.compilation/compiler'],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/typescript-puzzle.svg',
      },
      row: 7,
      col: 6,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.defender/tester@1.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/tester.svg',
      },
      row: 7,
      col: 7,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.defender/linter@1.2.1',
      dependencies: ['teambit.defender/eslint'],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/linter.svg',
      },
      row: 5,
      col: 6,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.defender/eslint@1.2.1',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/esling.svg',
      },
      row: 6,
      col: 5,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'teambit.react/react@2.0.1',
      dependencies: [
        'teambit.typescript/typescript',
        'teambit.defender/jest',
        'teambit.defender/eslint',
      ],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/reactjs-puzzle.svg',
      },
      row: 6,
      col: 4,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.defender/jest@3.2.1',
      isLinkable: false,
      dependencies: ['teambit.defender/tester'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 7,
      col: 5,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    /**
     * Angular graph
     */
    {
      id: 'learn-bit-angular.ecommerce/store@1.3.1',
      isLinkable: false,
      dependencies: [
        'learn-bit-angular.ecommerce/cart',
        'learn-bit-angular.ecommerce/product',
        'learn-bit-angular.ecommerce/hero',
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 1,
      col: 5,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'learn-bit-angular.ecommerce/cart@1.3.1',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 1,
      col: 4,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'learn-bit-angular.ecommerce/hero@1.1.5',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 2,
      col: 7,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'learn-bit-angular.ecommerce/product@1.3.1',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 1,
      col: 6,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    /**
     * NodeJS graph
     */
    {
      id: 'teambit.mdx/mdx@3.1.2',
      dependencies: ['teambit.mdx/modules/mdx-compiler'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 2,
      col: 1,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.mdx/modules/mdx-loader@3.1.2',
      dependencies: ['teambit.mdx/modules/mdx-compiler'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 1,
      col: 1,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.mdx/modules/mdx-compiler@1.0.12',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 1,
      col: 2,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    /**
     * Data Fetching, React and Angular (composed)
     */
    {
      id: 'learn-bit-react.data-fetching/ui/pages/book-page@0.0.2',
      isLinkable: false,
      dependencies: [
        'learn-bit-react.data-fetching/ui/book-list',
        'teambit.frontend/ui/angular-renderer',
        {
          id: 'learn-bit-react.angular-in-react/books/recommendations',
          edge: {
            start: 'bottom',
            end: 'top',
          },
        },
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 5,
      col: 2,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'teambit.frontend/ui/angular-renderer@0.0.2',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 5,
      col: 1,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'learn-bit-react.angular-in-react/books/recommendations@0.0.2',
      isLinkable: false,
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 7,
      col: 1,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'top-right',
    },
    {
      id: 'learn-bit-react.data-fetching/ui/book-list@0.0.2',
      dependencies: [
        'learn-bit-react.data-fetching/ui/hooks/use-books',
        'learn-bit-react.data-fetching/models/book',
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 6,
      col: 2,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'learn-bit-react.data-fetching/ui/hooks/use-books@0.0.2',
      dependencies: ['learn-bit-react.data-fetching/models/book'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 7,
      col: 2,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
    {
      id: 'learn-bit-react.data-fetching/models/book@0.0.2',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 7,
      col: 3,
      sizes: {
        lg: {
          row: null,
          col: null,
        },
      },
      position: 'bottom-right',
    },
  ]);
}
