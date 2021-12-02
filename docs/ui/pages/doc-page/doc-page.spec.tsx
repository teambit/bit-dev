import React from 'react';
import { render } from '@testing-library/react';
import { BasicDocPage } from './doc-page.composition';

it('should render with the correct text in the heading', () => {
  const { getByText } = render(<BasicDocPage />);
  const rendered = getByText('Create a new Workspace');

  expect(rendered).toBeTruthy();
});
it('should render with H1 element as the heading', () => {
  const { getByText } = render(<BasicDocPage />);
  const rendered = getByText('Create a new Workspace');

  expect(rendered.tagName).toBe('H1');
});
