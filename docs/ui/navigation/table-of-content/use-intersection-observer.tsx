export const useIntersectionObserver = (elementsList: HTMLElement[], cb) => {
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
        cb(visibleHeadings[0]?.target?.innerText);
      }
      // If there is more than one visible heading,
      // choose the one that is closest to the top of the page
    } else if (visibleHeadings.length > 1) {
      const sortedVisibleHeadings = visibleHeadings.sort((a, b) =>
        sortElementsById(getIndexFromId(a.target.id), getIndexFromId(b.target.id))
      );
      if (sortedVisibleHeadings[0] instanceof HTMLElement) {
        cb(sortedVisibleHeadings[0]?.innerText);
      }
    }
  };
  const observer = new IntersectionObserver(handleIntersection, {
    // root: document.getElementById('content'),
    // threshold: [1],
    rootMargin: '0px 0px -90% 0px',
  });
  elementsList.forEach((element) => {
    observer.observe(element);
  });

  return observer;
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
