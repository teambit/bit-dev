import { useEffect, useRef, RefObject } from 'react';
import { useLocation } from '@teambit/base-react.navigation.link';

/** restores scroll when moving between pages */
export function ScrollToTop() {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // skip initial page load
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return null;
}
