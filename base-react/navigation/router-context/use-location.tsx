import type { Location } from './router-context';
import { useRouter } from './use-router';

export function useLocation(): Location | undefined {
  const router = useRouter();
  const actualUseLocation = router.useLocation;

  if (!actualUseLocation) return typeof window !== 'undefined' ? window.location : undefined;

  return actualUseLocation();
}
