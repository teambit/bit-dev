import React from 'react';
import classNames from 'classnames';
import { Card } from '@teambit/base-ui.surfaces.card';
import { Button } from '@teambit/design.ui.buttons.button';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import styles from './next-page.module.scss';

export type NextPageProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function NextPage({
  children,
  title,
  description,
  buttonText = 'Continue',
  href,
  ...rest
}: NextPageProps) {
  return (
    <div {...rest}>
      <Subtitle className={styles.next}>next</Subtitle>
      <Card elevation="low" className={classNames(styles.nextPageCard)}>
        <div>
          {title && (
            <Heading className={classNames(styles.title, description && styles.margin)} element={Elements.H6}>
              {title}
            </Heading>
          )}
          {description && <Paragraph className={styles.description}>{description}</Paragraph>}
        </div>
        <Button href={href} className={styles.button}>{buttonText}</Button>
        {children}
      </Card>
    </div>
  );
}
