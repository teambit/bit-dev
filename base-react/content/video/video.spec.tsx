import React from 'react';
import { render } from '@testing-library/react';
import { BasicVideo } from './video.composition';

it('should render a video element', () => {
  const { container } = render(<BasicVideo />);
  
  const rendered = container.querySelector('video');
  expect(rendered).toBeTruthy();
});
