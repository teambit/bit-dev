import React, { useState } from 'react';
import { Heading } from '@teambit/community.ui.heading';
import classNames from 'classnames';
// TODO: move to be in `design` owned by @amir.
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { Edge } from '@teambit/community.ui.graph.edge';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { Button } from '@teambit/design.ui.buttons.button';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { HeroGraph } from '@teambit/community.entity.hero-graph';
import { ComponentID } from '@teambit/component-id';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleHighlighter } from '@teambit/community.ui.bubble-highlighter';
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
    <WideColumn>
      <div className={styles.hero}>
        {heroGraph.bubbles.map((bubble) => {
          const id = getValidId(bubble.id.toString({ignoreVersion: true}))
          const cell = getCell(bubble.row, bubble.col)
          const bubblePosition = bubble.position && positions[bubble.position];
          return (
            <div key={id} className={styles.bubbleContainer} style={{ ...cell, ...bubblePosition }}>
              <ComponentBubble componentId={bubble.id} className={styles.bubble} id={id} icon={bubble.icon} />
              {bubble.dependencies.map((dependency) => {
                const idStr = getValidId(dependency.toString())
                return <Edge key={`${id}->${idStr}`} start={id} end={idStr} />
              })}
            </div>
          )
        })}
          <Edge start={getValidId('teambit.design/ui/buttons/button')} end={getValidId('teambit.react-base/buttons/button')} />
          <Edge start={getValidId('teambit.community/ui/content/heading')} end={getValidId('teambit.design/ui/content/heading')} />
          <div className={styles.title}>
            <BubbleHighlighter showId cornerSvgSize={40} cornerSvgClassName={styles.largeSvg} className={classNames(styles.titleHighlighter)} componentId={ComponentID.fromString('teambit.community/ui/content/heading')}>
              <Heading className={styles.marginZero} highlight={heroState === HeroState.HEADING_UPDATED}>{title}</Heading>
            </BubbleHighlighter>
          </div>
          <div className={styles.subTitle}>
            <BubbleHighlighter cornerSvgSize={20} cornerSvgClassName={styles.subtitleSvg} className={classNames(styles.subtitleHighlighter)} componentId={ComponentID.fromString('teambit.design/ui/content/subtitle')}>
              <Subtitle className={styles.marginZero}>{teaser}</Subtitle>
            </BubbleHighlighter>
          </div>
          <div className={styles.getStarted}>
            <BubbleHighlighter componentId={ComponentID.fromString('teambit.design/ui/buttons/button')}>
              <Button className={styles.getStartedAction} href="/docs/quick-start">Getting Started</Button>
            </BubbleHighlighter>
            <BubbleHighlighter componentId={ComponentID.fromString('teambit.documenter/ui/copy-box')}>
              <CopyBox className={styles.copyBox}>npx @teambit/bvm install</CopyBox>
            </BubbleHighlighter>
          </div>
      </div>
    </WideColumn>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Bit helps build components and compose them into infinite features and apps. Forget monolithic apps and distribute to component-driven software. '
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
