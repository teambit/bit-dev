import React from 'react';
import { ComponentID } from '@teambit/component-id'
import { Image } from '@teambit/base-react.content.image';
import { Label } from '@teambit/documenter.ui.label';
import { Caption } from '@teambit/design.ui.content.caption';
import classNames from 'classnames';
import { GridItemProps } from '@teambit/community.ui.graph.grid-graph'
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
  // console.log("componentId", getValidId(componentId.toString({ignoreVersion: true})))
  return (
    <div /* id={getValidId(componentId.toString({ignoreVersion: true}))} */ className={classNames(styles.bubble, className, forceActive ? styles.active : '')} {...rest}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1937 1.83337C8.09096 4.06476 3.9981 8.17609 1.79077 13.2917" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {icon ? <Image src={icon} className={styles.icon} /> : ''}
      {componentId ? <div className={styles.id}>
        <Caption>{getScopeName(componentId.scope, showOwner)}/{componentId.namespace}</Caption>
        {componentId.name}
      </div>: ''}
      {componentId ? <Label className={styles.versionLabel}>{componentId?.version}</Label>: ''}
    </div>
  );
}

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
