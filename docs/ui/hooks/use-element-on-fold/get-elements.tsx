import React from 'react';

const defaultSelectors = 'h1, h2, h3, h4, h5, h6, h7, h8';

export type GetElements = {
  ref?: React.MutableRefObject<HTMLElement | null>;
  selectors?: string;
};

export function getElements({
  ref = { current: document?.body },
  selectors = defaultSelectors,
}: GetElements): Element[] {
  const sanitizedSelectors = isSelectorValid(selectors);
  const elements = ref.current?.querySelectorAll(sanitizedSelectors);
  return elements ? Array.from(elements) : [];
}

function isSelectorValid(selector) {
  try {
    document?.createDocumentFragment().querySelector(selector);
  } catch {
    console.error('selector is not valid - ', selector);
    return undefined;
  }
  return selector;
}
