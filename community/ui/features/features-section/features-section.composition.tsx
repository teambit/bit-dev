import React from 'react';
import { FeaturesSection } from './features-section';
import { features } from '@teambit/community.entity.features';

export const BasicFeaturesSection = () => (
  <FeaturesSection features={features} title="Build better. Build scalable." />
);
