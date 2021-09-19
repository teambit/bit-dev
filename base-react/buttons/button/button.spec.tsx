import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicButton,
  ButtonWithCustomStyles,
  ButtonAsALink
} from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('click me');
  expect(rendered).toBeTruthy();
});

it('should render a button with styles', () => {
  const { getByText } = render(<ButtonWithCustomStyles />);
  const rendered = getByText('click me');
  expect(rendered).toBeTruthy();
  expect(rendered).toContainHTML('style');
});

it('should render an a tag when button is used as a link', () => {
  const { getByText } = render(<ButtonAsALink />);
  const rendered = getByText('Bit');
  expect(rendered).toBeTruthy();
  expect(rendered).toContainHTML('href');
});
