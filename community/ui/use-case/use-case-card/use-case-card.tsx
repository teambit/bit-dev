import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from '@teambit/base-ui.surfaces.card';
import { Icon } from '@teambit/design.elements.icon';
import { H4 } from '@teambit/design.ui.heading';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import styles from './use-case-card.module.scss';

export type UseCaseCardProps = {
  /**
   * an icon to be rendered in the card.
   */
  icon?: string;
  /**
   * a title for the card
   */
  title?: string;
  /**
   * a text for the card
   */
  text?: string;
  /**
   * class for the icon
   */
  iconClass?: string;
} & CardProps;

export function UseCaseCard({
  icon,
  elevation = 'none',
  iconClass,
  title,
  text,
  children,
  className,
  ...rest
}: UseCaseCardProps) {
  return (
    <Card
      {...rest}
      elevation={elevation}
      className={classNames(styles.useCaseCard, className)}
    >
      {icon && (
        <Icon of={icon} className={classNames(styles.icon, iconClass)} />
      )}
      <div className={styles.textBox}>
        <H4 size="sm" className={classNames(styles.title, className)}>
          {title}
        </H4>
        <Paragraph element="p" className={classNames(styles.text, className)}>
          {text}
        </Paragraph>
        {children}
      </div>
    </Card>
  );
}
