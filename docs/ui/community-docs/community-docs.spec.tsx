import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommunityDocs } from './community-docs.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCommunityDocs />);
  const rendered = getByText('hello from CommunityDocs');
  expect(rendered).toBeTruthy();
});
