export const usingMock = `import React from 'react';
import { UseCasesCardGrid } from '@teambit/community.ui.use-cases.use-cases-card-grid';
import { useCases } from '@teambit/community.entity.use-cases';

export const RenderingUseCasedMockData = () => (
  <UseCasesCardGrid useCases={useCases} />
);`;

