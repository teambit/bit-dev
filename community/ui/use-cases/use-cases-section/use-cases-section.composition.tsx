import React from 'react';
import { useCases } from '@teambit/community.entity.use-cases';
import { UseCasesSection } from './use-cases-section';

export const BasicUseCasesSection = () => (
  <UseCasesSection useCases={useCases} title="These are no longer a challenge" href="/" linkText="See more use cases" />
);
