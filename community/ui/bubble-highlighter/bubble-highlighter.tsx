import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BubbleCard, BubbleCardProps } from '@teambit/design.ui.cards.bubble-card';
import styles from './bubble-highlighter.module.scss';

export type BubbleHighlighterProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode

  /**
   * component ID of the highlighted component. 
   */
  componentId: ComponentID;
  /**
   * show highlighter label
   */
  showId?: boolean;
} & BubbleCardProps;

export function BubbleHighlighter({ children, componentId, showId = false, ...rest }: BubbleHighlighterProps) {
  const id = componentId.toString({ignoreVersion: true}).replace(/[.\/]/g, '-');
  const componentName = !!componentId.version && componentId.version !== 'latest' ? `${componentId.fullName}@${componentId.version}` : componentId.fullName;

  return (
    // TODO: refactor id stringify to a valid HTML ID to a component.
    // make sure to use this here and from Hero.
    <BubbleCard className={styles.bubbleHighlighter} id={id} {...rest}>
      {showId && <Label scope={componentId.scope} name={componentName} />}
      {children}
    </BubbleCard>
  );
}

type LabelProps = {
  scope: string;
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;
function Label({scope, name, ...rest}: LabelProps) {
  return (
    <div {...rest} className={styles.label}>
      <div className={styles.left}>{scope}</div>
      <div className={styles.right}>{name}</div>
    </div>
  )
}