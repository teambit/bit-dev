import React from 'react';
import { render } from '@testing-library/react';
import { BasicTableOfContent } from './table-of-content.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTableOfContent />);
  const rendered = getByText('hello from TableOfContent');
  expect(rendered).toBeTruthy();
});
