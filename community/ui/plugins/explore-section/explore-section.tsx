import React, { useState } from 'react';
import classNames from 'classnames';
import { Separator } from '@teambit/base-ui.elements.separator';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { Heading } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import type { BubbleNodeProps } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { SearchInput } from '@teambit/explorer.ui.search.search-input';
import { mockBubbleGraph } from './bubble-graph.mock';
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
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentBubbleNonInteractive({ node, ...rest }: BubbleNodeProps) {
  return <ComponentBubble {...rest} {...node.payload} nonInteractive />;
}

export function ExploreSection({ heading, subtitle, className, ...rest }: ExploreSectionProps) {
  const [searchValue, setSearchValue] = useState('');
  const onSearch = () => {
    window.open(`https://bit.dev/components?packageDependencies=%40teambit%2Fharmony&q=${searchValue}`);
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value);

  return (
    <section className={classNames(styles.exploreSection, className)} {...rest}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Heading className={styles.heading}>{heading}</Heading>
          <Subtitle className={styles.subtitle}>{subtitle}</Subtitle>
          <SearchInput
            placeholder="Search plugins"
            onSubmit={onSearch}
            value={searchValue}
            onChange={onSearchChange}
            className={styles.searchInput}
          />
          <div>
            <Link href="https://bit.cloud/components?env=aspect" external className={styles.link}>
              Browse plugins
              <Icon of="right-arrow" className={styles.icon} />
            </Link>
            <Link href="/docs/extending-bit/aspect-overview" className={styles.link}>
              Create a new plugin <Icon of="right-arrow" className={styles.icon} />
            </Link>
          </div>
        </div>
        <BubbleGraph
          Node={ComponentBubbleNonInteractive}
          nodes={mockBubbleGraph()}
          className={classNames(styles.right, styles.gridGraph)}
        />
      </div>
      <Separator />
    </section>
  );
}
