import React, { ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';

export type DocPageProps = {
  /**
   * title of the docs page.
   */
  title: string;

  /**
   * a text to be rendered in the component.
   */
  children: ReactNode
};

export function DocPage({ title, children }: DocPageProps) {
  return (
    <Page title={title}>
      <MDXLayout>
        {children}
      </MDXLayout>
    </Page>
  );
}
