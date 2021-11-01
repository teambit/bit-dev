import { useRouter, Location } from '@teambit/base-react.navigation.router-context';
import { useNativeHref } from './native-use-href';

/** context aware href generator */
export function useHref(location: string | Partial<Location>) {
  const router = useRouter();
  const useActualHref = router.useHref || useNativeHref;

  return useActualHref(location);
}
