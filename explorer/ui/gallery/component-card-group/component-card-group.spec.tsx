import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentCardGroup } from './component-card-group.composition';

describe('should render create section', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<BasicComponentCardGroup />);
    rendered = getByTestId('component-card-group');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should have h2 element', () => {
    expect(rendered.querySelector('h2')).toBeTruthy();
  });
  it('should have h2 with given text', () => {
    expect(rendered.querySelector('h2')?.textContent).toBe('My Components');
  });
  it('should have 4 component card', () => {
    const componentGrid = rendered.lastChild;
    expect(componentGrid?.childNodes.length).toBe(4);
  });
});
