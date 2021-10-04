import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogo } from './logo.composition';

it('should render with an img', () => {
  const { container } = render(<BasicLogo />);
  const rendered = container.querySelector('img');
  expect(rendered).toBeTruthy();
});
