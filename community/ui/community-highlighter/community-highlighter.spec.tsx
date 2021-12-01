import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommunityHighlighter } from './community-highlighter.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicCommunityHighlighter />);
  const rendered = getByText('hello from CommunityHighlighter');
  expect(rendered).toBeTruthy();
});
