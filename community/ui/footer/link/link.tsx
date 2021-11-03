import React from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps as BaseLinkProps } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import styles from './link.module.scss';

export type LinkProps = {
  /**
   * icon to be rendered in the component.
   */
  icon?: string;
  /**
   * text to be rendered in the component.
   */
  text: string;
} & BaseLinkProps;

function getIcon(icon: string, text: string) {
  if (icon.startsWith('http')) return <img src={icon} alt={text} className={styles.img} />;
  return <Icon className={styles.icon} of={icon} />;
}

export function Link({ className, icon, text, children, ...rest }: LinkProps) {
  return (
    <BaseLink {...rest} className={classNames(styles.link, className)}>
      {icon && getIcon(icon, text)}
      <span>{text}</span>
      {children}
    </BaseLink>
  );
}
