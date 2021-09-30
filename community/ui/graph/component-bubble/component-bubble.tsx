import React from 'react';
import { ComponentID } from '@teambit/component-id'
import { Image } from '@teambit/base-react.content.image';
import { Label } from '@teambit/documenter.ui.label';
import { Caption } from '@teambit/design.ui.content.caption';
import classNames from 'classnames';
import { BubbleCard } from '@teambit/design.ui.cards.bubble-card';
import type { GridItemProps } from '@teambit/community.ui.graph.grid-graph'
import { Ellipsis, ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getScopeName } from './get-scope-name';
import styles from './component-bubble.module.scss';

export type ComponentBubbleProps = {
  /**
   * icon url to display within the bubble.
   */
  icon?: string,

  /**
   * Component ID to display.
   */
  componentId?: ComponentID,

  /**
   * determine whether to show the owner of the scope
   */
  showOwner?: boolean,

  /**
   * allow hover behavior for the bubble. if false, no hover behavior would be applied.
   */
  allowHover?: boolean,

  /**
   * forces the component to be in active state. 
   */
  forceActive?: boolean,

  /**
   * classname to inject the element.
   */
  className?: string,

  /**
   * color of the bubble
   */
  color?: string
} & GridItemProps;

export function ComponentBubble({ className, componentId, showOwner = false, icon, forceActive = false, color = '#EDEDED', ...rest }: ComponentBubbleProps) {

  return (
    <BubbleCard className={classNames(styles.bubble, className, forceActive ? styles.active : '')} {...rest}>
      {icon && <Image src={icon} className={styles.icon} />}
      {componentId && (
        <div className={classNames(styles.id)}>
          <Caption className={ellipsis}>{getScopeName(componentId.scope, showOwner)}/{componentId.namespace}</Caption>
          <Ellipsis className={styles.name}>{componentId.name}</Ellipsis>
        </div>
      )}
      {componentId && <Label className={styles.versionLabel}>{componentId?.version}</Label>}
    </BubbleCard>
  );
}

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
