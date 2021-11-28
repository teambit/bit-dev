import React from 'react';
import { DocsPlugin } from '@teambit/docs.ui.docs';
import { Route } from '@teambit/docs.entities.docs-routes';
import { NextPage } from '@teambit/community.ui.cards.next-page';

export type NextPageProps = {
  nextRoute: Route | undefined;
};

export const NextPagePlugin: DocsPlugin<NextPageProps> = {
  page: {
    bottom: [
      ({ nextRoute }: NextPageProps) => {
        if (!nextRoute) return <div />;
        return <NextPage title={nextRoute.title} description={nextRoute.description} href={nextRoute.absPath} />;
      },
    ],
  },

  enrichContent(currentRoute: Route, routes: Route[], key: number): NextPageProps {
    const next = routes[key + 1] ? routes[key + 1] : undefined;
    if (!next) return { nextRoute: undefined };
    return { nextRoute: next };
  },
};
