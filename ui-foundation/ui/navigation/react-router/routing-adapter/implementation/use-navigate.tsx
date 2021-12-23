import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Navigator } from '@teambit/base-react.navigation.router-context';

export function useNavigate(): Navigator {
  const history = useHistory();

  const navigator: Navigator = useMemo(
    () => (to: string | number, options?: { replace?: boolean }) => {
      if (typeof to === 'number') {
        return history.go(to);
      } else if (options?.replace) {
        return history.replace(to);
      } else {
        return history.push(to);
      }
    },
    [history]
  );

  return navigator;
}
