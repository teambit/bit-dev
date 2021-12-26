import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentThinkingProcess } from './component-thinking-process.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentThinkingProcess />);
  const rendered = getByText('hello from ComponentThinkingProcess');
  expect(rendered).toBeTruthy();
});
