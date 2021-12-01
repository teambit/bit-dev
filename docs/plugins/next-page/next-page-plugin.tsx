import React from 'react';
import { DocsPlugin, useDocs } from '@teambit/docs.ui.docs';
import { useDocPage } from '@teambit/docs.ui.pages.doc-page';
import { Route } from '@teambit/docs.entities.docs-routes';
import { NextPage } from '@teambit/community.ui.cards.next-page';

export type NextPageProps = {
  nextRoute: Route | undefined;
};

export type BottomPluginProps = {
  show?: boolean;
};

export class NextPagePlugin implements DocsPlugin<BottomPluginProps> {
  constructor(readonly hideDescription?: boolean) {}

  name = NextPagePlugin.name;

  page = {
    bottom: [
      ({ show }: BottomPluginProps) => {
        const docs = useDocs();
        const docPage = useDocPage();
        if (!docPage.index) return <div />;
        const next = docs.routes[docPage.index + 1] ? docs.routes[docPage.index + 1] : undefined;
        if (!next || show === false) return <div />;

        return (
          <NextPage title={next.title} description={this.hideDescription ? '' : next.description} href={next.absPath} />
        );
      },
    ],
  };
}
