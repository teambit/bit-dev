import React from 'react';
import { render } from '@testing-library/react';
import { BasicBlogQuickStart } from './analytics-quick-start.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBlogQuickStart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
