import React from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import type { DocsProps, CategoryRoutes } from '@teambit/docs.ui.docs';
// import { ContributingDocs } from '@teambit/docs.content.contributing-docs';
import { primaryRoutes } from './primary-routes';
import { gettingStartedDocsRoutes } from './getting-started-routes';
import { learndDocsRoutes } from './learn-routes';

export type CommunityDocsProps = {
  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
} & DocsProps;

export function CommunityDocs({ baseUrl = '/docs', ...rest }: CommunityDocsProps) {
  const routesCategories: CategoryRoutes[] = [
    { title: 'GETTING STARTED', routes: gettingStartedDocsRoutes },
    { title: 'LEARN', routes: learndDocsRoutes },
  ];
  return (
    <Docs
      {...rest}
      primaryLinks={primaryRoutes}
      routesCategories={routesCategories}
      baseUrl={baseUrl}
      // contribution={<ContributingDocs/>}
    />
  );
}
