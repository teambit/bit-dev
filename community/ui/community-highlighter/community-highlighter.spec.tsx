import React, { ReactNode } from 'react';
import { fireEvent, render, } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import {
  ComponentMeta,
  componentMetaField,
} from '@teambit/react.ui.highlighter.component-metadata.bit-component-meta';
import { CommunityHighlighter } from './community-highlighter';
import { Toggler } from './toggler';

function ButtonComponent({ children }: { children: ReactNode }) {
  return <button>{children}</button>;
}

ButtonComponent[componentMetaField] = {
  id: 'teambit.base-ui/input/button',
} as ComponentMeta;

it('should show bubble when hovering over an element with a component id', async () => {
  const { getByText, findByText } = render(
    <CommunityHighlighter>
      <ButtonComponent>hover here</ButtonComponent>
    </CommunityHighlighter>
  );
  const button = getByText('hover here');

  act(() => {
    fireEvent.mouseOver(button);
  });
  const highlightBubble = await findByText('input/button');
  expect(highlightBubble).toBeInTheDocument();
});

it('should toggle highlighting using the Toggler component', async () => {
  const { getByText, findByText, getByRole, queryByText } = render(
    <CommunityHighlighter>
      <Toggler />
      <ButtonComponent>hover here</ButtonComponent>
    </CommunityHighlighter>
  );
  const button = getByText('hover here');
  /* toggle is on (default) */
  act(() => {
    fireEvent.mouseOver(button);
  });
  const highlightBubble1 = await findByText('input/button');
  expect(highlightBubble1).toBeInTheDocument();
  /* turn toggle off */
  const toggler = getByRole('checkbox');
  act(() => {
    fireEvent.click(toggler);
  });
  const highlightBubble2 = queryByText('input/button');
  expect(highlightBubble2).not.toBeInTheDocument();
  /* turn toggle on */
  act(() => {
    fireEvent.click(toggler);
  });

  act(() => {
    fireEvent.mouseOver(button);
  });

  const highlightBubble3 = await findByText('input/button');
  expect(highlightBubble3).toBeInTheDocument();
});
