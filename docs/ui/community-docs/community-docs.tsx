import React from 'react';
import { Docs, DocsProps } from '@teambit/docs.ui.docs';
import { ContributingDocs } from '@teambit/docs.content.contributing-docs';
import { docsRoutes } from './docs-routes';
import { primaryRoutes } from './primary-routes';

export type CommunityDocsProps = {
  /**
   * base url to use for docs section.
   */
  baseUrl?: string
} & Omit<DocsProps, 'routes'>;

export function CommunityDocs({ baseUrl = '/docs', ...rest }: CommunityDocsProps) {
  return (
    <Docs 
      {...rest} 
      routes={docsRoutes} 
      primaryLinks={primaryRoutes} 
      baseUrl={baseUrl} 
      // contribution={<ContributingDocs/>} 
    />
  );
}
