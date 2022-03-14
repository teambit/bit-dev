import React from 'react';
import { render } from '@testing-library/react';
import { BasicCreateAccount } from './create-account.composition';

describe('create-account', () => {
  it('renders', () => {
    const { container } = render(<BasicCreateAccount />);
    expect(container).toBeTruthy();
  });

  it('renders heading', () => {
    const { getByTestId } = render(<BasicCreateAccount />);
    expect(getByTestId('heading')).toBeTruthy();
  });

  it('renders paragraph', () => {
    const { getByTestId } = render(<BasicCreateAccount />);
    expect(getByTestId('paragraph')).toBeTruthy();
  });
});
