import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BasicUseOfLocalStorage } from './use-local-storage.composition';


it('should set and retreieve a value from the local storage', async () => {
  const { getByRole } = render(<BasicUseOfLocalStorage />);
  const inputField = getByRole('textbox');
  expect((inputField as HTMLInputElement).value).toBe('my-default-value');
  expect(localStorage.getItem('my-key')).toBe('"my-default-value"');
  fireEvent.change(inputField, {
    target: { value: 'new-value' },
  });
  await waitFor(() => {
    expect((inputField as HTMLInputElement).value).toBe('new-value');
  });
  expect(localStorage.getItem('my-key')).toBe('"new-value"');
});