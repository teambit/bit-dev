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
  text?: string;
  buttonText?: string;
  href?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function NextPage({
  children,
  title,
  text,
  buttonText = 'Continue',
  href,
  ...rest
}: NextPageProps) {
  return (
    <div {...rest}>
      <Subtitle className={styles.next}>next</Subtitle>
      <Card elevation="low" className={classNames(styles.nextPage)}>
        <div>
          {title && (
            <Heading className={classNames(styles.title, text && styles.margin)} element={Elements.H6}>
              {title}
            </Heading>
          )}
          {text && <Paragraph className={styles.text}>{text}</Paragraph>}
        </div>
        <Button href={href} className={styles.button}>{buttonText}</Button>
        {children}
      </Card>
    </div>
  );
}
