import React from 'react';
import classNames from 'classnames';
import { Separator } from '@teambit/base-ui.elements.separator';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { Heading } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import type { BubbleGraphProps } from '@teambit/community.ui.graph.bubble-graph';
import styles from './explore-section.module.scss';

export type ExploreSectionProps = {
  /**
   * Title of the section.
   */
  heading?: React.ReactNode;
  /**
   * Subtitle of the section.
   */
  subtitle?: string;
} & BubbleGraphProps;

export function ExploreSection({ heading, subtitle, nodes, Node, className, ...rest }: ExploreSectionProps) {
  return (
    <section className={classNames(styles.exploreSection, className)} {...rest}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Heading className={styles.heading}>{heading}</Heading>
          <Subtitle className={styles.subtitle}>{subtitle}</Subtitle>
          <Link href="https://bit.dev/components?env=aspect" external className={styles.link}>
            Browse plugins
            <Icon of="right-arrow" className={styles.icon} />
          </Link>
          <Link href="/docs/extending-bit/create-a-plugin" className={styles.link}>
            Create a new plugin <Icon of="right-arrow" className={styles.icon} />
          </Link>
        </div>
        <BubbleGraph Node={Node} nodes={nodes} className={classNames(styles.right, styles.gridGraph)} />
      </div>
      <Separator />
    </section>
  );
}
