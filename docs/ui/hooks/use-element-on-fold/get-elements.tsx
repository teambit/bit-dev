import React from 'react';

const defaultSelectors = 'h1, h2, h3, h4, h5, h6, h7, h8';

export type GetElements = {
  ref?: React.MutableRefObject<HTMLElement>;
  selectors?: string;
};

export function getElements({ ref, selectors = defaultSelectors }: GetElements): Element[] {
  const sanitizedSelectors = isSelectorValid(selectors);
  const elements = ref
    ? ref?.current?.querySelectorAll(sanitizedSelectors)
    : document.querySelectorAll(sanitizedSelectors);
  return elements ? Array.from(elements) : [];
}

const isSelectorValid = (selector) => {
  try {
    document.createDocumentFragment().querySelector(selector);
  } catch {
    return undefined;
  }
  return selector;
};
