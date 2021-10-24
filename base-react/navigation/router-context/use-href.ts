import { useNativeHref } from './native-use-href';
import { useRouter } from './use-router';

/** context aware href generator */
export function useHref(location: string | Location) {
  const { useHref = useNativeHref } = useRouter();

  return useHref(location);
}
