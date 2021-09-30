import React from 'react';
import { Page as BasePage, PageProps as BasePageProps } from '@teambit/base-react.pages.page';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';

export type PageProps = {
  /**
   * a text to be rendered in the component.
   */
  title: string
} & BasePageProps;

export function Page({ title, children }: PageProps) {
  return (
    <BasePage title={`Bit / ${title}`}>
      <WideColumn>
      {children}
      </WideColumn>
    </BasePage>
  );
}
