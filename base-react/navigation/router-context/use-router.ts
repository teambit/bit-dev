import { useContext } from 'react';
import { RouterContext } from './router-context';

export function useRouter() {
  const routerContext = useContext(RouterContext);
  return routerContext;
}