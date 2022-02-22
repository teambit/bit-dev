import React from 'react';
import { render } from '@testing-library/react';
import { BasicBrowser } from './browser.composition';

it('should render', () => {
  const { container } = render(<BasicBrowser />);
  expect(container).toBeInTheDocument();
});
