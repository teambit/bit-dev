import React from 'react';
import { render } from '@testing-library/react';
import { BasicGithub } from './github.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGithub />);
  const rendered = getByText('hello from Github');
  expect(rendered).toBeTruthy();
});
