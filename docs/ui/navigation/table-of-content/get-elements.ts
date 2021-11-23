import React from 'react';

export function getElements(ref: React.MutableRefObject<HTMLDivElement>, selectors: string) {
  const elements = ref?.current?.querySelectorAll(selectors);
  return Array.from(elements);
}
