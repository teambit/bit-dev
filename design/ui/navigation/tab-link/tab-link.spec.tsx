import React from 'react';
import { render } from '@testing-library/react';
import { BasicTabLink, ActiveTabLink } from './tab-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTabLink />);
  const rendered = getByText('basic link');
  expect(rendered).toBeTruthy();
});

it('should show as active', () => {
  const { getByText } = render(<ActiveTabLink />);
  const rendered = getByText('active link');
  expect(rendered).toHaveClass('active');
});
