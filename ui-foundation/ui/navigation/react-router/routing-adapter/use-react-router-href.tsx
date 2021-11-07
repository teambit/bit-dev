import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { parsePath } from 'history';
import { Location } from '@teambit/base-react.navigation.router-context';

export function useReactRouterHref(location: string | Partial<Location>) {
  const history = useHistory();

  const locationObj = useMemo(() => (typeof location === 'string' ? parsePath(location) : location), [location]);

  return history.createHref(locationObj);
}
