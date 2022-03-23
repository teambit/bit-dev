import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubbleEdge } from './edge.composition';

// skipping tests for this component because of this issue: https://github.com/Eliav2/react-xarrows/issues/110.
describe.skip('Edge component', () => {
  it('should render', () => {
    const { container } = render(<BasicBubbleEdge />);

    expect(container).toBeInTheDocument();
  });
});
