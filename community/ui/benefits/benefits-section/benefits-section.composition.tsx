import React from 'react';
import { BenefitsSection } from './benefits-section';
import { benefits } from '@teambit/community.entity.benefits';

export const BasicBenefitsSection = () => (
  <BenefitsSection benefits={benefits} title="Build better. Build scalable." />
);
