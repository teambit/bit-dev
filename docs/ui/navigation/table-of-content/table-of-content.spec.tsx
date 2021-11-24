import React from 'react';
import { render } from '@testing-library/react';
import { BasicTableOfContent, TableOfContentWithTitle } from './table-of-content.composition';

it('should render with the correctly', () => {
  const { getByTestId } = render(<BasicTableOfContent />);
  const rendered = getByTestId('basic-table');
  expect(rendered).toBeTruthy();
});

it('should render with the title', () => {
  const { getByText } = render(<TableOfContentWithTitle />);
  const rendered = getByText('table of content');
  expect(rendered).toBeTruthy();
});
