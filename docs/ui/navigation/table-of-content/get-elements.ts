import React from 'react';

const defaultSelectors = 'h1, h2, h3, h4, h5, h6, h7, h8';

export type GetElements = {
  ref?: React.MutableRefObject<HTMLElement>;
  selectors?: string;
};

export function getElements({ ref, selectors = defaultSelectors }): HTMLElement[] {
  const elements = ref ? ref?.current?.querySelectorAll(selectors) : document.querySelectorAll(selectors);
  return elements ? Array.from(elements) : [];
}
