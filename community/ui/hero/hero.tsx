import React, { useState } from 'react';
import { Heading } from '@teambit/community.ui.heading';
import classNames from 'classnames';
// TODO: move to be in `design` owned by @amir.
import { ComponentBubble } from '@teambit/community.ui.graph.component-bubble';
import { Edge } from '@teambit/community.ui.graph.edge';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Button } from '@teambit/design.ui.buttons.button';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import { BubbleNode } from '@teambit/community.entity.graph.bubble-graph';
import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { ComponentID } from '@teambit/component-id';
import { BubbleHighlighter } from '@teambit/community.ui.bubble-highlighter';
import { BubbleGraph, getValidId } from '@teambit/community.ui.graph.bubble-graph';
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
  bubbles: BubbleNode[];
};

export function Hero({ title, bubbles, teaser }: HeroProps) {
  const { heroState, setStateFromTime } = useHeroState();
  const headingClass =
    heroState === HeroState.HEADING_UPDATED ? styles.highlight : "";
  
  const button = GridNode.fromPlain({
    id: 'teambit.design/ui/buttons/button',
    dependencies: ['teambit.react-base/buttons/button']
  });

  const heading = GridNode.fromPlain({
    id: 'teambit.community/ui/content/heading',
    dependencies: ['teambit.design/ui/content/heading']
  });

  return (
    <WideColumn>
          <BubbleGraph nodes={bubbles}>
            <Edge node={button} dependency={button.dependencies[0]} />
            <Edge node={heading} dependency={heading.dependencies[0]} />
            <div className={styles.title}>
              <BubbleHighlighter showId cornerSvgSize={40} cornerSvgClassName={styles.largeSvg} className={classNames(styles.titleHighlighter)} componentId={ComponentID.fromString('teambit.community/ui/content/heading')}>
                <Heading className={styles.marginZero} highlight={heroState === HeroState.HEADING_UPDATED}>{title}</Heading>
              </BubbleHighlighter>
            </div>
            <div className={styles.subTitle}>
              <BubbleHighlighter cornerSvgSize={20} cornerSvgClassName={styles.subtitleSvg} showId className={classNames(styles.subtitleHighlighter)} componentId={ComponentID.fromString('teambit.design/ui/content/subtitle')}>
                <Subtitle className={styles.marginZero}>{teaser}</Subtitle>
              </BubbleHighlighter>
            </div>
            <div className={styles.getStarted}>
              <BubbleHighlighter componentId={ComponentID.fromString('teambit.design/ui/buttons/button')} showId>
                <Button className={styles.getStartedAction} href="/docs/quick-start">Getting Started</Button>
              </BubbleHighlighter>
              <BubbleHighlighter componentId={ComponentID.fromString('teambit.documenter/ui/copy-box')} showId>
                <CopyBox className={styles.copyBox}>npx @teambit/bvm install</CopyBox>
              </BubbleHighlighter>
            </div>
          </BubbleGraph>
    </WideColumn>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Bit helps build components and compose them into infinite features and apps. Forget monolithic apps and distribute to component-driven software. '
};
