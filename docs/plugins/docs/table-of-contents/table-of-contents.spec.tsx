import React from 'react';
import { render } from '@testing-library/react';
import { BasicTableOfContents } from './table-of-contents.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTableOfContents />);
  const rendered = getByText('hello from TableOfContents');
  expect(rendered).toBeTruthy();
});
