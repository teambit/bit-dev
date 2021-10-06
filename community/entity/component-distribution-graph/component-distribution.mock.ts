import { createComponentCardGraph } from './component-graph';

export const componentsMock = () => {
  return createComponentCardGraph([
    {
      id: 'teambit.base-ui/ui/button',
      dependencies: [],
      position: 'top',
      payload: {
        preview: 'https://static.bit.dev/brands/logo-react.svg',
        description:
          'A Button component for buttons and elements that look like buttons',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.ecommerce/ui/store-hero@1.0.0',
      dependencies: ['teambit.base-ui/ui/button'],
      position: 'bottom',
      payload: {
        preview: 'https://static.bit.dev/brands/logo-angular.svg',
        description: 'A hero component for the store',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.ecommerce/ui/header',
      dependencies: [],
      payload: {
        preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
        description: 'A header component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.shoe-store/ui/pages/home',
      dependencies: [
        'teambit.ecommerce/ui/header',
        'teambit.shoe-store/ui/shoes/shoes-card-grid',
      ],
      position: 'bottom',
      payload: {
        preview:
          'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
        description: 'A page component for rending contents of the home page',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.ecommerce/ui/product/currency',
      dependencies: [],
      position: 'top',
      payload: {
        preview: 'https://static.bit.dev/brands/logo-react.svg',
        description: 'A currency component',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card',
      dependencies: [
        'teambit.shoe-store/entity/shoes',
        'teambit.ecommerce/ui/product/currency',
        'teambit.base-ui/ui/button',
      ],
      payload: {
        description: 'A product card for shoes',

        preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
    {
      id: 'teambit.shoe-store/entity/shoes',
      dependencies: [],
      position: 'top',
      payload: {
        preview: 'https://static.bit.dev/brands/logo-angular.svg',
        description: 'A shoes data structure',
        envIcon: 'https://static.bit.dev/brands/logo-node.svg',
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      dependencies: [],
      position: 'bottom',
      payload: {
        preview:
          'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
        description: 'A card grid for the product cards for shoes',
        envIcon: 'https://static.bit.dev/brands/logo-react.svg',
      },
    },
  ]);
};
