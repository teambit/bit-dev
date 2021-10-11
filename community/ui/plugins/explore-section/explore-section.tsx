import React from 'react';
import classNames from 'classnames';
import { Separator } from '@teambit/base-ui.elements.separator';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { Heading } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import type { BubbleNodeProps } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { mockPluginsGraph } from './plugins-graph.mock';
import styles from './explore-section.module.scss';

export type ExploreSectionProps = {
  /**
   * Title of the section.
   */
  title?: React.ReactNode;
  /**
   * Subtitle of the section.
   */
  subtitle?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ExploreSection({ title, subtitle, ...rest }: ExploreSectionProps) {
  return (
    <div className={styles.exploreSection} {...rest}>
      <section className={styles.content}>
        <div className={styles.left}>
          <Heading className={styles.heading}>{title}</Heading>
          <Subtitle className={styles.subtitle}>{subtitle}</Subtitle>
          <Link href="https://bit.dev/components?env=aspect" external className={styles.link}>
            Browse plugins
            <Icon of="right-arrow" className={styles.icon} />
          </Link>
          <Link href="/docs/extending-bit/create-a-plugin" className={styles.link}>
            Create a new plugin <Icon of="right-arrow" className={styles.icon} />
          </Link>
        </div>
        <BubbleGraph
          Node={BubbleNonInteractive}
          nodes={mockPluginsGraph()}
          className={classNames(styles.right, styles.gridGraph)}
        />
      </section>
      <Separator />
    </div>
  );
}

export function BubbleNonInteractive({ node, ...rest }: BubbleNodeProps) {
  return <ComponentBubble {...rest} {...node.payload} showVersion={false} allowHover={false} />;
}
