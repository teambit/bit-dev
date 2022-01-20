import { useRouter } from './routing-provider';
import { Location } from './link.type';

export function useLocation(): Location | undefined {
  const router = useRouter();
  const actualUseLocation = router.useLocation || NativeUseLocation;

  return actualUseLocation();
}

function NativeUseLocation(): Location | undefined {
  if (typeof window === 'undefined') return undefined;
  return window.location;
}
