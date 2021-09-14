import React, { useState } from 'react';
import { Heading } from '@teambit/community.ui.heading';
// TODO: move to be in `design` owned by @amir.
import { Grid } from '@teambit/base-react.layout.grid';
import { Video } from '@teambit/base-react.content.video';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { Button } from '@teambit/design.ui.buttons.button';
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

  return (
    <Grid className={styles.hero}>
      <div>
        <Heading className={heroState === HeroState.HEADING_UPDATED ? styles.highlight : ''}>{title}</Heading>
        <Subtitle>{teaser}</Subtitle>
        <Button href="http://bit.dev">Getting Started</Button>
      </div>  
      <div>
        <Video 
          onTimeUpdate={(e) => setStateFromTime(e.timeStamp)} 
          src="https://static.bit.dev/Community/hero/hero-video-1.mp4" 
          autoPlay={true} 
          loop={true} 
        />
      </div>
    </Grid>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Forget about monolithic apps, start building component-driven software. Bit helps developers build better software with independent components and compose them into infinite features and apps.'
};
