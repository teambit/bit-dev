import { Direction } from '@teambit/community.entity.graph.grid-graph';
import { createComponentCardGraph } from './component-graph';

export const componentsMock = () => {
  return createComponentCardGraph([
    {
      id: 'learn-bit-react.base-ui/ui/button@2.0.3',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/botton.jpg',
        description: 'A Button component for buttons and elements that look like buttons',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/base-ui/ui/button',
      },
      row: 1,
      col: 1,
      sizes: {
        xxl: {
          row: 1,
          col: 1,
        },
        lg: {
          row: 2,
          col: 1,
        },
        md: {
          row: 3,
          col: 1,
        },
      },
    },
    {
      id: 'learn-bit-react.ecommerce/ui/store-hero@0.0.12',
      dependencies: ['learn-bit-react.base-ui/ui/button@2.0.3'],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/hero.jpg',
        description: 'A hero component for the store',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/ecommerce/ui/store-hero',
      },
      row: 1,
      col: 2,
      sizes: {
        xxl: {
          row: 1,
          col: 2,
        },
        lg: {
          row: 3,
          col: 1,
        },
        md: {
          row: 4,
          col: 1,
        },
      },
    },
    {
      id: 'learn-bit-react.ecommerce/ui/header@1.0.12',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/header.jpg',
        description: 'A header component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/ecommerce/ui/header',
      },
      row: 1,
      col: 3,
      sizes: {
        xxl: {
          row: 1,
          col: 3,
        },
        lg: {
          row: 2,
          col: 4,
        },
        md: {
          row: 3,
          col: 2,
        },
      },
    },
    {
      id: 'learn-bit-react.shoe-store/ui/pages/home@0.0.3',
      dependencies: [
        'learn-bit-react.ecommerce/ui/header@1.0.12',
        'learn-bit-react.shoe-store/ui/shoes/shoes-card-grid@1.0.16',
        {
          id: 'learn-bit-react.image/image',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/homepage.jpg',
        description: 'A page component for rending contents of the home page',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/shoe-store/ui/pages/home',
      },
      row: 1,
      col: 4,
      sizes: {
        xxl: {
          row: 1,
          col: 4,
        },
        lg: {
          row: 2,
          col: 3,
        },
        md: {
          row: 2,
          col: 2,
        },
      },
    },
    {
      id: 'learn-bit-react.ecommerce/ui/product/currency@0.0.1',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/currency.jpg',
        description: 'A currency component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/ecommerce/ui/product/currency',
      },
      row: 2,
      col: 1,
      sizes: {
        xxl: {
          row: 2,
          col: 1,
        },
        lg: {
          row: 3,
          col: 2,
        },
        md: {
          row: 5,
          col: 2,
        },
      },
    },
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card@1.0.15',
      dependencies: [
        'learn-bit-react.shoe-store/entity/shoes@1.0.6',
        'learn-bit-react.ecommerce/ui/product/currency@0.0.1',
        {
          id: 'learn-bit-react.base-ui/ui/button@2.0.3',
          edge: {
            start: 'top',
            end: 'bottom',
          },
        },
      ],
      payload: {
        description: 'A product card for shoes',
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/card.jpg',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/shoe-store/ui/shoes/shoes-card',
      },
      row: 2,
      col: 2,
      sizes: {
        xxl: {
          row: 2,
          col: 2,
        },
        lg: {
          row: 3,
          col: 3,
        },
        md: {
          row: 4,
          col: 2,
        },
      },
    },
    {
      id: 'learn-bit-react.shoe-store/entity/shoes@1.0.6',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/nodejs.jpg',
        description: 'A shoes data structure',
        envIcon: 'https://static.bit.dev/brands/logo-node.svg',
        href: 'https://bit.dev/learn-bit-react/shoe-store/entity/shoes',
      },
      row: 2,
      col: 3,
      sizes: {
        xxl: {
          row: 2,
          col: 3,
        },
        lg: {
          row: 3,
          col: 4,
        },
        md: {
          row: 5,
          col: 1,
        },
      },
    },
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card-grid@1.0.16',
      dependencies: [
        {
          id: 'learn-bit-react.image/image',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/card-grid.jpg',
        description: 'A card grid for the product cards for shoes',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
        href: 'https://bit.dev/learn-bit-react/shoe-store/ui/shoes/shoes-card-grid',
      },
      row: 2,
      col: 4,
      sizes: {
        xxl: {
          row: 2,
          col: 4,
        },
        lg: {
          row: 2,
          col: 2,
        },
        md: {
          row: 2,
          col: 1,
        },
      },
    },
  ]);
};
