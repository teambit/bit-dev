import React, { useState } from 'react';
import { Heading } from '@teambit/community.ui.heading';
// TODO: move to be in `design` owned by @amir.
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { Edge } from '@teambit/community.ui.graph.edge';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Button } from '@teambit/design.ui.buttons.button';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { HeroGraph, mockHero } from '@teambit/community.entity.hero-graph';
import { ComponentID } from '@teambit/component-id';
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

  /**
   * state for hero background graph.
   */
  heroGraph: HeroGraph
};

export function Hero({ title, heroGraph, teaser }: HeroProps) {
  const { heroState, setStateFromTime } = useHeroState();
  const headingClass = heroState === HeroState.HEADING_UPDATED ? styles.highlight : '';

  return (
    <div className={styles.hero}>
      {heroGraph.bubbles.map((bubble) => {
        const id = getValidId(bubble.id.toString({ignoreVersion: true}))
        const cell = getCell(bubble.row, bubble.col)
        const bubblePosition = bubble.position && positions[bubble.position];
        return (
          <div className={styles.bubbleContainer}>
            <ComponentBubble key={id} componentId={bubble.id} style={{...cell, ...bubblePosition}} className={styles.bubble} id={id} icon={bubble.icon} />
            {bubble.dependencies.map(dependency => {
              const idStr = getValidId(dependency.toString())
              return <Edge key={idStr} start={id} end={idStr} />
            })}
          </div>
        )

      })}
        <Heading className={styles.title} id="community-ui-heading" highlight={heroState === HeroState.HEADING_UPDATED}>{title}</Heading>
        <Subtitle className={styles.subTitle} id="community-ui-subtitle">{teaser}</Subtitle>
        <div className={styles.getStarted}>
          <Button id="community-ui-button" className={styles.getStartedAction} href="http://bit.dev">Getting Started</Button>
          <CopyBox id="community-ui-copybox" className={styles.copyBox}>npx @teambit/bvm install</CopyBox>
        </div>
      <div className={styles.graphStart}>
        <ComponentBubble className={styles.bubble} componentId={ComponentID.fromString('teambit.community/ui/hero@1.0.1')} id="community-ui-hero" icon="https://static.bit.dev/brands/logo-react.svg" forceActive />
        <Edge start="community-ui-hero" end="community-ui-heading" />
        <Edge start="community-ui-hero" end="community-ui-subtitle" />
        {/* <Edge start="community-ui-hero" end="community-ui-button" /> */}
        <Edge start="community-ui-hero" end="community-ui-copybox" />
      </div>
      <div style={{ gridColumnStart: 11, gridRowStart: 4 }}>
        <ComponentBubble className={styles.bubble} componentId={ComponentID.fromString('teambit.community/ui/pages/homepage@1.0.2')} id="community-ui-pages-homepage" icon="https://static.bit.dev/brands/logo-react.svg" forceActive />
      </div>
    </div>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Bit helps build in components and compose them into infinite features and apps. Forget monolithic apps and distribute to component-driven software. '
};

const positions = {
  'top': {
    alignSelf: 'start',
    justifySelf: 'center',
  },
   'top-right': {
     alignSelf: 'start',
     justifySelf: 'end',
   },
   'right': {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'bottom-right': {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'bottom': {
     alignSelf: 'end',
     justifySelf: 'center',
   },
   'bottom-left': {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'left': {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'top-left': {
     alignSelf: 'start',
     justifySelf: 'end',
   }
};

function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}

function getCell(row: number, col: number) {
  return {
    gridColumnStart: col,
    gridColumnEnd: col,
    gridRowStart: row,
    gridRowEnd: row
  }
}
