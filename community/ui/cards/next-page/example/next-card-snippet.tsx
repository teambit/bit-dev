import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import style from './style.module.scss';

const content = `import { NextPage } from '@teambit/community.ui.cards.next-page'
import { PageContent } from './page-content';

export const FindSafePlacePage = () => {
  return (
    <>
      <PageContent />
      <NextPage
        description="Turning on hazard lights"
        title="2. Turn on hazard lights"
        buttonText="Next step"
        href="#"
      />
    </>
  );
};`;

export const NextCardExampleSnippet = () => (
  <CodeSnippet className={style.dimensions}>{content}</CodeSnippet>
);
