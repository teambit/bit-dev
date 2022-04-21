import { useMemo } from 'react';
import { useQuery } from '@teambit/graphql.hooks.use-query';
import { GET_SCOPE } from './code.gql';

export function useScope(id: string) {
  const { data } = useQuery(GET_SCOPE, {
    variables: {
      id: id,
    },
  });

  const scope = useMemo(() => {
    return data?.getScopeAPIs?.graphql;
  }, [data]);

  return scope;
}
