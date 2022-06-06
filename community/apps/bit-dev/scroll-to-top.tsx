import { useEffect, useRef, RefObject } from 'react';
import { useLocation } from '@teambit/base-react.navigation.link';

/** restores scroll when moving between pages */
export function ScrollToTop({ target }: { target: RefObject<HTMLDivElement> }) {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    // skip initial page load
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    target.current?.scrollTo(0, 0);
  }, [location?.pathname]);

  return null;
}
