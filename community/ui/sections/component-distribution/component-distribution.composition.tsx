import React from 'react';
import { ComponentDistributionSection } from './component-distribution';
import { componentsMock } from '@teambit/community.entity.compnent-distribution-graph';

export const BasicComponentDistributionSection = () => {
  const components = componentsMock().components;
  return <ComponentDistributionSection title="title" components={components} />;
};
