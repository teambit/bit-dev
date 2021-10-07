import { createBubbleGraph } from './bubble-graph';
import type { PlainBubbleNode } from './bubble-graph';

export function mockBubbleGraph() {
  return createBubbleGraph([
    /**
     * Highlighted hero components graph
     */
    {
      id: 'teambit.community/ui/homepage/hero@1.0.1',
      dependencies: [
        'teambit.community/entities/hero-graph',
        'teambit.community/ui/content/heading',
        'teambit.design/ui/content/subtitle',
        'teambit.documenter/ui/copy-box',
      ],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 10,
      position: 'top-left',
    },
    {
      id: 'teambit.community/ui/homepage/homepage@1.1.2',
      dependencies: ['teambit.community/ui/homepage/hero'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 11,
      position: 'top-right',
    },
    {
      id: 'teambit.community/apps/website@1.2.1',
      dependencies: ['teambit.community/ui/homepage/homepage'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 11,
      position: 'bottom-right',
    },
    {
      id: 'teambit.design/ui/content/heading@2.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 3,
      col: 2,
      position: 'right',
    },
    {
      id: 'teambit.react-base/buttons/button@2.0.3',
      dependencies: ['teambit.react-base/navigation/link'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 5,
      col: 2,
      position: 'top-left',
    },
    {
      id: 'teambit.react-base/navigation/link@1.2.9',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 4,
      col: 1,
      position: 'top-left',
    },
    {
      id: 'teambit.community/entities/hero-graph@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 2,
      col: 9,
      position: 'top-left',
    },
    /**
     * Aspect graph
     * TODO: prepare icons for main aspects with amir
     */
    {
      id: 'teambit.workspace/workspace@1.4.1',
      dependencies: [
        'teambit.component/component',
        'teambit.ui-foundation/ui/component-tree',
        'teambit.ui-foundation/ui/top-bar',
      ],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/workspace-edit.svg',
      },
      row: 6,
      col: 11,
      position: 'bottom-left',
    },
    {
      id: 'teambit.scope/scope@1.3.1',
      dependencies: [
        'teambit.component/component',
        // 'teambit.ui-foundation/ui/component-tree',
        'teambit.ui-foundation/ui/top-bar',
      ],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/collection.svg',
      },
      row: 5,
      col: 10,
      position: 'bottom-left',
    },
    {
      id: 'teambit.component/component@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/workspace.svg',
      },
      row: 5,
      col: 11,
      position: 'top-right',
    },
    {
      id: 'teambit.ui-foundation/ui/component-tree@1.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 7,
      col: 10,
      position: 'bottom-right',
    },
    {
      id: 'teambit.ui-foundation/ui/top-bar@1.0.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 6,
      col: 9,
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
      position: 'top-left',
    },
    {
      id: 'teambit.compilation/babel@1.1.0',
      dependencies: ['teambit.compilation/compiler'],
      // TODO: add babel icon
      payload: {
        icon: 'https://static.bit.dev/Community/icons/babel-puzzle.svg',
      },
      row: 7,
      col: 8,
      position: 'top-left',
    },
    {
      id: 'teambit.typescript/typescript@1.3.1',
      dependencies: ['teambit.compilation/compiler'],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/typescript-puzzle.svg',
      },
      row: 7,
      col: 6,
      position: 'top-left',
    },
    {
      id: 'teambit.tester/tester@1.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/esling.svg',
      },
      row: 7,
      col: 7,
      position: 'bottom-right',
    },
    {
      id: 'teambit.linting/linter@1.2.1',
      dependencies: ['teambit.tester/eslint'],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/esling.svg',
      },
      row: 5,
      col: 6,
      position: 'bottom-right',
    },
    {
      id: 'teambit.tester/eslint@1.2.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/esling.svg',
      },
      row: 6,
      col: 5,
      position: 'top-right',
    },
    {
      id: 'teambit.react/react@2.0.1',
      dependencies: ['teambit.typescript/typescript', 'teambit.tester/jest', 'teambit.tester/eslint'],
      payload: {
        icon: 'https://static.bit.dev/Community/icons/reactjs-puzzle.svg',
      },
      row: 6,
      col: 4,
      position: 'bottom-right',
    },
    {
      id: 'teambit.tester/jest@3.2.1',
      dependencies: ['teambit.tester/tester'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 7,
      col: 5,
      position: 'bottom-right',
    },
    /**
     * Angular graph
     */
    {
      id: 'learn-bit-angular.ecommerce/store@1.3.1',
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
      position: 'bottom-left',
    },
    {
      id: 'learn-bit-angular.ecommerce/cart@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 1,
      col: 4,
      position: 'top-left',
    },
    {
      id: 'learn-bit-angular.ecommerce/hero@1.1.5',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 2,
      col: 7,
      position: 'top-left',
    },
    {
      id: 'learn-bit-angular.ecommerce/product@1.3.1',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 1,
      col: 6,
      position: 'top-left',
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
      position: 'bottom-left',
    },
    {
      id: 'teambit.mdx/babel/mdx-loader@3.1.2',
      dependencies: ['teambit.mdx/modules/mdx-compiler'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      },
      row: 1,
      col: 1,
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
      position: 'bottom-right',
    },
    /**
     * Data Fetching, React and Angular (composed)
     */
    {
      id: 'teambit.mdx/ui/pages/book-page@0.0.2',
      dependencies: [
        'teambit.mdx/ui/book-list',
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
      position: 'bottom-right',
    },
    {
      id: 'teambit.frontend/ui/angular-renderer@0.0.2',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 5,
      col: 1,
      position: 'bottom-right',
    },
    {
      id: 'learn-bit-react.angular-in-react/books/recommendations@0.0.2',
      dependencies: [],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-angular.svg',
      },
      row: 7,
      col: 1,
      position: 'top-left',
    },
    {
      id: 'teambit.mdx/ui/book-list@0.0.2',
      dependencies: ['teambit.mdx/ui/hooks/use-book', 'learn-bit-react.data-fetching/models/book'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 6,
      col: 2,
      position: 'bottom-right',
    },
    {
      id: 'teambit.mdx/ui/hooks/use-book@0.0.2',
      dependencies: ['learn-bit-react.data-fetching/models/book'],
      payload: {
        icon: 'https://static.bit.dev/brands/logo-react.svg',
      },
      row: 7,
      col: 2,
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
      position: 'bottom-right',
    },
  ]);
}

export function mockPluginsHeroBubbleGraph() {
  let pluginCounter = 0;
  const getPluginID = (): string => {
    pluginCounter++;
    return `teambit.community/plugins/${pluginCounter}`;
  };
  const createRow = (row: number, fromCol: number, icons: string[]): PlainBubbleNode[] => {
    const newRow: PlainBubbleNode[] = icons.map((icon, index) => {
      const bubble: PlainBubbleNode = {
        id: getPluginID(),
        payload: {
          icon,
        },
        row,
        col: fromCol,
        position: 'top-left',
      };
      fromCol++;
      return bubble;
    });
    return newRow;
  };
  const rowOne = [
    'https://static.bit.dev/brands/logo-auth0.svg',
    'https://static.bit.dev/brands/logo-tailwindcss.svg',
    'https://static.bit.dev/brands/logo-npm.svg',
    'https://static.bit.dev/brands/logo-babbel.svg',
    'https://static.bit.dev/brands/logo-gatsby.svg',
    'https://static.bit.dev/brands/logo-cypress.svg',
    'https://static.bit.dev/brands/logo-mongodb.svg',
  ];
  const rowTwo = [
    'https://static.bit.dev/brands/logo-grphql.svg',
    'https://static.bit.dev/brands/logo-stencil.svg',
    'https://static.bit.dev/brands/logo-Linter.svg',
    'https://static.bit.dev/brands/logo-lit.svg',
    'https://static.bit.dev/brands/logo-next.svg',
    'https://static.bit.dev/brands/logo-less.svg',
    'https://static.bit.dev/brands/logo-serverless.svg',
  ];
  const rowThree = [
    'https://static.bit.dev/brands/logo-yarn.svg',
    'https://static.bit.dev/brands/logo-react.svg',
    'https://static.bit.dev/brands/logo-jest.svg',
    'https://static.bit.dev/brands/logo-typescript.svg',
    'https://static.bit.dev/brands/logo-angular.svg',
    'https://static.bit.dev/brands/logo-nodejs.svg',
  ];
  const rowFour = [
    'https://static.bit.dev/brands/logo-styled-components.svg',
    'https://static.bit.dev/brands/logo-figma.svg',
    'https://static.bit.dev/brands/logo-mdx.svg',
    'https://static.bit.dev/brands/logo-webpack.svg',
    'https://static.bit.dev/brands/logo-sass.svg',
    'https://static.bit.dev/brands/github.svg',
  ];
  const rowFive = [
    'https://static.bit.dev/brands/logo-contentful.svg',
    'https://static.bit.dev/brands/logo-zeplin.svg',
    'https://static.bit.dev/brands/logo-sketch.svg',
    'https://static.bit.dev/brands/logo-vue.svg',
    'https://static.bit.dev/brands/logo-eslint.svg?v=0.1',
    'https://static.bit.dev/brands/logo-javascript.svg',
    'https://static.bit.dev/brands/logo-mocha.svg',
  ];
  return createBubbleGraph([
    ...createRow(1, 2, rowOne),
    ...createRow(2, 3, rowTwo),
    ...createRow(3, 3, rowThree),
    ...createRow(4, 2, rowFour),
    ...createRow(5, 1, rowFive),
  ]);
}
