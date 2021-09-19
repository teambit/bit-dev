import React, { useState } from 'react';
import { Heading } from '@teambit/community.ui.heading';
// TODO: move to be in `design` owned by @amir.
import { Bubble } from '@teambit/community.ui.graph.bubble';
import { Edge } from '@teambit/community.ui.graph.edge';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { Button } from '@teambit/design.ui.buttons.button';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { mockHero } from '@teambit/community.entity.hero-graph';
import styles from './hero.module.scss';
import { useHeroState, HeroState } from './use-hero-state';

export type HeroProps = {
  /**
   * title to use in the Hero section.
   */
  title: string;

  /**
   * teaser.
   */
  teaser: string;
};

export function Hero({ title, teaser }: HeroProps) {
  const { heroState, setStateFromTime } = useHeroState();
  const heroGraph = mockHero();
  const headingClass = heroState === HeroState.HEADING_UPDATED ? styles.highlight : '';

  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <Heading id="community-ui-heading" highlight={heroState === HeroState.HEADING_UPDATED}>{title}</Heading>
        <Subtitle id="community-ui-subtitle">{teaser}</Subtitle>
        <div className={styles.getStarted}>
          <Button id="community-ui-button" className={styles.getStartedAction} href="http://bit.dev">Getting Started</Button>
          <CopyBox id="community-ui-copybox" className={styles.copyBox}>npx @teambit/bvm install</CopyBox>
        </div>
      </div>
      <div className={styles.graphStart}>
        <Bubble id="community-ui-hero" icon="https://static.bit.dev/brands/logo-react.svg" />
        <Edge start="community-ui-hero" end="community-ui-heading" />
        <Edge start="community-ui-hero" end="community-ui-subtitle" />
        {/* <Edge start="community-ui-hero" end="community-ui-button" /> */}
        <Edge start="community-ui-hero" end="community-ui-copybox" />
      </div>
      <div style={{ gridColumnStart: 11, gridRowStart: 4 }}>
        <Bubble id="community-ui-pages-homepage" icon="https://static.bit.dev/brands/logo-react.svg" />
      </div>
    </div>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Forget about monolithic apps, start building component-driven software. Bit helps developers build better software with independent components and compose them into infinite features and apps.'
};
