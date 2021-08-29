import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentNav } from './content-nav.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicContentNav />);
  const rendered = getByText('hello from ContentNav');
  expect(rendered).toBeTruthy();
});
