import React from 'react';
import { render } from '@testing-library/react';
import { BasicDocsQuickStart } from './docs-quick-start.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicDocsQuickStart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
