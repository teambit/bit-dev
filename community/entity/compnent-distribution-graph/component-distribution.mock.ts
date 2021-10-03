import { ComponentGraph } from './component-graph';
export const componentsMock = () => {
  return ComponentGraph.fromComponentList([
    {
      id: 'learn-bit-react.base-ui/ui/button',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
    },
    {
      id: 'learn-bit-react.ecommerce/ui/store-hero',
      dependencies: ['learn-bit-react.base-ui/ui/button'],
      position: 'bottom',
      preview: 'https://static.bit.dev/brands/logo-angular.svg',
    },
    {
      id: 'learn-bit-react.ecommerce/ui/header',
      dependencies: [],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    {
      id: 'learn-bit-react.shoe-store/ui/pages/home-page',
      dependencies: [
        'learn-bit-react.ecommerce/ui/header',
        'learn-bit-react.ecommerce/ui/store-hero',
        'learn-bit-react.shoe-store/ui/shoes/shoes-card-grid',
      ],
      position: 'bottom',
      edges: {
        'learn-bit-react.ecommerce/ui/store-hero': {
          startAnchor: {
            position: 'left',
            offset: {
              y: 135,
            },
          },
          path: 'smooth',
          curveness: 1,
          endAnchor: {
            position: 'right',
            offset: {
              y: 135,
            },
          },
        },
      },
      preview:
        'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
    },
    {
      id: 'learn-bit-react.ecommerce/ui/product/price',
      dependencies: [],
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-react.svg',
    },
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card',
      dependencies: [
        'learn-bit-react.shoe-store/entity/shoes',
        'learn-bit-react.ecommerce/ui/product/price',
        'learn-bit-react.base-ui/ui/button',
      ],
      preview: 'https://static.bit.dev/brands/logo-nodejs.svg',
    },
    {
      id: 'learn-bit-react.shoe-store/entity/shoes',
      dependencies: [],
      // edges: {
      //   'teambit.design/ui/buttons': {
      //     startAnchor: 'bottom',
      //     endAnchor: 'top',
      //   },
      // },
      position: 'top',
      preview: 'https://static.bit.dev/brands/logo-angular.svg',
    },
    {
      id: 'learn-bit-react.shoe-store/ui/shoes/shoes-card-grid',
      dependencies: ['learn-bit-react.shoe-store/ui/shoes/shoes-card'],
      position: 'bottom',
      preview:
        'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70',
    },
  ]);
};
