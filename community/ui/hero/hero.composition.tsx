import React from 'react';
import { mockHero } from '@teambit/community.entity.hero-graph';
import { Hero } from './hero';

export const BasicHero = () => (
  <Hero
    heroGraph={mockHero()}
  />
);
