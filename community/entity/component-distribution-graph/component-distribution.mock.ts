import { Direction } from '@teambit/community.entity.graph.grid-graph';
import { createComponentCardGraph } from './component-graph';

export const componentsMock = () => {
  return createComponentCardGraph([
    {
      id: 'teambit.base-ui/ui/button@1.0.1',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/botton.jpg',
        description: 'A Button component for buttons and elements that look like buttons',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
      id: 'teambit.ecommerce/ui/store-hero@1.0.0',
      dependencies: ['teambit.base-ui/ui/button@1.0.1'],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/hero.jpg',
        description: 'A hero component for the store',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
      id: 'teambit.ecommerce/ui/header@1.0.5',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/header.jpg',
        description: 'A header component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
      id: 'teambit.shoe-store/ui/pages/home@1.7.1',
      dependencies: [
        'teambit.ecommerce/ui/header@1.0.5',
        'teambit.shoe-store/ui/shoes/shoes-card-grid@1.1.2',
        {
          id: 'teambit.image/image',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/homepage.jpg',
        description: 'A page component for rending contents of the home page',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
      id: 'teambit.ecommerce/ui/product/currency@1.0.0',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/currency.jpg',
        description: 'A currency component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
      id: 'teambit.shoe-store/ui/shoes/shoes-card@1.1.6',
      dependencies: [
        'teambit.shoe-store/entity/shoes@1.3.4',
        'teambit.ecommerce/ui/product/currency@1.0.0',
        {
          id: 'teambit.base-ui/ui/button@1.0.1',
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
      id: 'teambit.shoe-store/entity/shoes@1.3.4',
      dependencies: [],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/nodejs.jpg',
        description: 'A shoes data structure',
        envIcon: 'https://static.bit.dev/brands/logo-node.svg',
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
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid@1.1.2',
      dependencies: [
        {
          id: 'teambit.image/image',
          edge: {
            direction: Direction.TAIL,
          },
        },
      ],
      payload: {
        preview: 'https://storage.googleapis.com/static.bit.dev/Community/app-components/card-grid.jpg',
        description: 'A card grid for the product cards for shoes',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
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
