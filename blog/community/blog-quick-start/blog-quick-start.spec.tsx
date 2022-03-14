import React from 'react';
import { render } from '@testing-library/react';
import { BasicBlogQuickStart } from './blog-quick-start.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBlogQuickStart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
