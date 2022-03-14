import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BasicTerminal, AnimatedTerminal } from './terminal.composition';

it('should present passed content', () => {
  const { getByText } = render(<BasicTerminal />);
  const rendered = getByText('hello from Terminal');
  expect(rendered).toBeTruthy();
});


it('should animate content in the terminal', async () => {
  const { getByText, queryByText } = render(<AnimatedTerminal />);
  const terminalT0 = queryByText(/Terminal/);
  expect(terminalT0).toBeNull();
  await waitFor(() => {
    expect(getByText(/Terminal/)).toBeTruthy();
  }, {timeout: 3000});
  }
)