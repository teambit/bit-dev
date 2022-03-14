import React from 'react';
import { render } from '@testing-library/react';
import { BasicDesignQuickStart } from './design-quick-start.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDesignQuickStart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
