import { ComponentGraph } from './component-graph';
export const componentsMock = () => {
  return ComponentGraph.fromComponentList([
    {
      id: 'base-ui/ui/button',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
      version: '2.0.1',
      description: 'A Button component for buttons and elements that look like buttons',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'ecommerce/ui/store-hero',
      dependencies: ['base-ui/ui/button'],
      position: 'bottom',
      preview: 'https://static.bit.dev/brands/logo-angular.svg',
      version: '0.0.11',
      description: 'A hero component for the store',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'ecommerce/ui/header',
      dependencies: [],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
      version: '1.0.12',
      description: 'A header component',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'shoe-store/ui/pages/home',
      dependencies: [
        'ecommerce/ui/header',
        'shoe-store/ui/shoes/shoes-card-grid',
        'shoe-store/home-page-to-store-hero' // connecting node to create the curved edge effect
      ],
      position: 'bottom',
      edges: {
        'shoe-store/home-page-to-store-hero': {
          showHead: false,
          startAnchor: 'top',
          endAnchor: 'right'
        }
      },
      preview:
        'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
      version: '1.0.16',
      description: 'A page component for rending contents of the home page',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'ecommerce/ui/product/currency',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
      version: '0.0.1',
      description: 'A currency component',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'shoe-store/ui/shoes/shoes-card',
      dependencies: [
        'shoe-store/entity/shoes',
        'ecommerce/ui/product/price',
        'base-ui/ui/button'
      ],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg'
      version: '1.0.11',
      description: 'A product card for shoes',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    },
    {
      id: 'shoe-store/entity/shoes',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-angular.svg'
      version: '1.0.4',
      description: 'A shoes data structure',
      envIcon: 'https://static.bit.dev/brands/logo-node.svg'
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
      version: '1.0.11',
      description: 'A card grid for the product cards for shoes',
      envIcon: 'https://static.bit.dev/brands/logo-react.svg'
    }
  ]);
};
