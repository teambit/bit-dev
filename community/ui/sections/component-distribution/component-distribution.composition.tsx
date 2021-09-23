import React from 'react';
import { ComponentDistributionSection } from './component-distribution';
import { componentsMock } from './component-distribution.mock';

export const BasicComponentDistributionSection = () => {
  const components = componentsMock().components;
  return <ComponentDistributionSection title="title" components={components} />;
};
