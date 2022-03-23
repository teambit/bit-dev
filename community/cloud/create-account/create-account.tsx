import React from 'react';
import classnames from 'classnames';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Button } from '@teambit/design.ui.buttons.button';
import { Insightful } from './insgihtful';
import styles from './create-account.module.scss';

export type CreateAccountProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function CreateAccount({ className, ...rest }: CreateAccountProps) {
  return (
    <div className={classnames(styles.container, className)} {...rest}>
      <Insightful className={styles.insightful} />
      <Heading className={styles.heading} data-testid="heading" element={Elements.H3}>
        Create your free bit.cloud account
      </Heading>
      <Paragraph className={styles.paragraph} element="p" data-testid="paragraph">
        bit.cloud is and will always be a free for open source and personal use. It is recommended to create your
        bit.cloud account prior to creating the workspace to ensure the right owner name for your components. You can
        choose to host the Bit yourself, choose a name for the remote scope in which the component you be hosted.
      </Paragraph>
      <Button className={styles.button} data-testid="button" href="https://bit.cloud/signup" target="_blank">
        Create your account
      </Button>
    </div>
  );
}
