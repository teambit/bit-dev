import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCasesCardGrid } from './use-cases-card-grid.composition';

it('should render use-cases', () => {
  const { getByText } = render(<BasicUseCasesCardGrid />);
  const componentLibraryText = getByText('Successfully share components and get adoption for your design system.');
  expect(componentLibraryText).toBeTruthy();
  const componentLibraryTitle = getByText('Component Library');
  expect(componentLibraryTitle).toBeTruthy();
  });
