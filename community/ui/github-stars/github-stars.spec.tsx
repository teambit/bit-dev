import React from 'react';
import { render } from '@testing-library/react';
import { BasicGithubStars } from './github-stars.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGithubStars />);
  const rendered = getByText('teambit/bit');
  expect(rendered).toBeTruthy();
});
