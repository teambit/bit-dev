import React from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import type { DocsProps, ContentCategory } from '@teambit/docs.ui.docs';
import { NextPagePlugin } from '@teambit/docs.plugins.next-page';
import { TableOfContentPlugin } from '@teambit/docs.plugins.docs.table-of-contents';
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
  const routesCategories: ContentCategory[] = [
    { title: 'GETTING STARTED', routes: gettingStartedDocsRoutes, className: styles.gettingStarted },
    { title: 'LEARN', routes: learnDocsRoutes },
  ];
  return (
    <Docs
      {...rest}
      primaryLinks={primaryRoutes}
      contents={routesCategories}
      baseUrl={baseUrl}
      plugins={[new NextPagePlugin(), new TableOfContentPlugin()]}
      // contribution={<ContributingDocs/>}
    />
  );
}
