import { ComponentGraph } from './component-graph'
export const componentsMock = () => { 
  return ComponentGraph.fromComponentList([
    {
        id: 'teambit.community/ui/hero@1.0.0',
        dependencies: [
          'teambit.community/ui/heading',
        ],
        position: 'bottom',
        // edgePositions: [],
        // row: 2,
        // col: 1,
        preview: 'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70'
      },
      {
        id: 'teambit.community/ui/heading@1.0.0',
        dependencies: [
          'teambit.community/ui/subtitle',
        ],
        preview: 'https://static.bit.dev/brands/logo-nodejs.svg'
      },
      {
        id: 'teambit.community/ui/subtitle@1.0.0',
        dependencies: ['teambit.design/ui/button'],
        position: 'bottom',
        preview: 'https://static.bit.dev/brands/logo-angular.svg'
      },
      {
        id: 'teambit.design/ui/button@1.0.0',
        dependencies: ['teambit.community/ui/heading'],
        position: 'top',
        preview: 'https://static.bit.dev/brands/logo-react.svg'
      },
      {
        id: 'teambit.community/ui/hero@1.0.0',
        dependencies: [
          'teambit.community/ui/heading',
        ],
        position: 'bottom',
        // row: 2,
        // col: 1,
        preview: 'https://bitsrc.imgix.net/8906f31bf4ae987413d3fdc1171be928f6b16e59.png?fit=scale&w=70&h=70'
      },
      {
        id: 'teambit.community/ui/heading@1.0.0',
        dependencies: [
          'teambit.community/ui/subtitle',
        ],
        preview: 'https://static.bit.dev/brands/logo-nodejs.svg'
      },
      {
        id: 'teambit.community/ui/subtitle@1.0.0',
        dependencies: ['teambit.design/ui/button'],
        position: 'top',
        preview: 'https://static.bit.dev/brands/logo-angular.svg'
      },
      {
        id: 'teambit.design/ui/button@1.0.0',
        dependencies: [],
        position: 'top',
        preview: 'https://static.bit.dev/brands/logo-react.svg'
      },
])}