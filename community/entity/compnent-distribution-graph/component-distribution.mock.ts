import { ComponentGraph } from './component-graph';
export const componentsMock = () => {
  return ComponentGraph.fromComponentList([
    {
      id: 'base-ui/ui/button',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
    },
    {
      id: 'ecommerce/ui/store-hero',
      dependencies: ['base-ui/ui/button'],
      position: 'bottom',
      preview: 'https://static.bit.dev/brands/logo-angular.svg',
    },
    {
      id: 'ecommerce/ui/header',
      dependencies: [],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    {
      id: 'shoe-store/ui/pages/home-page',
      dependencies: [
        'ecommerce/ui/header',
        'shoe-store/ui/shoes/shoes-card-grid',
        'shoe-store/home-page-to-store-hero' // conneting node to create the curved edge effect
      ],
      position: 'bottom',
      edges: {
        'shoe-store/home-page-to-store-hero': {
          showHead: false,
          startAnchor: 'top',
          endAnchor: 'right',
        },
      },
      preview:
        'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
    },
    {
      id: 'ecommerce/ui/product/price',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
    },
    {
      id: 'shoe-store/ui/shoes/shoes-card',
      dependencies: [
        'shoe-store/entity/shoes',
        'ecommerce/ui/product/price',
        'base-ui/ui/button',
      ],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    {
      id: 'shoe-store/entity/shoes',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-angular.svg',
    },
    {
      id: 'shoe-store/ui/shoes/shoes-card-grid',
      dependencies: ['shoe-store/shoes-card-grid-to-shoes-card'], // conneting node to create the curved edge effect
      position: 'bottom',
      edges: {
        'shoe-store/shoes-card-grid-to-shoes-card': {
          showHead: false
        }
      },
      preview:
        'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
    },
  ]);
};
