import React from 'react';
import { render } from '@testing-library/react';
import { BasicFrameworkSelector } from './framework-selector.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFrameworkSelector />);
  const rendered = getByText('hello from FrameworkSelector');
  expect(rendered).toBeTruthy();
});
