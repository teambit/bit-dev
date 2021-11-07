import { useRouter, Location } from '@teambit/base-react.navigation.router-context';

export function useLocation(): Location | undefined {
  const router = useRouter();
  const actualUseLocation = router.useLocation;

  if (!actualUseLocation) return window?.location;

  return actualUseLocation();
}
