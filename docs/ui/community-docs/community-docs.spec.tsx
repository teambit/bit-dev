import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommunityDocs } from './community-docs.composition';

it('should render with the correct text in the sidebar', () => {
  const { getByText } = render(<BasicCommunityDocs test />);
  const rendered = getByText('Quick Start');

  expect(rendered).toBeTruthy();
});
