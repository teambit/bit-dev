import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BubbleCard, BubbleCardProps } from '@teambit/design.ui.cards.bubble-card';

export type BubbleHighlighterProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode

  /**
   * component ID of the highlighted component. 
   */
  componentId: ComponentID
} & BubbleCardProps;

export function BubbleHighlighter({ children, componentId, ...rest }: BubbleHighlighterProps) {
  return (
    // TODO: refactor id stringify to a valid HTML ID to a component.
    // make sure to use this here and from Hero.
    <BubbleCard id={componentId.toString().replace(/[.\/]/g, '-')} {...rest}>
      {children}
    </BubbleCard>
  );
}
