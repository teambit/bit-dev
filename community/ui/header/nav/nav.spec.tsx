import React from 'react';
import { render } from '@testing-library/react';
import { BasicNav } from './nav.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNav />);
  const rendered = getByText('hello from Nav');
  expect(rendered).toBeTruthy();
});
