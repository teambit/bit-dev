import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BooksPage } from '@learn-bit-react/data-fetching.pages.books-page';
import { QuickStart } from '@teambit/bit.quick-start';
import Intro from './intro.mdx';
import BeforeThinking from './before-thinking.mdx';

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
    {
      id: 'learn-bit-react.data-fetching/pages/books-page',
      intro: (
        <div>
          As you start to build with components, remember - choosing the first component is an important step in the
          process. When choosing the first component, focus on choosing the most tangible component, the one you can
          ideally use now. In this case, we start with building the data-fetching page. This will have the button we
          click to get the data, and it will render the books list once the data is fetched - and that is the component
          we can use right now. If we started with the data-fetching component, where would we put the data once we had
          it? Therefore we start with the page.
        </div>
      ),
    },
    {
      id: 'learn-bit-react.data-fetching/ui/hooks/use-books',
      intro: (
        <div>
          Next we start to collect the components that will fetch the data. <br />
          <br />
          The hook is used for managing the API calls:
          <p>
            {' '}
            * getBooks - the function for getting books from an API
            <br /> * books - the result of the books API call <br /> * isLoading - true while the getBooks function is
            waiting to get data
            <br /> * error - holds any errors returned by the API call
          </p>
        </div>
      ),
    },
    {
      id: 'learn-bit-react.data-fetching/ui/book',
      intro: (
        <div>
          Next up - we take care of the UI for the data we will fetch - this is a component that renders the book based
          on the model provided and adds the size of the book`s title.
        </div>
      ),
    },
    {
      id: 'learn-bit-react.data-fetching/ui/book-list',
      intro: (
        <div>
          Time to fetch the data! This component uses the hook component to fetch data from the API and returns a list
          of books if books are available.
        </div>
      ),
    },
  ];

  return (
    <QuickStart
      intro={<Intro />}
      beforeThinking={<BeforeThinking />}
      name="data-fetching"
      id={id}
      components={components}
      mainComponent={<BooksPage />}
    >
      {children}
    </QuickStart>
  );
}
