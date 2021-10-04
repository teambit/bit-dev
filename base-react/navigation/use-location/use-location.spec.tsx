import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseLocation } from './use-location.composition';

it('should render with json data inside', () => {
  const { container } = render(<BasicUseLocation />);
  const rendered = container.querySelector('div');
  expect(rendered).toBeTruthy();
});
