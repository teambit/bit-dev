import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlugins } from './plugins.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicPlugins />);
  const rendered = getByText('hello from Plugins');
  expect(rendered).toBeTruthy();
});
