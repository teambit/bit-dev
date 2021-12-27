import React from 'react';
import { render } from '@testing-library/react';
import { BasicWikiQuickStart } from './wiki-quick-start.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicWikiQuickStart />);
  const rendered = getByText('hello from WikiQuickStart');
  expect(rendered).toBeTruthy();
});
