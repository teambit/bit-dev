import { ReactNode } from 'react';
import { useQuery } from '@teambit/graphql.hooks.use-query';
// import { SEARCH_QUERY } from '@teambit/discovery.search-query';

export type UseComponentSearchProps = {
  /**
   * query string.
   */
  queryString?: string;

  // filters: ComponentFilter[];
};

export function useComponentSearch({ queryString }: UseComponentSearchProps) {
  // const { res } = useQuery(SEARCH_QUERY, {

  // });
}
