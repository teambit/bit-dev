import React from 'react';
import { render } from '@testing-library/react';
import { BasicBasicReact } from './basic-react.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBasicReact />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
