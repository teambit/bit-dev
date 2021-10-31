import { BasicThemeUsage } from './use-sidebar-context.composition';
import { render } from '@testing-library/react';

it('should render the button in the color blue', () => {
  const { getByText } = render(<BasicThemeUsage />);
  const rendered = getByText('this should be blue');
  expect(rendered).toBeTruthy();
});
