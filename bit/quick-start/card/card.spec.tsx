import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

describe('card', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  // retry build
  it('should render the heading', () => {
    const { getByTestId } = render(<BasicCard />);
    const heading = getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });
  it('should render the description', () => {
    const { getByTestId } = render(<BasicCard />);
    const description = getByTestId('description');
    expect(description).toBeInTheDocument();
  });
  it('should render logos container', () => {
    const { getByTestId } = render(<BasicCard />);
    const logos = getByTestId('logos');
    expect(logos).toBeInTheDocument();
  });
});
