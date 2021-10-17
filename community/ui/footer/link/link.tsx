import React from 'react';
import classNames from 'classnames';
import {  Link as BaseLink, LinkProps as BaseLinkProps} from "@teambit/design.ui.navigation.link";
import { Icon } from "@teambit/design.elements.icon";
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

export function Link({ className, icon, text, children, ...rest }: LinkProps) {
  return (
    <BaseLink {...rest} className={classNames(styles.link, className)}>
      {icon && getIcon(icon)}
      <span>{text}</span>
      {children}
    </BaseLink>
  );
}


function getIcon(icon: string) {
  if(icon.startsWith('http')) return <img src={icon} className={styles.img} />
  return <Icon className={styles.icon} of={icon} />
}