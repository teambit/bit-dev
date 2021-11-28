import React from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import type { DocsProps, CategoryRoutes } from '@teambit/docs.ui.docs';
// import { ContributingDocs } from '@teambit/docs.content.contributing-docs';
import { primaryRoutes } from './primary-routes';
import { gettingStartedDocsRoutes } from './getting-started-routes';
import { learnDocsRoutes } from './learn-routes';
import styles from './community-docs.module.scss';

export type CommunityDocsProps = {
  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
} & DocsProps;

export function CommunityDocs({ baseUrl = '/docs', ...rest }: CommunityDocsProps) {
  const routesCategories: CategoryRoutes[] = [
    { title: 'GETTING STARTED', routes: gettingStartedDocsRoutes, className: styles.gettingStarted },
    { title: 'LEARN', routes: learnDocsRoutes },
  ];
  return (
    <Docs
      {...rest}
      primaryLinks={primaryRoutes}
      routesCategories={routesCategories}
      baseUrl={baseUrl}
      // plugins={[new TableOfContentsPlugin(), new NextPagePlugin()]}
      // contribution={<ContributingDocs/>}
    />
  );
}
