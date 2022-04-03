import React from 'react';
import classNames from 'classnames';
import { ComponentID } from '@teambit/component-id';
import { Image } from '@teambit/base-react.content.image';
import { Label } from '@teambit/documenter.ui.label';
import { Caption } from '@teambit/design.ui.content.caption';
import { Link } from '@teambit/base-react.navigation.link';
import { BubbleCard, BubbleCardProps } from '@teambit/design.ui.cards.bubble-card';
import { ComponentUrl } from '@teambit/component.modules.component-url';
import { Ellipsis, ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getScopeName } from './get-scope-name';
import styles from './component-bubble.module.scss';

export type ComponentBubbleProps = {
  /**
   * icon url to display within the bubble.
   */
  icon?: string;

  /**
   * Component ID to display.
   */
  componentId?: ComponentID;

  /**
   * determine whether to show the owner of the scope
   */
  showOwner?: boolean;

  /**
   * allow hover behavior for the bubble. if false, no hover behavior would be applied.
   */
  allowHover?: boolean;

  /**
   * forces the component to be in active state.
   */
  forceActive?: boolean;

  /**
   * show the component version
   */
  showVersion?: boolean;

  /**
   * make bubble non interactive, showVersion and allowHover are false.
   */
  nonInteractive?: boolean;

  /**
   * classname to inject the element.
   */
  className?: string;
  /**
   * link the component bubble to its component page
   */
  isLinkable?: boolean;

  showScope?: boolean;
} & BubbleCardProps;

export function ComponentBubble({
  className,
  componentId,
  showOwner = false,
  icon,
  showScope = true,
  showVersion = true,
  allowHover = true,
  forceActive = false,
  nonInteractive = false,
  isLinkable = true,
  ...rest
}: ComponentBubbleProps) {
  if (nonInteractive) {
    showVersion = false;
    allowHover = false;
  }
  // @ts-ignore TODO fix this
  const link = componentId && isLinkable && ComponentUrl.toUrl(componentId, { includeVersion: false });

  const bubble = (
    <BubbleCard
      className={classNames(styles.bubble, className, forceActive && styles.active, allowHover && styles.interactive)}
      {...rest}
    >
      {icon && <Image src={icon} className={styles.icon} />}
      {componentId && (
        <div className={classNames(styles.id)}>
          <Caption className={ellipsis}>
            {showScope
              ? `${getScopeName(componentId.scope, showOwner)}/${componentId.namespace}`
              : componentId.namespace}
          </Caption>
          <Ellipsis className={styles.name}>{componentId.name}</Ellipsis>
        </div>
      )}
      {componentId?.version && showVersion && <Label className={styles.versionLabel}>{componentId.version}</Label>}
    </BubbleCard>
  );

  if (!link) return bubble;

  return (
    <Link href={link} className={styles.link} external>
      {bubble}
    </Link>
  );
}

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
