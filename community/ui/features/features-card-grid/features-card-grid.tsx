import React from 'react';
import classNames from 'classnames';
import { FeaturesCard } from '@teambit/community.ui.features.features-card';
import { Features } from '@teambit/community.entity.features';
import styles from './features-card-grid.module.scss';

export type FeaturesCardGridProps = {
  /**
   * An object of features with title and text and icon props
   */
  features: Features[];
} & React.HTMLAttributes<HTMLDivElement>;

export function FeaturesCardGrid({
  features,
  className
}: FeaturesCardGridProps) {
  return (
    <div className={classNames(styles.featuresCardGrid, className)}>
      {features.map((feature) => (
        <FeaturesCard
          key={feature.title}
          title={feature.title}
          text={feature.text}
          image={feature.image}
          alt={feature.alt}
        />
      ))}
    </div>
  );
}
