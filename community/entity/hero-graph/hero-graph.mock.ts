import { HeroGraph } from './hero-graph';

export function mockHero() {
  return HeroGraph.fromPlainBubbles([
    {
      id: 'teambit.community/ui/hero',
      dependencies: [
        'teambit.community/ui/heading',
        'teambit.community/ui/subtitle',
        'teambit.design/ui/button'
      ],
      position: 'start'
    }
  ]);  
} 
