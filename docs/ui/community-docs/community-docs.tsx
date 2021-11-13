import React from 'react';
import { Docs, DocsProps } from '@teambit/docs.ui.docs';
// import { ContributingDocs } from '@teambit/docs.content.contributing-docs';
import { primaryRoutes } from './primary-routes';
import { gettingStartedDocsRoutes } from './getting-started-routes';
import { learndDocsRoutes } from './learn-routes';

export type CommunityDocsProps = {
  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
} & Omit<DocsProps, 'gettingStartedRoutes' | 'learndRoutes'>;

export function CommunityDocs({ baseUrl = '/docs', ...rest }: CommunityDocsProps) {
  return (
    <Docs
      {...rest}
      gettingStartedRoutes={gettingStartedDocsRoutes}
      learndRoutes={learndDocsRoutes}
      primaryLinks={primaryRoutes}
      baseUrl={baseUrl}
      // contribution={<ContributingDocs/>}
    />
  );
}
