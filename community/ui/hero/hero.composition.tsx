import React from 'react';
import { mockHero } from '@teambit/community.entity.hero-graph';
import { Hero } from './hero';

export const BasicHero = () => (
  <Hero
    title="Build anything in components"
    teaser="Forget about monolithic apps, start building component-driven software. Bit helps developers build better software with independent components and compose them into infinite features and apps."
    heroGraph={mockHero()}
  />
);
