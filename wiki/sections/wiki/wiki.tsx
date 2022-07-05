import React, { ReactNode } from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import { primaryRoutes, categories } from './wiki-contents';

export type WikiProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Wiki({ children }: WikiProps) {
  return (
    <Docs primaryLinks={primaryRoutes} contents={categories} baseUrl="/">
      {children}
    </Docs>
  );
}
