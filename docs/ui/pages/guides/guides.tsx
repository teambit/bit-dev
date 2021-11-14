import React from 'react';
import { Docs, DocsProps } from '@teambit/docs.ui.docs';
import { docsRoutes } from './guides-routes';

export type GuidesProps = {
  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
} & DocsProps;

export function Guides({ baseUrl = '/guides', ...rest }: GuidesProps) {
  return <Docs {...rest} routes={docsRoutes} baseUrl={baseUrl} />;
}
