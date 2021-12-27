import React, { ReactNode } from 'react';
import { useComponentSearch } from '@teambit/components.discovery.hooks.use-component-search';

export type ComponentSearchProps = {
  /**
   * query string to use with the search.
   */
  queryString: string;

  filters: ComponentFilter[];
};

/**
 * refactor to Discovery's component filter.
 */
export type ComponentFilter = {
  
};

export function ComponentSearch({ children }: ComponentSearchProps) {
  const results = useComponentSearch();
  return <div>{children}</div>;
}
