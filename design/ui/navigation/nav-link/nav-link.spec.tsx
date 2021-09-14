import React from 'react';
import { render } from '@testing-library/react';
import { BasicNavLink } from './nav-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNavLink />);
  const rendered = getByText('hello from NavLink');
  expect(rendered).toBeTruthy();
});
