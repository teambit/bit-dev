import React from 'react';
import { render } from '@testing-library/react';
import { BasicSampleApp } from './sample-app.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicSampleApp />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
