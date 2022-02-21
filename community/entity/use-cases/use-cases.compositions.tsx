import React from 'react';
import { UseCasesCardGrid } from '@teambit/community.ui.use-cases.use-cases-card-grid';
import { useCases } from './use-cases.mocks';

export const RenderUseCasesMock = () => {
  return <UseCasesCardGrid useCases={useCases} />;
};
