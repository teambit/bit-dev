import React from 'react';
// import { useComponentSearch } from '@teambit/components.discovery.hooks.use-component-search';

export type ComponentSearchProps = {
  /**
   * query string to use with the search.
   */
  queryString: string;

  // filters: ComponentFilter[];
};

export function ComponentSearch({ queryString }: ComponentSearchProps) {
  // const results = useComponentSearch();
  // return <div>{children}</div>;
  return <div>{queryString}</div>;
}
