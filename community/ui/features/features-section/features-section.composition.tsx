import React from 'react';
import { features } from '@teambit/community.entity.features';
import { FeaturesSection } from './features-section';

export const BasicFeaturesSection = () => {
  return <FeaturesSection features={features} title="Build better. Build scalable." />;
};
