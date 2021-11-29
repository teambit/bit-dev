import React from 'react';
import { render } from '@testing-library/react';
import { BasicDocs } from './docs.composition';

it('should render with the correct text in the sidebar', () => {
  const { getByText } = render(<BasicDocs test />);
  const rendered = getByText('Quick Start');

  expect(rendered).toBeTruthy();
});
