import React from 'react';
import { render } from '@testing-library/react';
import { BasicQuickStart } from './quick-start.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicQuickStart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
