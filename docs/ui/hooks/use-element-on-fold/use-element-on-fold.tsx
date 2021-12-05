import { useEffect, useState, useMemo } from 'react';
import { getElements } from './get-elements';

export const useElementOnFold = (ref?: React.MutableRefObject<HTMLElement>, selectors?: string, disabled?: boolean) => {
  const elements = useMemo(() => getElements({ ref, selectors }), [ref?.current]);
  const [activeElement, setActive] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    if (disabled) return undefined;
    // IntersectionObserver will only run if browser has support
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        // Get all headings that are currently visible on the page
        const visibleHeadings: IntersectionObserverEntry[] = [];

        entries.forEach((el: IntersectionObserverEntry) => {
          if (el.isIntersecting) visibleHeadings.push(el);
        });

        const getIndexFromId = (id) => entries.findIndex((heading) => heading.target.id === id);
        // If there is only one visible heading, this is our "active" heading
        if (visibleHeadings.length === 1) {
          if (visibleHeadings[0]?.target instanceof HTMLElement) {
            setActive(visibleHeadings[0]?.target);
          }
          // If there is more than one visible heading,
          // choose the one that is closest to the top of the page
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort((a, b) =>
            sortElementsById(getIndexFromId(a.target.id), getIndexFromId(b.target.id))
          );
          if (sortedVisibleHeadings[0] instanceof HTMLElement) {
            setActive(sortedVisibleHeadings[0]);
          }
        }
      };
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '0px 0px -90% 0px',
      });
      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => observer.disconnect();
    }

    return undefined;
  }, [elements]);

  return { activeElement, elements };
};

function sortElementsById(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
