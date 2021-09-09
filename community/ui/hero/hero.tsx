import React from 'react';
import { Heading } from '@teambit/community.ui.heading';
// TODO: move to be in `design` owned by @amir.
import { Grid } from '@teambit/base-react.layout.grid';
import { Video } from '@teambit/base-react.content.video';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { Button } from '@teambit/design.ui.buttons.button';
import graphImg from './graph.png';
import styles from './hero.module.scss';

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
  return (
    <Grid className={styles.hero}>
      <div>
        <Heading>{title}</Heading>
        <Subtitle>{teaser}</Subtitle>
        <Button>Getting Started</Button>
      </div>  
      <div>
        <Video autoPlay loop src="https://static.bit.dev/Community/hero/hero-video-1.mp4" />
      </div>
    </Grid>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser:
    'Forget about monolithic apps, start building component-driven software. Bit helps developers build better software with independent components and compose them into infinite features and apps.'
};
