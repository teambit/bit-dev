import React from 'react';
import { render } from '@testing-library/react';
import { BasicGithubStars } from './github-stars.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicGithubStars />);
  const rendered = getByText('hello from GithubStars');
  expect(rendered).toBeTruthy();
});
