import React from 'react';
import { render } from '@testing-library/react';
// import { BasicDocs } from './docs.composition';

it.skip('should render with the correct text in the sidebar', () => {
  const { getByText } = render(<div />);
  const rendered = getByText('Quick Start');

  expect(rendered).toBeTruthy();
});

it.skip('should not have H1 until the sidebar is clicked', () => {
  const { container } = render(<div />);
  const h1Element = container.querySelector('h1');

  expect(h1Element).toBeFalsy();
});
