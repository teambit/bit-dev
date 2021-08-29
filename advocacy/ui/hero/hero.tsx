import React from 'react';
import { H1 } from '@teambit/design.ui.heading';
// TODO: move to be in `design` owned by @amir.
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import styles from './hero.module.scss';

export type HeroProps = {
  /**
   * title to use in the Hero section.
   */
  title: string,

  /**
   * teaser.
   */
  teaser: string
};

export function Hero({ title, teaser }: HeroProps) {
  return (
    <div className={styles.hero}>
      <H1>
        {title}
      </H1>
      <Subtitle>{teaser}</Subtitle>
    </div>
  );
}

Hero.defaultProps = {
  title: 'Build anything in components',
  teaser: 'Forget about monolithic apps, start building component-driven software. Bit helps developers build better software with independent components and compose them into infinite features and apps.'
};
