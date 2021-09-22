import { HeroGraph } from './hero-graph';

export function mockHero() {
  return HeroGraph.fromPlainBubbles([
    /**
     * Highlighted hero components graph
     */
    {
      id: 'teambit.community/ui/homepage/hero@1.0.1',
      dependencies: [
        'teambit.community/entities/hero-graph',
        'teambit.community/ui/content/heading',
        'teambit.design/ui/content/subtitle',
        'teambit.documenter/ui/copy-box'
      ],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 3,
      col: 10,
      position: 'top-left'
    },
    {
      id: 'teambit.community/ui/homepage/homepage@1.1.2',
      dependencies: [
        'teambit.community/ui/homepage/hero'
      ],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 3,
      col: 11,
      position: 'top-right'
    },
    {
      id: 'teambit.community/apps/website@1.2.1',
      dependencies: [
        'teambit.community/ui/homepage/homepage'
      ],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 3,
      col: 11,
      position: 'bottom-right'
    },
    {
      id: 'teambit.design/ui/content/heading@2.2.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 3,
      col: 2,
      position: 'right'
    },
    {
      id: 'teambit.react-base/buttons/button@2.0.3',
      dependencies: [
        'teambit.react-base/navigation/link'
      ],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 5,
      col: 2,
      position: 'top-left'
    },
    {
      id: 'teambit.react-base/navigation/link@1.2.9',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 4,
      col: 1,
      position: 'top-left'
    },
    {
      id: 'teambit.community/entities/hero-graph@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      row: 2,
      col: 9,
      position: 'top-left'
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
        'teambit.ui-foundation/ui/top-bar'
      ],
      icon: 'https://static.bit.dev/Community/icons/workspace.svg',
      row: 6,
      col: 11,
      position: 'bottom-left'
    },
    {
      id: 'teambit.scope/scope@1.3.1',
      dependencies: [
        'teambit.component/component',
        // 'teambit.ui-foundation/ui/component-tree',
        'teambit.ui-foundation/ui/top-bar'
      ],
      icon: 'https://static.bit.dev/Community/icons/collection.svg',
      row: 5,
      col: 10,
      position: 'bottom-left'
    },
    {
      id: 'teambit.component/component@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 5,
      col: 11,
      position: 'top-right'
    },
    {
      id: 'teambit.ui-foundation/ui/component-tree@1.2.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 7,
      col: 10,
      position: 'bottom-right'
    },
    {
      id: 'teambit.ui-foundation/ui/top-bar@1.0.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 6,
      col: 9,
      position: 'bottom-right'
    },
    {
      id: 'teambit.compilation/compiler@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/Community/icons/compile.svg',
      row: 6,
      col: 7,
      position: 'top-left'
    },
    {
      id: 'teambit.compilation/babel@1.1.0',
      dependencies: [
        'teambit.compilation/compiler'
      ],
      // TODO: add babel icon
      icon: 'https://static.bit.dev/Community/icons/babel.svg',
      row: 7,
      col: 8,
      position: 'top-left'
    },
    {
      id: 'teambit.typescript/typescript@1.3.1',
      dependencies: [
        'teambit.compilation/compiler'
      ],
      icon: 'https://static.bit.dev/brands/logo-ts.svg',
      row: 7,
      col: 6,
      position: 'top-left'
    },
    {
      id: 'teambit.tester/tester@1.2.1',
      dependencies: [],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 7,
      col: 7,
      position: 'bottom-right'
    },
    {
      id: 'teambit.tester/linter@1.2.1',
      dependencies: [
        'teambit.tester/eslint'
      ],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 5,
      col: 6,
      position: 'bottom-right'
    },
    {
      id: 'teambit.tester/eslint@1.2.1',
      dependencies: [],
      icon: 'https://static.bit.dev/Community/icons/esling.svg',
      row: 6,
      col: 5,
      position: 'top-right'
    },
    {
      id: 'teambit.react/react@2.0.1',
      dependencies: [
        'teambit.typescript/typescript',
        'teambit.tester/jest',
        'teambit.tester/eslint'
      ],
      icon: 'https://static.bit.dev/brands/logo-react.svg',
      row: 6,
      col: 4,
      position: 'bottom-right'
    },
    {
      id: 'teambit.tester/jest@3.2.1',
      dependencies: [
        'teambit.tester/tester'
      ],
      icon: 'https://static.bit.dev/Community/icons/jest.svg',
      row: 7,
      col: 5,
      position: 'bottom-right'
    },
    /**
     * Angular graph
     */
     {
      id: 'learn-bit-angular.ecommerce/store@1.3.1',
      dependencies: [
        'learn-bit-angular.ecommerce/cart',
        'learn-bit-angular.ecommerce/product',
        'learn-bit-angular.ecommerce/hero'
      ],
      icon: 'https://static.bit.dev/brands/logo-angular.svg',
      row: 1,
      col: 5,
      position: 'bottom-left'
    },
    {
      id: 'learn-bit-angular.ecommerce/cart@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-angular.svg',
      row: 1,
      col: 4,
      position: 'top-left'
    },
    {
      id: 'learn-bit-angular.ecommerce/hero@1.1.5',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-angular.svg',
      row: 2,
      col: 7,
      position: 'top-left'
    },
    {
      id: 'learn-bit-angular.ecommerce/product@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-angular.svg',
      row: 1,
      col: 6,
      position: 'top-left'
    },
    /**
     * NodeJS graph
     */
     {
      id: 'teambit.mdx/mdx@3.1.2',
      dependencies: [
        'teambit.mdx/modules/mdx-compiler',
      ],
      icon: 'https://static.bit.dev/extensions-icons/mdx-icon-small.svg',
      row: 2,
      col: 1,
      position: 'bottom-left'
    },
    {
      id: 'teambit.mdx/mdx-loader@3.1.2',
      dependencies: [
        'teambit.mdx/modules/mdx-compiler'
      ],
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      row: 1,
      col: 1,
      position: 'bottom-right'
    },
    {
      id: 'teambit.mdx/modules/mdx-compiler@1.0.12',
      dependencies: [],
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      row: 1,
      col: 2,
      position: 'bottom-right'
    },
    /**
     * React + Angular combined
     */
  ]);  
} 
