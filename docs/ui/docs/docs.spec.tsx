import React from 'react';
import { render } from '@testing-library/react';
import { BasicDocs } from './docs.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDocs />);
  const rendered = getByText('hello from Docs');
  expect(rendered).toBeTruthy();
});
