import React from 'react';
import classNames from 'classnames';
import { Separator } from '@teambit/base-ui.elements.separator';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { Heading, highlightClass } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import type { BubbleNodeProps } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';

import { mockPluginsHeroBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import styles from './hero.module.scss';

export type HeroProps = {};

export function Hero({}: HeroProps) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.left}>
          <Heading className={styles.heading}>
            Explore <span className={highlightClass}>Bit Plugins</span>
          </Heading>
          <Subtitle className={styles.subtitle}>
            Enhance and customize your development experience with dozens of official and community Plugins.
          </Subtitle>
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
          nodes={mockPluginsHeroBubbleGraph()}
          className={classNames(styles.right, styles.gridGraph)}
        />
      </section>
      <Separator />
    </>
  );
}

export function BubbleNonInteractive({ node, ...rest }: BubbleNodeProps) {
  return <ComponentBubble {...rest} {...node.payload} showVersion={false} allowHover={false} />;
}
