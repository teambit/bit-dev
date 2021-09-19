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
      {heroGraph.bubbles.map((bubble) => {
        const id = bubble.id.toString();
        const cell = getCell(bubble.row, bubble.col)
        const bubblePosition = bubble.position && positions[bubble.position];
        return <Bubble key={id} style={{...cell, ...bubblePosition}} className={styles.fadedBuble} id={id} icon={bubble.icon} />
      })}
        <Heading className={styles.title} id="community-ui-heading" highlight={heroState === HeroState.HEADING_UPDATED}>{title}</Heading>
        <Subtitle className={styles.subTitle} id="community-ui-subtitle">{teaser}</Subtitle>
        <div className={styles.getStarted}>
          <Button id="community-ui-button" className={styles.getStartedAction} href="http://bit.dev">Getting Started</Button>
          <CopyBox id="community-ui-copybox" className={styles.copyBox}>npx @teambit/bvm install</CopyBox>
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


const positions = {
  'top' : {
    alignSelf: 'start',
    justifySelf: 'center',
  },
   'top-right' : {
     alignSelf: 'start',
     justifySelf: 'end',
   },
   'right' : {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'bottom-right' : {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'bottom' : {
     alignSelf: 'end',
     justifySelf: 'center',
   },
   'bottom-left' : {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'left' : {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'top-left' : {
     alignSelf: 'start',
     justifySelf: 'end',
   }

};

function getCell(row: number, col: number) {
  return {
    "gridColumnStart": col,
    "gridColumnEnd": col,
    "gridRowStart": row,
    "gridRowEnd": row,
  }
}
