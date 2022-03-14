import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicTabLink,
  ActiveTabLink,
  TopActiveTabLink,
  LeftActiveTabLink,
  RightActiveTabLink,
} from './tab-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTabLink />);
  const rendered = getByText('basic link');
  expect(rendered).toBeTruthy();
});

it('should show as active', () => {
  const { getByText } = render(<ActiveTabLink />);
  const target = getByText('active link');

  // todo - why do we need a div in the middle?
  expect(target.parentElement).toHaveClass('active');
});

it('should show bottom border by default, if position isnt specified', () => {
  const { getByTestId } = render(<ActiveTabLink />);
  const rendered = getByTestId('active-link');
  expect(rendered).toHaveAttribute('data-position', 'bottom');
});

it('should show top border, if position is set to top', () => {
  const { getByTestId } = render(<TopActiveTabLink />);
  const rendered = getByTestId('top-link');
  expect(rendered).toHaveAttribute('data-position', 'top');
});

it('should show right border, if position is set to right', () => {
  const { getByTestId } = render(<RightActiveTabLink />);
  const rendered = getByTestId('right-link');
  expect(rendered).toHaveAttribute('data-position', 'right');
});

it('should show left border, if position is set to left', () => {
  const { getByTestId } = render(<LeftActiveTabLink />);
  const rendered = getByTestId('left-link');
  expect(rendered).toHaveAttribute('data-position', 'left');
});
