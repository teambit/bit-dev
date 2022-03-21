import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BubbleCard, BubbleCardProps } from '@teambit/design.ui.cards.bubble-card';
import { Link } from '@teambit/design.ui.navigation.link';
import { ComponentUrl, ScopeUrl } from '@teambit/component.modules.component-url';
import classNames from 'classnames';
import styles from './bubble-highlighter.module.scss';

export type BubbleHighlighterProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;

  /**
   * component ID of the highlighted component.
   */
  componentId: ComponentID;
  /**
   * show highlighter label
   */
  showId?: boolean;

  /**
   * className for the display label
   */
  labelClass?: string;
} & BubbleCardProps;

export function BubbleHighlighter({
  children,
  componentId,
  labelClass,
  showId = false,
  ...rest
}: BubbleHighlighterProps) {
  const id = componentId.toString({ ignoreVersion: true }).replace(/[.\/]/g, '-');

  return (
    // TODO: refactor id stringify to a valid HTML ID to a component.
    // make sure to use this here and from Hero.
    <BubbleCard className={styles.bubbleHighlighter} id={id} {...rest}>
      {showId && <Label className={classNames(styles.label, labelClass)} componentId={componentId} />}
      {children}
    </BubbleCard>
  );
}

type LabelProps = {
  componentId: ComponentID;
} & React.HTMLAttributes<HTMLDivElement>;

function Label({ componentId, className, ...rest }: LabelProps) {
  // @ts-ignore
  const componentLink = ComponentUrl.toUrl(componentId);
  const scopeLink = ScopeUrl.toUrl(componentId.scope);
  const componentName =
    !!componentId.version && componentId.version !== 'latest'
      ? `${componentId.fullName}@${componentId.version}`
      : componentId.fullName;
  return (
    <div {...rest} className={classNames(styles.label, className)}>
      <Link external href={scopeLink} className={styles.left}>
        {componentId.scope}
      </Link>
      <Link external href={componentLink} className={styles.right}>
        {componentName}
      </Link>
    </div>
  );
}
