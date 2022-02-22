import React from 'react';
import { render } from '@testing-library/react';
import { BasicGithubStars } from './github-stars.composition';

describe('Github Stars', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicGithubStars />);
    const rendered = getByText('teambit/bit');

    expect(rendered).toBeTruthy();
  });

  it('should render with the millify number', () => {
    const { getByText } = render(<BasicGithubStars />);
    const rendered = getByText('14.8k');

    expect(rendered).toBeTruthy();
  });
});
