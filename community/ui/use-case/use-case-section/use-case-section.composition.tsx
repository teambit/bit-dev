import React from 'react';
import { UseCaseSection } from './use-case-section';
import { useCases } from '@teambit/community.entity.use-cases';

export const BasicUseCaseSection = () => (
  <UseCaseSection
    useCases={useCases}
    title="These are no longer a challenge"
    href="/"
    linkText="See more use cases"
  />
);
