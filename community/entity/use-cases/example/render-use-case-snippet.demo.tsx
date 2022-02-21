import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import style from './style.module.scss';

const content = `import React from 'react';
import { UseCasesCardGrid } from '@teambit/community.ui.use-cases.use-cases-card-grid';
import { useCases } from '@teambit/community.entity.use-cases';

export const RenderingUseCasedMockData = () => (
  <UseCasesCardGrid useCases={useCases} />
);`;

export const RenderUseCaseCodeSnippet = () => (
  <CodeSnippet className={style.dimensions}>{content}</CodeSnippet>
);
