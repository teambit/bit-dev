import { useRouter } from '@teambit/base-react.navigation.router-context';

export function useLocation(): Location|undefined {
  const { useLocation } = useRouter();
  if (!useLocation) return window?.location;
  return useLocation();
}
