import React from 'react';
import { render } from '@testing-library/react';
import { BasicLeftRight } from './left-right.composition';

it('should render a title, a subtitle and a cusotm element', () => {
  const { getByText, getByRole } = render(<BasicLeftRight />);
  const heading = getByRole("heading", {name: 'Create. Compose. Collaborate'})
  const subtitle = getByText(/Create new components/);
  const button = getByRole("button", {name: 'Learn more'});
  expect(heading).toBeTruthy();
  expect(subtitle).toBeTruthy();
  expect(button).toBeTruthy();
});
