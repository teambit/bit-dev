import React from 'react';
import { UseCasesSection } from './use-cases-section';
import { UseCases } from '@teambit/community.entity.use-cases';

export const BasicUseCasesSection = () => (
  <UseCasesSection
    useCases={useCasess}
    title="These are no longer a challenge"
    href="/"
    linkText="See more use cases"
  />
);
