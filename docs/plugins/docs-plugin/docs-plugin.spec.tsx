import React from 'react';
import { render } from '@testing-library/react';
// import { BasicDocsPlugin } from './docs-plugin.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicDocsPlugin />);
  const rendered = getByText('hello from DocsPlugin');
  expect(rendered).toBeTruthy();
});
