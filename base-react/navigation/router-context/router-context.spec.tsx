import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './router-context.composition';

it('should render with the correct link', () => {
  const { getByText } = render(<BasicLink />);
  const rendered = getByText('bit.dev');
  expect(rendered).toBeTruthy();
});
