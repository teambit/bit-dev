import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BasicTableOfContent, TableOfContentWithTitle } from './table-of-content.composition';

it('should render with the correctly', async () => {
  const { getByTestId } = render(<BasicTableOfContent />);

  await waitFor(() => {
    const rendered = getByTestId('basic-table');
    expect(rendered).toBeTruthy();
  });
});

it('should render with the title', async () => {
  const { getByText } = render(<TableOfContentWithTitle />);

  await waitFor(() => {
    const rendered = getByText('table of content');
    expect(rendered).toBeTruthy();
  });
});
