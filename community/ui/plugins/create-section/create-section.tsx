import React from 'react';
import classNames from 'classnames';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import type { BubbleNodeProps } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { mockBubbleGraph } from './bubble-graph.mock';
import styles from './create-section.module.scss';

export type CreateSectionProps = {
  /**
   * Title of the section.
   */
  heading?: any;
  /**
   * Subtitle of the section.
   */
  subtitle?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function CreateSection({ heading, subtitle, className, ...rest }: CreateSectionProps) {
  return (
    <section className={classNames(styles.createSection, className)} {...rest}>
      <div className={styles.content}>
        <Heading size="h1" element={Elements.H2} className={styles.heading}>
          {heading}
        </Heading>
        <Subtitle className={styles.subtitle}>{subtitle}</Subtitle>
        <Link href="/docs/extending-bit/create-a-plugin">
          Create a new plugin <Icon of="right-arrow" className={styles.icon} />
        </Link>
      </div>
      <BubbleGraph
        Node={ComponentBubbleNonInteractive}
        nodes={mockBubbleGraph()}
        className={classNames(styles.gridGraph)}
      />
    </section>
  );
}

export function ComponentBubbleNonInteractive({ node, ...rest }: BubbleNodeProps) {
  return <ComponentBubble {...rest} {...node.payload} nonInteractive />;
}
