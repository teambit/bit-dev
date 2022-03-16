import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BooksPage } from '@learn-bit-react/data-fetching.pages.books-page';
import { QuickStart } from '@teambit/bit.quick-start';

export type DataFetchingQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DataFetchingQuickStart({ children }: DataFetchingQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('learn-bit-react.data-fetching/pages/books-page');
  const components = [
    // TODO: app showcasing a design system.
    'learn-bit-react.data-fetching/pages/books-page',
    'learn-bit-react.data-fetching/ui/hooks/use-books',
    'learn-bit-react.data-fetching/ui/book',
    'learn-bit-react.data-fetching/ui/book-list',
    'learn-bit-react.data-fetching/models/books',
  ];

  // const dashboard = Dashboard.__bit_component.id;
  return (
    <QuickStart name="data-fetching" id={id} components={components} mainComponent={<BooksPage />}>
      {children}
    </QuickStart>
  );
}
