import React from 'react';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';
import { Route } from '@teambit/docs.entities.docs-routes';
import { TableOfContent } from '@teambit/docs.ui.navigation.table-of-content';
import styles from './table-of-contents.module.scss';

const docSelectors = '.docs-heading h2, .docs-heading h3';

export type TableOfContentsPluginProps = {
  nextRoute: Route | undefined;
};

export type RightPluginProps = {
  show?: boolean;
  contentRef?: React.MutableRefObject<HTMLElement>;
};

export class TableOfContentsPlugin implements DocsPlugin<null, RightPluginProps> {
  constructor(readonly hideDescription?: boolean) {}

  name = TableOfContentsPlugin.name;

  RightTableOfContent = ({ show, contentRef }: RightPluginProps) => {
    if (show === false) return null;
    return (
      <TableOfContent
        className={styles.tableOfContent}
        rootRef={contentRef}
        title="on this page"
        selectors={docSelectors}
      />
    );
  };

  page = {
    right: [this.RightTableOfContent],
  };
}
