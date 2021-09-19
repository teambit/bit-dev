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
     * Aspect graph https://static.bit.dev/envs/aspect.svg
     */
     {
      id: 'teambit.workspace/workspace@1.4.1',
      dependencies: [
        'teambit.component/component'
      ],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 5,
      col: 11,
      position: 'top-left'
    },
    {
      id: 'teambit.scope/scope@1.3.1',
      dependencies: [
        'teambit.component/component'
      ],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 5,
      col: 10,
      position: 'top-left'
    },
    {
      id: 'teambit.component/component@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 6,
      col: 11,
      position: 'bottom-right'
    },
    {
      id: 'teambit.compilation/compiler@1.3.1',
      dependencies: [],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 6,
      col: 5,
      position: 'top-left'
    },
    {
      id: 'teambit.compilation/babel@1.1.0',
      dependencies: [
        'teambit.compilation/compiler'
      ],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 6,
      col: 7,
      position: 'top-right'
    },
    {
      id: 'teambit.typescript/typescript@1.3.1',
      dependencies: [
        'teambit.compilation/compiler'
      ],
      icon: 'https://static.bit.dev/envs/aspect.svg',
      row: 7,
      col: 6,
      position: 'top-left'
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
      id: 'teambit.component/component-id@3.1.2',
      dependencies: [
        'teambit.component/legacy-id',
        'teambit.component/bit-error'
      ],
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      row: 2,
      col: 1,
      position: 'bottom-left'
    },
    {
      id: 'teambit.component/legacy-id@3.1.2',
      dependencies: [
        'teambit.component/bit-error'
      ],
      icon: 'https://static.bit.dev/brands/logo-nodejs.svg',
      row: 1,
      col: 1,
      position: 'bottom-right'
    },
    {
      id: 'teambit.component/bit-error@1.0.12',
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
