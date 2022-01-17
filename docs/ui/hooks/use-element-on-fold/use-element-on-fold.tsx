import { useEffect, useState, useReducer, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { getElements } from './get-elements';

export type elementsOnFoldOptions = {
  disabled?: boolean;
  /* time to wait between dom updates, before refreshing the list of elements. There is no debounce on the active element */
  debounceUpdates?: number;
};

export const useElementOnFold = (
  ref?: React.MutableRefObject<HTMLElement>,
  selectors?: string,
  { disabled, debounceUpdates = 300 }: elementsOnFoldOptions = {}
) => {
  const [idx, update] = useReducer((x) => x + 1, 0);
  const debouncedUpdate = useDebouncedCallback(update, debounceUpdates);

  const elements = useMemo(
    () => (disabled ? [] : getElements({ ref, selectors })),
    [ref?.current, selectors, disabled, idx]
  );
  const [activeElement, setActive] = useState<HTMLElement | undefined>(undefined);

  // recalculate after mounting
  useEffect(() => debouncedUpdate(), []);

  useEffect(() => {
    if (disabled) return undefined;
    // IntersectionObserver will only run when browser has support
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Get all headings that are currently visible on the page
      const visibleElements: IntersectionObserverEntry[] = entries.filter((el) => el.isIntersecting);

      if (visibleElements.length === 0) return;

      // intersection observer sorts entries by their location on the page
      // so, first element should be the closest to the top of the page
      if (visibleElements[0]?.target instanceof HTMLElement) {
        setActive(visibleElements[0]?.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { rootMargin: '0px 0px -90px 0px' });
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [elements, disabled]);

  // recalculate when detecting dom changes
  useEffect(() => {
    const targetNode = ref?.current;
    if (!(targetNode instanceof HTMLElement)) return () => {};
    if (typeof MutationObserver === undefined) return () => {};

    const config = { attributes: false, childList: true, characterData: false };
    const observer = new MutationObserver(() => {
      debouncedUpdate();
    });

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [ref?.current]);

  return { activeElement, elements, update: debouncedUpdate };
};
